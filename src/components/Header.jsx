import Image from "next/image";
import React from "react";
Image;

export default function header() {
  return (
    <header className="hidden md:block bg-[#E0E2E0]">
      {/* dekstop navbar start */}
      <div className='flex justify-between py-5 px-0 md:px-14 m-auto'>
        <Image
          src='/kogao.svg'
          alt='Kogao Logo'
          className='dark:invert'
          width={180}
          height={300}
        />
        <button className='hidden md:block bg-[#5D6163] py-4 px-10 text-[#fff] text-sm tracking-[10px] hover:bg-[#333]'>
          ご予約
        </button>
      </div>

      <div className="border-y-[1px] border-[#C6AD99] flex justify-center">
        <ul className="flex ">
        <li className="heroButton">ホーム</li>
        <li className="heroButton">初めての方へ</li>
        <li className="heroButton">サロンのご紹介</li>
        <li className="heroButton">メニュー・料金</li>
        <li className="heroButton">お客様の声</li>
        <li className="heroButton">小顔ドクタースクール</li>
        <li className="heroButton">よくあるご質問</li>
        <li className="heroButton">ブロッゴ</li>
        </ul>
      </div>
      {/* dekstop navbar end */}
    </header>
  );
}
