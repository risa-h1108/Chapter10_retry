import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Category } from "@/app/_types/Category";
import { useEffect } from "react";

interface Props {
  selectedCategories: Category[];
  setSelectedCategories: (categories: Category[]) => void;
}

export const CategoriesSelect: React.FC<Props> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  //handleChange:カテゴリーの選択が変更されたときに呼び出される関数
  const handleChange = (value: number[]) => {
    /*value配列の各要素（カテゴリーID）に対して処理を行います。
    `forEach`は配列の各要素に対して指定した関数を実行 */
    value.forEach((v: number) => {
      /*someメソッド:`selectedCategories`配列の中に、現在のカテゴリーID（`v`）と一致するIDが存在するかを確認 */
      const isSelect = selectedCategories.some((c) => c.id === v);
      if (isSelect) {
        setSelectedCategories(selectedCategories.filter((c) => c.id !== v));
        return;
      }
      const category = categories.find((c) => c.id === v);
      //`categories`配列に一致するIDが見つからなかった場合）、関数は`return`を実行して、現在の反復を終了
      if (!category) return;
      setSelectedCategories([...selectedCategories, category]);
    });
  };

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("/api/admin/categories");
      const { categories } = await res.json();
      setCategories(categories);
    };
    fetcher();
  }, []);

  return (
    <FormControl className="w-full">
      <Select
        multiple
        value={selectedCategories}
        onChange={(e) => handleChange(e.target.value as unknown as number[])}
        input={<OutlinedInput />}
        renderValue={(selected: Category[]) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value: Category) => (
              <Chip key={value.id} label={value.name} />
            ))}
          </Box>
        )}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
