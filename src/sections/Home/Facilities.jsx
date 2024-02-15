import React from 'react'
import Facilitiescard from '@/components/facilitiescard'
import Image from 'next/image'

const Facilities = () => {
  return (
    <div className='bg-facilities-background relative pb-[100px] px-[23px]'>


      <div className="flex position">
        <div className='flex justify-around items-center lg:h-[90px] lg:w-[533px] w-[297px] h-[67px] radius-shadow'>
          <Image
            src='assets/svg/group1.svg'
            alt="logo"
            width={70}
            height={56}
          />

          <Image
            src='assets/svg/group2.svg'
            alt="logo"
            width={95}
            height={56}
          />
          <Image
            src='assets/svg/group3.svg'
            alt="logo"
            width={70}
            height={56}
          />

        </div>
      </div>


      <div className="flex flex-col justify-center items-center pt-[70px] gap-[19]">
        <h1 className='text-[#28374B] lg:text-[40px] text-[24px] font-prosto'>Our Learning Facilities</h1>
        <p className='text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] max-w-[540px] text-center mt-2 text-[14px]'>Empowering Minds, Nuturing Hearts: Explore The Exceptional Learning Facilities That Fuel Our Educational Journey</p>
      </div>
      <div className="flex justify-center lg:gap-[64px] gap-[24px] mt-[54px] flex-col lg:flex-row items-center ">

        <Facilitiescard heading='Books & Library' paragraph='You can use the self-study materials in our digital ...' src='/assets/svg/frame2.svg'/>
        <Facilitiescard heading='Personalized Learning Portals' paragraph='These portals enhance...' src='/assets/svg/frame1.svg' />
        <Facilitiescard  heading='Alumni Support' paragraph='Your education with us continues with post ...' src='/assets/svg/frame3.svg'/>

      </div>
    </div>
  )
}

export default Facilities