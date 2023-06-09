'use client'
import { motion } from "framer-motion";
import React from "react";

export default function hero() {
  return (
    <div className='grid grid-cols-2 bg-[#E0E2E0] overflow-hidden'>
      {/* left content start */}
      <div className='m-0 h-[10rem] md:h-fit md:m-auto'>
        {/* head wording dekstop start */}
        <div className='hidden md:block'>
          <h1 className='text-3xl leading-[3rem] text-[#5D6163]'>
            大人女性のための
            <br />
            たるみ改善小顔サロン
            <br />
            「重力を忘れたような引き上がり」
          </h1>
        </div>
        {/* head wording dekstop end */}

        {/* head wording mobile start */}
        <div className='md:hidden'>
          <h1 className='text-3xl leading-[2.4rem] text-[#5D6163] flex pt-10 pl-10 tracking-[15px]'>
            <br />
            重
            <br />
            力
            <br />
            を
            <br />
            忘
            <br />
            れ
            <br />
            た
            <br />
            よ
            <br />
            う
            <br />
            な
            <br />
            引
            <br />
            き
            <br />
            上
            <br />
            が
            <br />
            り
            <br />
            <p>
              た
              <br />
              る
              <br />
              み
              <br />
              改
              <br />
              善
              <br />
              小
              <br />
              顔
              <br />
              サ
              <br />
              ロ
              <br />ン
            </p>
            <p>
              大
              <br />
              人
              <br />
              女
              <br />
              性
              <br />
              の
              <br />
              た
              <br />
              め
              <br />の
            </p>
          </h1>
        </div>
        {/* head wording mobile end */}

        <div className='flex flex-col space-y-7 w-[12rem] pt-10 invisible md:visible'>
          <hr className='border border-[#C6AD99] w-[50%]' />
          <button className='border border-[#C6AD99] transition-all py-4 hover:bg-[#C6AD99] hover:text-[#fff] hover:border-[#C6AD99]'>
            詳細はこちら
          </button>
          <button className='bg-[#C6AD99] border border-[#C6AD99] transition-all py-5 text-[#fff] hover:bg-opacity-0 hover:text-[#333] hover:border-[#C6AD99]'>
            詳細はこちら
          </button>
        </div>
      </div>
      {/* left content end */}

      {/* right content */}
      <div className='relative right-20 md:right-0 object-cover h-fit w-[33rem] pt-10'>
        <motion.img
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
          src='/assets/bg-hero.png'
          alt='hero background'
          width={800}
          height={80}
        />
      </div>
      {/* right content end */}
    </div>
  );
}
