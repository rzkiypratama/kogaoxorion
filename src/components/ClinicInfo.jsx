"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ClinicInfo() {
  return (
    <div className='flex flex-col-reverse md:flex-row p-0 sm:px-24 '>
      {/* left content */}
      <div className='w-full px-5 md:py-[3.5rem] md:w-[65%]'>
        <div className='flex flex-row pt-8 md:pt-0'>
          <h1 className='tracking-[10px] font-thin text-sm text-main-color uppercase'>
            clinic
          </h1>
          <hr className='border-[#C6AD99]/90 w-[80%] sm:w-[100%] mt-2 ml-8 sm:ml-[5rem] md:ml-0 md:mr-10' />
        </div>

        <p className='text-3xl py-8 text-main-color'>
          サロンについて
        </p>

        <div className='grid sm:grid-cols-3'>
          <div>
            <p className='py-4 text-secondary-color'>
              ロケーション
            </p>
            <p className='text-main-color'>
              赤坂サロン
              <br />
              〒107-0052
              <br />
              東京都港区赤坂6-9-5
              <br />
              氷川アネックス2号館305
            </p>
          </div>

          <div>
            <p className='py-4 text-secondary-color'>
              営業時間
            </p>
            <p className='text-main-color'>
              月～日 11:00~21:00
              <br />
              (最終受付20:00)
              <br />
              ※不定休
            </p>
          </div>

          <div>
            <p className='py-4 text-secondary-color'>
              駐車場
            </p>
            <p className='text-main-color'>
              赤坂パーキングセンター
              <br />
              ※提携ではありません。
            </p>
          </div>
        </div>

        <button className='my-12 border border-secondary-color transition-all py-4 sm:w-[35%] w-full text-main-color hover:bg-[#C6AD99] hover:text-[#333] hover:border-[#C6AD99]'>
          LINEでお問い合わせ
        </button>

        <p className='py-4 text-secondary-color'>
          アクセス
        </p>
        <p className='text-main-color'>
          赤坂駅B5出口 徒歩約5分
        </p>

        <img
          src='https://i.ibb.co/MVrKVNb/Group-132.png'
          alt='video thumbnail'
          height={30}
          width={300}
          className='pt-5 w-full md:w-fit pb-4'
        />
      </div>

      {/* right content */}
      <div className='w-full md:w-[35%]'>
        <div className='flex justify-center'>
          <img
            src='https://i.ibb.co/wB3JXqx/Rectangle-31-1.png'
            alt='white background'
            height={100}
            width={200}
            className='object-fill bg-no-repeat md:h-fit md:invisible'
          />
          <img
            src='https://i.ibb.co/8c2rQpJ/J6-A3330-A-1-1.png'
            alt='clinic image'
            height={100}
            width={200}
            className='object-cover bg-no-repeat overflow-hidden md:overflow-visible h-[31rem] md:h-full md:w-fit w-full'
          />
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src='/assets/clinic-img.png'
            alt='clinic image'
            height={100}
            width={200}
            className='object-cover bg-no-repeat absolute w-full md:w-fit py-5 px-5 md:h-[39rem] md:pt-24'
          />
        </div>
      </div>
    </div>
  );
}
