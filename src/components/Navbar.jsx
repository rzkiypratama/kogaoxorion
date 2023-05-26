"use client";
import Image from "next/image";
import React, { useState } from "react";
Image;

export default function header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      {/* dekstop navbar start */}
      <nav className='hidden md:block bg-[#E0E2E0]'>
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

        <div className='border-y-[1px] border-[#C6AD99] flex justify-center'>
          <ul className='flex '>
            <li className='heroButton'>ホーム</li>
            <li className='heroButton'>
              初めての方へ
            </li>
            <li className='heroButton'>
              サロンのご紹介
            </li>
            <li className='heroButton'>
              メニュー・料金
            </li>
            <li className='heroButton'>
              お客様の声
            </li>
            <li className='heroButton'>
              小顔ドクタースクール
            </li>
            <li className='heroButton'>
              よくあるご質問
            </li>
            <li className='heroButton'>
              ブロッゴ
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar dekstop end */}

      {/* navbar mobile start */}
      <nav className='md:hidden w-full bg-[#FFF] shadow'>
        <div className='items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div>
            <div className='flex flex-row-reverse items-center justify-between py-3 md:py-5 md:block'>
              <a href='#'>
                <div className='py-5 px-2 pr-[5.2rem]'>
                  <Image
                    src='/kogao.svg'
                    alt='Kogao Logo'
                    className='dark:invert'
                    width={200}
                    height={300}
                  />
                </div>
              </a>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border float-left'
                  onClick={() =>
                    setNavbar(!navbar)
                  }
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className='items-center text-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>ホーム</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>初めての方へ</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>サロンのご紹介</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>メニュー・料金</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>お客様の声</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>
                    小顔ドクタースクール
                  </a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>よくあるご質問</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='#'>ブロッゴ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar mobile end */}
    </header>
  );
}
