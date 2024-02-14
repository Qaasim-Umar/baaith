import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='flex bg-hero-background pb-[46px] mt-[85px] lg:flex-row flex-col '>

      <div className="lg:w-[55%] relative">
        {/* Content for the left half of the screen */}

        <Image
          className='absolute top-[32px] lg:w-[75px] w-[60px]'
          src='assets/svg/semicircle.svg'
          alt="logo"
          width={75}
          height={56}
        />


        <div className='font-montserrat flex flex-col lg:ml-[140px] mt-[123px] text-center lg:text-left px-[25px]'>
          <div className='font-bold text-[20px] tracking-[0.191px]'>
            <span className='text-themeBlue'>World Class</span> <span className='text-[#5E6978]'>Education</span>
          </div>
          <div className='mt-[8px]'>
            <span className=' flex text-[#28374B] font-montserrat text-[48px]  font-bold leading-[58px] -tracking-[0.478px] ]'>Study From Anywhere </span> <span className='flex lg:flex-row flex-col items-center lg:gap-2 gap-0 text-[#28374B] font-montserrat text-5xl font-bold leading-[58px] -tracking-[0.478px]'>With <Image
              src='/assets/images/expert.png'
              alt="logo"
              width={230}
              height={56}
            /> </span>
          
          </div>

          <div><p className='text-[#5E6978] lg:mt-[18px] mt-[26px] font-montserrat text-[18px] font-medium leading-[21px] tracking-[0.356px]'>knowledge is a prerequisite for the creation of a just world in which authentic peace can prevail.</p></div>

          <div className='mt-[80px] m-auto'>
            <Link href="" className='font-montserrat rounded-lg bg-gradient-to-r from-themeBlue to-[#2DC8D6] text-[21px] text-[#ffffff] flex gap-3 justify-center items-center lg:w-[204px] lg:h-[62px] w-[127px] h-[41px]'>Enroll Now  <Image
              src='assets/svg/arrow.svg'
              alt="logo"
              width={15}
              height={56}
            /> </Link>
          </div>

        </div>
      </div>

      <div className="lg:w-[45%]">
        {/*Content for the right half of the screen */}
        <div className='mt-[21px] flex justify-end '>
          <Image
            src='/assets/images/heroImage.png'
            alt="logo"
            width={570}
            height={476}
          />
        </div>
      </div>
    </div >
  )
}

export default Hero