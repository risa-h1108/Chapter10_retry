import React from "react";
import { Category } from "@/app/_types/Category";
import { useEffect } from "react";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";

interface Props {
  selectedCategories: Category[];
  setSelectedCategories: (categories: Category[]) => void;
}

export const CategoriesSelect: React.FC<Props> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const { token } = useSupabaseSession();

  useEffect(() => {
    const fetcher = async () => {
      if (!token) return;

      try {
        const res = await fetch("/api/admin/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const { categories } = await res.json();
        console.log(categories);

        setCategories(categories);
      } catch (error) {
        console.error(error);
        alert("カテゴリーの取得に失敗しました。再度試してください");
      }
    };

    fetcher();
  }, [token]);

  //handleChange:カテゴリーの選択が変更されたときに呼び出される関数
  const handleChange = (category: Category) => {
    const isSelect = selectedCategories.some((c) => c.id === category.id);

    //カテゴリが既に選択されている場合の処理
    if (isSelect) {
      setSelectedCategories(
        selectedCategories.filter((c) => c.id !== category.id)
      );
      //カテゴリが未選択の場合の処理
    } else {
      setSelectedCategories([...selectedCategories, category]); //[...] を使って、既存の選択済みカテゴリに新しいカテゴリを追加
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        {/*各カテゴリに対するボタンを生成 */}
        {categories.map((category) => {
          {
            /*選択したカテゴリーが既に選択されたカテゴリーに含まれているか確認、
          some:配列内に条件を満たす要素が少なくとも一つ存在するかを判定 */
          }
          const isSelected = selectedCategories.some(
            (c) => c.id === category.id
          );

          return (
            <button
              key={category.id}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-bold outline outline-1 ${
                isSelected
                  ? " bg-white text-blue-500"
                  : "bg-white text-gray-700 outline-gray-300"
              }`}
              onClick={() => handleChange(category)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
