import React from "react";
import FooterResponsive from "./FooterResponsive";

function Footer() {
  return (
    <footer className='hidden md:absolute md:flex md:flex-wrap md:justify-evenly md:items-center md:gap-36 md:h-full md:w-full md:bg-[#434748] md:py-10 md:pt-[20rem] md:px-8 md:text-secondary-color'>
      <div className=''>
        <img
          src='https://i.ibb.co/ScmK3y9/Frame.png'
          alt='footer logo'
          height={50}
          width={200}
        />
        <img
          src='https://i.ibb.co/LQYFvSV/Group-139.png'
          alt='footer socials icon'
          height={50}
          width={90}
          className='py-5'
        />
      </div>

      <div className='list-none flex flex-wrap gap-32 leading-9 tracking-[10px]'>
        <ul className='footerList'>
          <li>ホーム</li>
          <li>初めての方へ</li>
          <li>サロンのご紹介</li>
          <li>メニュー・料金</li>
          <li>お客様の声</li>
        </ul>

        <ul className='footerList'>
          <li>小顔ドクタースクール</li>
          <li>よくあるご質問</li>
          <li>ブロッゴ</li>
          <li>特定商取引法に基づく表記</li>
          <li>取材依頼</li>
        </ul>
      </div>

      <div className="flex flex-row justify-between w-full">
        <p>© KOGAO DOCTOR 2021</p>
        <p>
          キャンセルポリシー |
          プライバシーポリシー
        </p>
      </div>
    </footer>
  );
}

export default Footer;
