import MobileTitle from './ResponsiveHeader'
import React from "react";

export default function hero() {
  return (
    <div className='grid grid-cols-2 bg-[#E0E2E0] overflow-hidden'>
      {/* left content start */}
      <div className='m-0 h-[10rem] md:h-fit md:m-auto'>
        <div className='hidden md:block'>

          {/* heading dekstop */}
          <h1 className='text-3xl leading-[3rem] text-[#5D6163]'>
            大人女性のための 
            <br />
            たるみ改善小顔サロン
            <br />
            「重力を忘れたような引き上がり」
          </h1>
        </div>

        {/* heading mobile */}
        <MobileTitle/>

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
      <div className='relative right-24 md:right-0 object-cover h-fit w-[33rem] pt-10'>
        <img
          src='https://i.ibb.co/CPNqDgD/hero-bg.png'
          alt='hero background'
          width={800}
          height={80}
        />
      </div>
      {/* right content end */}
    </div>
  );
}
