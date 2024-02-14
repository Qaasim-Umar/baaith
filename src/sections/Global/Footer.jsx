import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' bg-[#267a95] lg:rounded-t-[50px] rounded-t-[14px] lg:px-[118px] px-[23px] py-[60px]'>


      <div className="grid lg:grid-cols-4 lg:gap-5 gap-[80px] lg:justify-items-center text-[#ffffff] ">

        <div>
          <p className='pb-[16px] font-lato text-[23.5px] font-bold'>About Us</p>
          <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>The academy is an Islamic institution that cultivates knowledgeable individuals through Islamic guidelines and principles. This is being done through appealing teaching techniques created by passionate instructors who are skilled at giving classes in a great way.</p>
        </div>


        <div>
          <p className='pb-[16px] font-lato text-[23.5px] font-bold'>Courses</p>
          <ul className="flex gap-[17.94px] flex-col list-disc lg:list-none pl-[15px] lg:pl-0">
            <li className='text-[#F1F2F3] font-montserrat font-medium leading-[22.54px] tracking-[0.322px]'>Quran Memorization</li>
            <li className='text-[#F1F2F3] font-montserrat font-medium leading-[22.54px] tracking-[0.322px]'>Tajweed</li>
            <li className='text-[#F1F2F3] font-montserrat font-medium leading-[22.54px] tracking-[0.322px]'>Quran Recitation</li>
            <li className='text-[#F1F2F3] font-montserrat font-medium leading-[22.54px] tracking-[0.322px]'>Modern Standard Arabic</li>
            <li className='text-[#F1F2F3] font-montserrat font-medium leading-[22.54px] tracking-[0.322px]'>General Islamic Knowledge</li>
          </ul>
        </div>


        <div>
          <p className='pb-[16px] font-lato text-[23.5px] font-bold' >Contact Us</p>
          <div className="flex flex-col gap-[24px]">



            <div className="flex gap-4">
              <div className="flex items-start">
                <Image
                  src='/assets/svg/whatsappc.svg'
                  alt="logo"
                  width={29}
                  height={56}
                />
              </div>
              <div className="flex flex-col">
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>Whatsapp;</p>
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>+971562208130</p>
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>+2349136789633</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-start">
                <Image
                  src='/assets/svg/facebookc.svg'
                  alt="logo"
                  width={29}
                  height={56}
                />
              </div>

              <div className="flex flex-col">
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>Facebook Us;</p>
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>Al Baaith</p>
              </div>
            </div>



            <div className="flex gap-4">
              <div className="flex items-start">
                <Image
                  src='/assets/svg/mail.svg'
                  alt="logo"
                  width={29}
                  height={56}
                />
              </div>

              <div className="flex flex-col">
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>Email;</p>
                <p className='text-[#F1F2F3] font-montserrat font-medium leading-[22.5px] tracking-[0.322px]'>Albaahithacademy <br /> @gmail.com</p>
              </div>
            </div>


          </div>
        </div>




        <div>
          <p className='pb-[16px] font-lato text-[23.5px] font-bold'>Follow Us</p>
          <div className="flex gap-[16px]">
            <Image
              src='/assets/svg/instagram.svg'
              alt="logo"
              width={39}
              height={56}
            />
            <Image
              src='/assets/svg/whatsapp.svg'
              alt="logo"
              width={39}
              height={56}
            />
            <Image
              src='/assets/svg/facebook.svg'
              alt="logo"
              width={39}
              height={56}
            />
          </div>
        </div>

      </div>


    </div>
  )
}

export default Footer