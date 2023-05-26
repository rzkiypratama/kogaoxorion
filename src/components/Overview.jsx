"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function overview() {
  return (
    <div>
      <section className='md:grid md:grid-cols-2'>
        {/* left content */}
        <div className='px-[2rem] py-[3rem] md:px-[7rem] md:py-[5rem] bg-[#FFFCF6]'>
          <div className='grid grid-cols-2'>
            <h1 className='tracking-[10px] font-thin text-md text-main-color w-[18rem]'>
              ABOUT KOGAO
            </h1>
            <hr className='border-[#C6AD99]/90 w-[55%] md:w-[125%] mt-2 ml-[5rem] md:ml-0' />
          </div>

          <p className='text-3xl text-main-color pt-8'>
            私のかかりつけ
            <br />
            小顔ドクター® 赤坂
          </p>

          <p className='pt-8 pb-8 text-main-color'>
            &quot;たるみ&quot;はこの瞬間も刻々と進行中・・・
            <br />
            鏡や写真を見る度に心を悩ますたるみ・ほうれい線。
          </p>
          <div className='border-l border-l-secondary-color ml-4 z-40'>
            <p className='text-xl text-main-color pl-6'>
              小顔ドクターでは人体学に基づいた施術で
              <br />
              眠ってしまった表情筋を目覚めさせ活性化を
              <br />
              促すことで重力を忘れた美しいお顔に導きます。
            </p>
          </div>

          <h3 className='pt-8 text-main-color'>
            赤坂・銀座・青山・白金台・ニューヨーク等の一等地で
            <br />
            15000人の大人女性の悩みを改善した
            <br />
            小顔ドクターがアナタを救います。
          </h3>
          <div className='pt-8 md:pt-5'>
            <button className='border border-[#C6AD99] transition-all py-4 w-full md:w-[54%] text-main-color/90 hover:bg-[#C6AD99] hover:text-white hover:border-[#C6AD99]'>
              クリニックのご紹介
            </button>
          </div>
        </div>

        <div className='object-fill bg-no-repeat overflow-hidden w-full lg:w-full lg:h-fit'>
          <img
            src='/assets/overview-img.jpg'
            alt='overview first image'
            width='100%'
            height={300}
          />
        </div>
      </section>

      {/* right content */}
      <section className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-[50%]'>
          <div className='object-fill bg-no-repeat w-full'>
            <img
              src='/assets/overview-1.svg'
              alt='overview second image'
              width='100%'
              height={300}
            />
          </div>
        </div>

        <div className='bg-main-color flex flex-col justify-center text-center w-full md:w-[50%]'>
          <div className='object-fill bg-no-repeat w-full p-6 md:hidden'>
            <Image
              src='/assets/overview-2.svg'
              alt='overview second image'
              width={720}
              height={300}
            />
          </div>
          <h1 className='text-3xl font-extralight leading-[3rem] text-[#fff]'>
            ⌈すぐにでも〜あなたへ⌋を
            <br />
            コロナ応援価格に変更
          </h1>
          <hr className='border-[#C6AD99]/90 border-2 w-[17%] my-5 mx-auto' />
          <h3 className='text-2xl leading-[2rem] text-[#fff]'>
            1日1名様限定
            <br />
            初回小顔ドクターコース
            <br />
            120分 9,800円 (通常22,000円)
          </h3>

          <div className='md:grid md:grid-cols-2'>
            <button className='my-10 mx-auto border border-[#FFF] transition-all py-4 w-[90%] text-[#fff] hover:bg-[#C6AD99] hover:text-[#333] hover:border-[#C6AD99]'>
              詳しくはコチラ
            </button>
            <button className='hidden md:block md:my-10 md:mx-auto md:border md:border-[#FFF] md:transition-all md:py-4 md:w-[90%] md:text-[#fff] md:hover:bg-[#C6AD99] md:hover:text-[#333] md:hover:border-[#C6AD99]'>
              詳しくはコチラ
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-[#787E82] w-full h-full md:text-center text-[#fff]'>
          <img
            src='https://i.ibb.co/09djFKw/282021-2.png'
            alt='background overlay'
            className='object-cover bg-no-repeat w-full h-full md:h-fit absolute mix-blend-overlay'
          />

          <div className='flex justify-center items-center py-7 px-5 max-w-full'>
            <hr className='hidden md:block border-[#C6AD99]/90 border-1 w-full my-5 mx-auto' />
            <h1 className='tracking-[3px] md:tracking-[10px] w-full text-xs md:text-sm'>
              WHY CHOOSE KOGAO
            </h1>
            <hr className='border-[#C6AD99]/90 border-1 w-[90%] md:w-full my-5 mx-auto' />
          </div>

          <h3 className='text-3xl pl-7'>
            選ばれる理由
          </h3>
          <p className='text-2xl px-7 py-5'>
            大人女性を「お顔の悩みから救いたい」
          </p>
          <p className='text-md px-7 md:pb-5'>
            これまで銀座・赤坂・青山・ニューヨークの地で
            <br />
            約15000人のお顔の悩みに寄り添い
            <br />
            期待を超えるリフトアップや小顔効果を提供してきました。
          </p>
          <p className='text-xl md:text-3xl px-7 py-5'>
            小顔ドクターがお客様から支持される理由は
          </p>

          <div className='grid grid-cols-1 space-y-10 md:grid-cols-3 pt-2 mb-5 md:mb-8'>
            <div className='container text-left px-5 md:px-[4.5rem] pt-10 md:h-fit'>
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='/assets/img-1.png'
                alt='container image'
                width={720}
              />
              <img
                src='https://i.ibb.co/9YMqSDw/image.png'
                alt='number'
                width={20}
                className='pt-6'
              />
              <p>
                人体学に基づいた独自の
                <br />
                顔筋蘇生タッチ
              </p>
              <hr className='border-[#C6AD99]/90 border-2 w-14 my-5' />
              <article>
                施術時の痛みやお肌への強い刺激はたるみ・顔の
                肥大化を加速させます。
                人体学と経験から導き出した「極無痛」の接触技術でお顔の筋肉を蘇らせ
                歯科、鍼灸、整体、エステの要素を織り交ぜた独自の施術で他のサロン様よりも
                非常に高い効果を生み出します。
              </article>
            </div>

            <div className='container text-left px-5 md:px-[4.5rem]'>
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='/assets/img-2.png'
                alt='container image'
                width={720}
              />
              <img
                src='https://i.ibb.co/jhBMtkb/image.png'
                alt='number'
                width={20}
                className='pt-6'
              />
              <p>
                人体学に基づいた独自の
                <br />
                顔筋蘇生タッチ
              </p>
              <hr className='border-[#C6AD99]/90 border-2 w-14 my-5' />
              <article>
                施術時の痛みやお肌への強い刺激はたるみ・顔の
                肥大化を加速させます。
                人体学と経験から導き出した「極無痛」の接触技術でお顔の筋肉を蘇らせ
                歯科、鍼灸、整体、エステの要素を織り交ぜた独自の施術で他のサロン様よりも
                非常に高い効果を生み出します。
              </article>
            </div>

            <div className='container text-left px-5 md:px-[4.5rem]'>
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='/assets/img-3.png'
                alt='container image'
                width={720}
              />
              <img
                src='https://i.ibb.co/hWLvtFW/image.png'
                alt='number'
                width={20}
                className='pt-6'
              />
              <p>
                人体学に基づいた独自の
                <br />
                顔筋蘇生タッチ
              </p>
              <hr className='border-[#C6AD99]/90 border-2 w-14 my-5' />
              <article>
                施術時の痛みやお肌への強い刺激はたるみ・顔の
                肥大化を加速させます。
                人体学と経験から導き出した「極無痛」の接触技術でお顔の筋肉を蘇らせ
                歯科、鍼灸、整体、エステの要素を織り交ぜた独自の施術で他のサロン様よりも
                非常に高い効果を生み出します。
              </article>
            </div>
          </div>

          <section className='bg-main-color text-center md:text-left px-8 md:px-24 py-4 md:py-8 md:flex md:justify-evenly'>
            <div className='md:w-full md:my-3 pt-8 text-[#FFF]'>
              <h1 className='text-xs md:text-md font-thin tracking-[10px] pl-4 md:pl-0'>
                BOOK YOUR VISIT
              </h1>
              <p className='text-3xl pt-5'>
                予約フォームまたは LINEからどうぞ
              </p>
            </div>
            <button className='my-12 border border-[#FFF] transition-all py-4 md:w-[20%] w-full text-[#fff] hover:bg-[#C6AD99] hover:text-[#333] hover:border-[#C6AD99]'>
              ご予約
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
