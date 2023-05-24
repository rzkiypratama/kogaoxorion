import React from "react";

function Footer() {
  return (
    <footer className='flex flex-col items-center align-middle  md:hidden bg-[#434748] py-10 px-8 space-y-5'>
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
      <hr className='border-[#C6AD99]/90 w-full m-auto md:w-[60%] mt-2 sm:ml-[5rem] md:ml-0 md:mr-10' />
      <p className='text-secondary-color'>
        キャンセルポリシー | プライバシーポリシー
      </p>
      <p className='text-secondary-color'>
        © KOGAO DOCTOR 2021
      </p>
    </footer>
  );
}

export default Footer;
