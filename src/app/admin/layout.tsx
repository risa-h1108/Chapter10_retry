"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); //現在のページのURLの「パス」を取得
  const isSelected = (href: string) => {
    return pathname.includes(href);
  };
  return (
    <>
      {/* サイドバー */}
      {/*fixed：画面をスクロールしてもこの要素が固定されて動かないようにします。 */}
      <aside className="fixed bg-gray-100 w-[280px] left-0 bottom-0 top-[92px]">
        <Link
          href="/admin/posts"
          className={`p-4 block hover:bg-blue-100
            ${isSelected("/admin/posts") && "bg-blue-100"}`} //`isSelected('/admin/posts')`が`true`の場合（つまり、現在のページが「/admin/posts」の場合）、背景色を青色にします。
          // `&&`は「そして」という意味で、前の条件が満たされたときに後ろのCSSクラスを適用します。
        >
          記事一覧
        </Link>
        <Link
          href="/admin/categories"
          className={`p-4 block hover:bg-blue-100 ${
            isSelected("/admin/categories") && "bg-blue-100"
          }`}
        >
          カテゴリー一覧
        </Link>
      </aside>

      {/* メインエリア */}
      {/*{children}:`AdminLayout`コンポーネントが囲む中身（子要素）が入る */}
      <div className="ml-[280px]">{children}</div>
    </>
  );
}
