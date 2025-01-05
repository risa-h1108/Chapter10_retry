"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PostForm } from "@/app/admin/_components/PostForm";
import { Category } from "@/app/_types/Category";
import { Post } from "@/app/_types/Post";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailImageKey, setThumbnailImageKey] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const { id } = useParams();
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (e: React.FormEvent) => {
    // フォームのデフォルトの動作をキャンセルします。
    e.preventDefault();
    if (!token) return;

    try {
      //記事を作成
      await fetch(`/api/admin/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 👈 Header に token を付与
        },
        body: JSON.stringify({ title, content, thumbnailImageKey, categories }),
      });
      alert("記事を更新しました。");
    } catch (error) {
      console.error("Error fetching post", error);
      alert("失敗しました。もう一度お試しください。");
    }
  };

  const handleDeletePost = async () => {
    if (!confirm("記事を削除しますか？")) return;

    try {
      await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
      });
      alert("記事を削除しました");
    } catch (error) {
      console.error("Error deleting posts:", error);
      alert("記事の削除に失敗しました。再度実施してください。");
    }
    router.push("/admin/posts");
  };

  useEffect(() => {
    if (!token) return;
    const fetcher = async () => {
      try {
        const res = await fetch(`/api/admin/posts/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // 👈 Header に token を付与
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data); // 全体のデータを確認

        if (data.post) {
          const { post }: { post: Post } = data;
          console.log(post.postCategories); // カテゴリがあるか確認

          setTitle(post.title);
          setContent(post.content);
          setThumbnailImageKey(post.thumbnailImageKey);

          // post.postCategories（サーバーからのレスポンス）からCategory[]（フロントエンドの期待の型）への変換
          const categories = post.postCategories.map((pc) => pc.category);
          setCategories(categories);
        } else {
          console.error("Post data is missing");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("記事の更新に失敗しました。もう一度お試しください。");
      }
    };

    fetcher();
  }, [id, token]);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">記事編集</h1>
      </div>

      <PostForm
        mode="edit"
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        thumbnailImageKey={thumbnailImageKey}
        setThumbnailImageKey={setThumbnailImageKey}
        categories={categories}
        setCategories={setCategories}
        onSubmit={handleSubmit}
        onDelete={handleDeletePost}
      />
    </div>
  );
}
