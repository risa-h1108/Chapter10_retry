//カテゴリー新規作成ページ admin/categories/new

"use client";

import { useState } from "react";
import { CategoryForm } from "@/app/admin/categories/_components/CategoryForm";
import { useRouter } from "next/navigation";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";

export default function Page() {
  const [name, setName] = useState("");
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!token) return;
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 👈 Header に token を付与
        },
        //`name`という変数をJSON形式の文字列に変換
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        throw new Error("Failed to create category");
      }
      const { id } = await res.json();
      router.push(`/admin/categories/${id}`);
      alert("カテゴリーを作成しました。");
    } catch (error) {
      //error:エラーの詳細情報を保持するオブジェクト
      console.error("Error creating category:", error);
      alert("カテゴリーの作成に失敗しました。もう一度ご実施ください。");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">カテゴリー作成</h1>
      </div>

      <CategoryForm
        mode="new"
        name={name}
        setName={setName}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
