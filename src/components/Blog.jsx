import React from "react";

export default function Blog() {
  return (
    <div>
      <div className='px-5 md:px-[7rem] py-14 bg-main-color text-[#fff]'>
        <div className='flex flex-row md:pt-0'>
          <h1 className='tracking-[10px] font-thin text-sm uppercase'>
            blog
          </h1>
          <hr className='border-[#C6AD99]/90 w-[80%] sm:w-[100%] mt-2 ml-8 sm:ml-[5rem] md:ml-0 md:mr-10' />
        </div>
        <p className='text-3xl py-8'>ブログ</p>

        <div className='md:grid md:grid-cols-4 place-items-center'>
          <div>
            <img
              src='https://i.ibb.co/NnY2ZxY/image-9.png'
              alt='blog image'
              height={100}
              width={300}
              className='w-full md:w-fit pb-4'
            />
            <p>タイトル１</p>
          </div>
          <div className='hidden md:block'>
            <img
              src='https://i.ibb.co/gb09nbz/image-12.png'
              alt='blog image'
              height={100}
              width={300}
              className='w-full md:w-fit pb-4'
            />
            <p>タイトル2</p>
          </div>
          <div className='hidden md:block'>
            <img
              src='https://i.ibb.co/P6f7jv6/image-10.png'
              alt='blog image'
              height={100}
              width={300}
              className='w-full md:w-fit pb-4'
            />
            <p>タイトル3</p>
          </div>
          <div className='hidden md:block'>
            <img
              src='https://i.ibb.co/n8wBqHM/image-11.png'
              alt='blog image'
              height={100}
              width={300}
              className='w-full md:w-fit pb-4'
            />
            <p>タイトル4</p>
          </div>
        </div>
        <img
          src='https://i.ibb.co/G7C1h9W/dots.png'
          alt='dots dummy'
          height={100}
          width={80}
          className='relative left-[40%] mt-8 md:hidden'
        />
      </div>

      <div className='text-center text-main-color items-center w-full'>
        <div className='flex justify-center items-center pt-7 px-7'>
          <hr className='border-[#C6AD99]/90 border-1 w-full my-5 mx-auto' />
          <h1 className='tracking-[7px] px-4 sm:tracking-[10px] w-full text-sm uppercase'>
            instagram
          </h1>
          <hr className='border-[#C6AD99]/90 border-1 w-full sm:w-full my-5 mx-auto' />
        </div>
        <p className='text-3xl pb-4'>インスタ</p>

        <div className='flex justify-center w-full overflow-x-auto m-auto'>
          <img
            src='https://i.ibb.co/9N5dW2S/image-13.png'
            alt='instagram kogao'
          />
          <img
            src='https://i.ibb.co/7SFj1Q6/image-15.png'
            alt='instagram kogao'
          />
          <img
            src='https://i.ibb.co/C6grHY7/image-16.png'
            alt='instagram kogao'
          />
          <img
            src='https://i.ibb.co/9N5dW2S/image-13.png'
            alt='instagram kogao'
          />
          <img
            src='https://i.ibb.co/7SFj1Q6/image-15.png'
            alt='instagram kogao'
          />
          <img
            src='https://i.ibb.co/C6grHY7/image-16.png'
            alt='instagram kogao'
          />
        </div>
      </div>

      <img
        src='https://i.ibb.co/DCf1nKp/image-7.png'
        alt='map kogao'
        height={100}
        width={800}
        className='bg-no-repeat object-fill hidden md:block w-full'
      />
      <img
        src='https://i.ibb.co/KKvrsfM/map-square.png'
        alt='square map kogao'
        height={100}
        width={800}
        className='bg-no-repeat object-fill block md:hidden w-full'
      />
    </div>
  );
}
