"use client";
import { useState, ChangeEvent, useRef } from "react";
import { useSupabaseSession } from "@/app/_hooks/useSupabaseSession";
import { supabase } from "@/app/untils/supabase";
import CryptoJS from "crypto-js";
import Image from "next/image";

// ファイルのMD5ハッシュ値を計算する関数
const calculateMD5Hash = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const wordArray = CryptoJS.lib.WordArray.create(buffer);
  return CryptoJS.MD5(wordArray).toString();
};

const Page: React.FC = () => {
  const bucketName = "post_thumbnail";
  const [coverImageUrl, setCoverImageUrl] = useState<string | undefined>();
  const [coverImageKey, setCoverImageKey] = useState<string | undefined>();
  const { session } = useSupabaseSession();
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setCoverImageKey(undefined); // 画像のキーをリセット
    setCoverImageUrl(undefined); // 画像のURLをリセット

    // 画像が選択されていない場合は戻る
    if (!e.target.files || e.target.files.length === 0) return;

    // 複数ファイルが選択されている場合は最初のファイルを使用する
    const file = e.target.files?.[0];

    // ファイルのハッシュ値を計算
    const fileHash = await calculateMD5Hash(file);

    // バケット内のパスを指定
    const path = `private/${fileHash}`;

    // ファイルが存在する場合は上書きするための設定 → upsert: true
    const { data, error } = await supabase.storage
      .from("post_thumbnail")
      .upload(path, file, { upsert: true });

    if (error || !data) {
      window.alert(`アップロードに失敗 ${error.message}`);
      return;
    }
    // 画像のキー (実質的にバケット内のパス) を取得
    setCoverImageKey(data.path);
    const publicUrlResult = supabase.storage
      .from(bucketName)
      .getPublicUrl(data.path);
    // 画像のURLを取得
    setCoverImageUrl(publicUrlResult.data.publicUrl);
  };

  // ログインしていないとき (＝supabase.storageが使えない状態のとき)
  if (!session) return <div>ログインしていません。</div>;

  return (
    <div>
      <input
        id="imgSelector"
        type="file" // ファイルを選択するinput要素に設定
        accept="image/*" // 画像ファイルのみを選択可能に設定
        className="rounded-md bg-indigo-500 px-3 py-1 text-white"
        onChange={handleImageChange}
        hidden={true} // 非表示に設定
        ref={hiddenFileInputRef} // 参照を設定
      />

      <button
        // 参照を経由してプログラム的にクリックイベントを発生させる
        onClick={() => hiddenFileInputRef.current?.click()}
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-1 text-white"
      >
        ファイルを選択
      </button>

      <div className="break-all text-sm">coverImageKey : {coverImageKey}</div>
      <div className="break-all text-sm">coverImageUrl : {coverImageUrl}</div>
      {coverImageUrl && (
        <div className="mt-2">
          <Image
            className="w-1/2 border-2 border-gray-300"
            src={coverImageUrl}
            alt="プレビュー画像"
            width={1024}
            height={1024}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default Page;
