import React from "react";

export default function testimonial() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* right content */}
      <div>
        <div className='bg-[#F8F4ED] h-[100%]'>
          <img
            src='https://i.ibb.co/L0nHvfH/Fotor-160277902060167-1.png'
            alt='testimonial background'
            className='absolute sm:w-[39.3%]'
          />

          <div className='relative w-fit h-fit bg-[#FFF] px-2 m-auto top-10 sm:left-[12rem]'>
            <h1 className='text-2xl font-thin pt-6 text-main-color'>
              え。。。！？たった１回で！
            </h1>
            <hr className='border-[#C6AD99]/90 border-1 w-full my-5 mx-auto' />
            <div className='flex justify-between pb-5 text-main-color'>
              <p>
                ◎ お肌のトーンアップ
                <br />
                ◎ スッキリ小顔
                <br />◎ エラ解消{" "}
              </p>
              <p>痛くない</p>
            </div>
            <img
              src='https://i.ibb.co/jWLG4Vw/testimonial-image.png'
              alt='testimonial image'
              className='pb-1'
            />
          </div>
        </div>
      </div>
      {/* content right */}
      <div className='bg-[#FFFCF6] px-[1rem] sm:px-[5rem] pt-24 sm:pt-10'>
        <div className='grid grid-cols-2'>
          <h1 className='tracking-[10px] font-thin text-sm text-main-color uppercase'>
            testimonial
          </h1>
          <hr className='border-[#C6AD99]/90 w-[80%] sm:w-[100%] mt-2 ml-8 sm:ml-[5rem] md:ml-0' />
        </div>
        <p className='text-4xl text-main-color py-7'>
          お客様の感想
        </p>
        {/* testimonial card start */}
        <div className='flex'>
          <div className='pr-4'>
            <img
              src='https://i.ibb.co/tZR8cK8/image.png'
              alt='quotation mark'
              height={50}
              width={150}
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'>
              今日で４回目の施術を受けさせて頂きました。
              お顔全体のたるみがなくなってきて
              フェイスラインがすっきり頭も小さくなってきた様に感じます。
              先生は明るく柔らかい印象で何でもご相談でき施術に大満足です。
              サロンはラグジュアリーな空間で癒されます。
            </p>
            <p className='text-[#C6AD99]'>
              ゲスト1
            </p>
          </div>
        </div>
        <hr className='border-[#C6AD99]/90 w-[100%] mt-2 md:ml-0' />
        {/* testimonial card ends */}
        {/* testimonial card start */}
        <div className='flex pt-7'>
          <div className='pr-4'>
            <img
              src='https://i.ibb.co/tZR8cK8/image.png'
              alt='quotation mark'
              height={50}
              width={150}
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'>
              今日で４回目の施術を受けさせて頂きました。
              お顔全体のたるみがなくなってきて
              フェイスラインがすっきり頭も小さくなってきた様に感じます。
              先生は明るく柔らかい印象で何でもご相談でき施術に大満足です。
              サロンはラグジュアリーな空間で癒されます。
            </p>
            <p className='text-[#C6AD99]'>
              ゲスト1
            </p>
          </div>
        </div>
        <hr className='border-[#C6AD99]/90 w-[100%] mt-2 md:ml-0' />
        {/* testimonial card ends */}
        {/* testimonial card start */}
        <div className='flex pt-7'>
          <div className='pr-4'>
            <img
              src='https://i.ibb.co/tZR8cK8/image.png'
              alt='quotation mark'
              height={50}
              width={150}
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'>
              今日で４回目の施術を受けさせて頂きました。
              お顔全体のたるみがなくなってきて
              フェイスラインがすっきり頭も小さくなってきた様に感じます。
              先生は明るく柔らかい印象で何でもご相談でき施術に大満足です。
              サロンはラグジュアリーな空間で癒されます。
            </p>
            <p className='text-[#C6AD99]'>
              ゲスト1
            </p>
          </div>
        </div>
        {/* testimonial card ends */}
        <button className='my-10 mx-auto border border-[#C6AD99] transition-all py-4 w-full md:w-[30%] float-right text-main-color hover:bg-[#C6AD99] hover:text-[#333] hover:border-[#C6AD99]'>
          さらに見る
        </button>
      </div>
    </div>
  );
}
