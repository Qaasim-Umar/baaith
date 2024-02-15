import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='flex bg-hero-background pb-[46px] mt-[85px]  lg:flex-row flex-col '>

      <div className="lg:w-[55%] relative">
        {/* Content for the left half of the screen */}

        <Image
          className='absolute top-[32px] lg:w-[75px] h-[223px] -left-3'
          src='assets/svg/semicircle.svg'
          alt="logo"
          width={75}
          height={56}
        />


        <div className='font-montserrat flex flex-col lg:ml-[140px] lg:mt-[123px] mt-[105px] text-center lg:text-left px-[25px]'>
          <div className='font-bold lg:text-[20px] text-[14px] tracking-[0.191px]'>
            <span className='text-themeBlue'>World Class</span> <span className='text-[#5E6978]'>Education</span>
          </div>
          <div className='mt-[8px] '>
            <span className=' flex text-[#28374B] font-montserrat lg:text-[48px] text-[36px] font-bold lg:leading-[58px] leading-[45px] -tracking-[0.478px] ]'>Study From Anywhere </span> <span className='flex lg:flex-row flex-col items-center lg:gap-2 gap-0 text-[#28374B] font-montserrat lg:text-[48px] text-[36px] font-bold leading-[58px] -tracking-[0.478px]'>With <Image
              src='/assets/images/expert.png'
              alt="logo"
              width={230}
              height={56}
              className='lg:w-[230px] w-[170px]'
            /> 
            </span>
          
          </div>

          <div><p className='text-[#5E6978] lg:mt-[18px] mt-[26px] font-montserrat lg:text-[18px] text-[14px]  font-medium leading-[21px] tracking-[0.356px] px-[44px] lg:px-0'>knowledge is a prerequisite for the creation of a just world in which authentic peace can prevail.</p></div>

          <div className='lg:mt-[80px] m-auto lg:text-start my-14'>
            <Link href="" className='font-montserrat rounded-lg lg:bg-gradient-to-r from-[#267A95] to-[#2DC8D6] bg-gradient-to-r from-[#267A95] to-[#0D8B8B] lg:text-[21px] text-[#ffffff] flex gap-3 justify-center items-center lg:w-[204px] lg:h-[62px] w-[127px] h-[41px]'>Enroll Now  <Image
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