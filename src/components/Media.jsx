import React from "react";

export default function media() {
  return (
    <div className='bg-[#F8F4ED] text-center text-main-color'>
      <div className='flex justify-center items-center p-7 '>
        <hr className='border-[#C6AD99]/90 border-1 w-full my-5 mx-auto' />
        <h1 className='tracking-[3px] sm:tracking-[10px] w-full text-sm uppercase'>
          media
        </h1>
        <hr className='border-[#C6AD99]/90 border-1 w-full sm:w-full my-5 mx-auto' />
      </div>
      <p className='text-4xl'>メディア情報</p>

      {/* media content logo */}
      <div className='grid grid-cols-2 sm:grid-cols-7 place-items-center gap-8 pt-8 px-10 sm:px-14'>
        <img
          src='https://i.ibb.co/tXW0xCc/ACT4-logo-1.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/mhzrQhJ/Cosme-logo-removebg-preview.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/HxWkmBM/st-logo.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/HPstrc9/st-online-logo-1-removebg-preview.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/rdZM1vy/Classy-logo-removebg-preview.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/sJhybbf/sesame.png'
          alt='act 4'
          height={50}
          width={80}
        />
        <img
          src='https://i.ibb.co/F6Qt4pf/yahoo.png'
          alt='act 4'
          height={50}
          width={100}
          className='col-span-2 sm:col-span-1'
        />
      </div>

      {/* media content magazine */}
      <div className='flex justify-center gap-0 sm:flex-none sm:grid-cols-6 sm:place-items-center sm:gap-10 sm:px-16 m-auto pt-10 pb-10 overflow-x-scroll snap-x snap-mandatory'>
        <img
          src='https://i.ibb.co/BN1fhjN/293110.png'
          alt='magazine'
          height={120}
          width={170}
        />
        <img
          src='https://i.ibb.co/8c1H9rp/received-557244725051477.png'
          alt='magazine'
          height={120}
          width={170}
        />
        <img
          src='https://i.ibb.co/WshGssT/293107-1.png'
          alt='magazine'
          height={120}
          width={170}
        />
        <img
          src='https://i.ibb.co/0CxW962/282025.png'
          alt='magazine'
          height={120}
          width={170}
        />
        <img
          src='https://i.ibb.co/BKvbhjt/291717.png'
          alt='magazine'
          height={120}
          width={170}
        />
        <img
          src='https://i.ibb.co/BN1fhjN/293110.png'
          alt='magazine'
          height={120}
          width={170}
        />
      </div>

      <section className='bg-main-color text-center text-[#FFF] sm:text-left px-8 md:px-24 py-4 sm:py-5 mx-auto sm:flex sm:justify-evenly '>
        <div className='sm:w-full sm:my-3 pt-8'>
          <h1 className='text-xs sm:text-sm font-thin tracking-[10px] pl-4 sm:pl-0'>
            MENU & PRICING
          </h1>
          <p className='text-3xl pt-5'>
            メニューの一覧はこちら。
          </p>
        </div>
        <button className='my-12 border border-[#FFF] transition-all py-4 sm:w-[20%] w-full text-[#fff] hover:bg-[#C6AD99] hover:text-[#333] hover:border-[#C6AD99]'>
          料金のご案内
        </button>
      </section>
    </div>
  );
}
