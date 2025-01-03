//カテゴリー編集ページ admin/categories/[id]

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CategoryForm } from "@/app/admin/categories/_components/CategoryForm";

export default function Page() {
  const [name, setName] = useState("");
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        throw new Error("Failed to update category");
      }

      alert("カテゴリーを更新しました。");
    } catch (error) {
      console.error("Error updating category:", error);
      alert("カテゴリーの更新に失敗しました。もう一度お試しください。");
    }
  };

  const handleDeletePost = async () => {
    if (!confirm("カテゴリーを削除しますか？")) return;

    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete category");
      }

      alert("カテゴリーを削除しました。");
      router.push("/admin/categories");
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("カテゴリーの削除に失敗しました。もう一度お試しください。");
    }
  };

  //`id`が変わるたびにデータを取得するように設定
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/api/admin/categories/${id}`);
      const { category } = await res.json();
      // 取得したカテゴリーの名前(category.name)を`setName`関数で状態に保存
      setName(category.name);
    };

    fetcher();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">カテゴリー編集</h1>
      </div>

      <CategoryForm
        mode="edit"
        name={name}
        setName={setName}
        onSubmit={handleSubmit}
        onDelete={handleDeletePost}
      />
    </div>
  );
}
