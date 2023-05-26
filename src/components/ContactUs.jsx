import React from "react";

function ContactUs() {
  return (
    <div className='relative w-full md:w-[90%] m-auto bg-[#FFFCF6] px-5 md:px-9 md:py-[3.5rem] text-main-color space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-0 md:bottom-[25rem] z-10'>
      {/* left content start */}
      <div className='w-full'>
        <div className='flex flex-row pt-8 md:pt-0'>
          <h1 className='tracking-[10px] font-thin text-xs w-full uppercase'>
            contact us
          </h1>
          <hr className='border-[#C6AD99]/90 w-[80%] md:w-[60%] mt-2 ml-8 sm:ml-[5rem] md:ml-0 md:mr-10' />
        </div>
        <p className='text-3xl py-8'>
          お問い合わせ
        </p>

        <p className='text-lg'>赤坂サロン </p>
        <p className='text-xs pt-3 leading-5'>
          〒107-0052
          <br />
          東京都港区赤坂6-9-5
          <br />
          氷川アネックス2号館305
        </p>

        <div className='flex flex-col space-y-3 pt-5'>
          <button className='contactUsButton'>
            LINEでお問い合わせ
          </button>
          <button className='contactUsButton'>
            メールでお問い合わせ
          </button>
          <button className='contactUsButton'>
            取材依頼
          </button>
        </div>
      </div>
      {/* left content end */}

      {/* right content start */}
      <form className='grid grid-cols-1 space-y-1 w-full mx-auto'>
        <label htmlFor='#'>
          ご希望のコース{" "}
          <span className='text-xs text-[#FF0000]'>
            必須
          </span>
        </label>
        <input
          placeholder='初回コース (9,800円 税込)'
          className='contactInput'
          type='text'
        />

        <label htmlFor='#'>
          ご希望日時{" "}
          <span className='text-xs text-[#FF0000]'>
            必須
          </span>
        </label>
        <div className='md:flex md:justify-between'>
          <input
            type='date'
            className='contactInput w-full md:w-[48%]'
            placeholder='DD/MM/YYYY'
          />
          <input
            type='time'
            className='contactInput w-full md:w-[48%]'
            placeholder='10時30分〜'
          />
        </div>

        <label htmlFor='#'>
          お名前{" "}
          <span className='text-xs text-[#FF0000]'>
            必須
          </span>
        </label>
        <div className='md:flex md:justify-between'>
          <input
            type='text'
            className='contactInput w-full md:w-[48%]'
            placeholder='姓'
          />
          <input
            type='text'
            className='contactInput w-full md:w-[48%]'
            placeholder='名'
          />
        </div>

        <label htmlFor='#'>
          お名前{" "}
          <span className='text-xs text-[#FF0000]'>
            必須
          </span>
        </label>
        <input
          type='tel'
          className='contactInput'
          placeholder='+81-0000-0000'
        />
        <label htmlFor='#'>
          お名前{" "}
          <span className='text-xs text-[#FF0000]'>
            必須
          </span>
        </label>
        <input
          type='text'
          className='contactInput'
          placeholder='pratamabusiness@gmail.com'
        />

        <label htmlFor='#'>ご要望・ご質問</label>
        <textarea className='contactInput' />

        <div className='flex'>
          <input
            type='checkbox'
            className='form-checkbox'
          />
          <div className='text-left pl-3 text-xs w-full'>
            <label
              for='billing_same'
              className='ml-0 md:ml-2'
            >
              個人情報の取り扱いに同意します
              <br className='block md:hidden' />
              <span className='text-secondary-color'>
                | プライバシーポリシー
              </span>
            </label>
          </div>
        </div>

<div className="py-7 md:py-4">
        <button
          type='submit'
          className='bg-[#5D6163] py-4 px-10 text-[#fff] tracking-widest text-sm animate-pulse w-full md:w-[25%]'
        >
          送信する
        </button>
</div>
      </form>
      {/* right content end */}
    </div>
  );
}

export default ContactUs;
