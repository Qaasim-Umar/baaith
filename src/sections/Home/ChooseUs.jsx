import React from 'react'
import Image from 'next/image'
import ChooseUsCard from '@/components/chooseUsCard'
const ChooseUs = () => {
  return (

    <div className='bg-chooseus-background h-fit pb-5 px-[23px]'>

      <div className="flex flex-col justify-center items-center  gap-[19]">
        <h1 className='text-[#28374B] mt-[62px] font-prosto lg:text-[40px] text-[24px] '>Why Choose Us?</h1>
        <p className='text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] max-w-[540px] text-center'>Choose Excellence, Embrace Expertise – Elevate Your Learning Journey with Us!</p>
      </div>


<div className="flex mt-[37px] flex-col lg:flex-row ">
  <div className="w-2/5 bg-gray-300">

  <Image
            src='/assets/images/chooseus-image.png'
            alt="logo"
            width={450}
            height={56}
          />
  </div>

  <div className="w-3/5 bg-gray-500 flex gap-[16px] flex-col lg:flex-row m-auto" >

    <div className="flex flex-col gap-[16px] mt-[45px]">
    <ChooseUsCard chooseHeading='World wide learning' choosePara='So many other responsibilities?
 We provide flexible scheduling for our online Quran courses.' chooseSrc='/assets/svg/www.svg'/>
    <ChooseUsCard chooseHeading='Evaluation Report
& Certification' choosePara="Utilize our progressive reporting system to monitor your child's growth on a quarterly basis." chooseSrc='/assets/svg/report.svg'/>
    </div>
    <div className="flex flex-col gap-[16px]">
    <ChooseUsCard chooseHeading='Special Classes For Adults' choosePara='Empowering Adults on their Quranic Journey; Tailored classes for a meaningful and convenient learning experience.' chooseSrc='/assets/svg/classes.svg'/>
    <ChooseUsCard chooseHeading='24/7 Support' choosePara='We offer the top online classes for learning the Arabic language and the Holy Quran at any time, 24/7.' chooseSrc='/assets/svg/icon3.svg'/>
    </div>
   
    <div className="flex flex-col gap-[16px] mt-[45px]">
    <ChooseUsCard chooseHeading='Individual Classes' choosePara='We provide one-on-one live video sessions so you can study better in real time and get your questions addressed right away.' chooseSrc='/assets/svg/icon1.svg'/>
    <ChooseUsCard chooseHeading='Expert Teachers' choosePara='The academy exclusively hires qualified instructors from the top Islamic universities in the world who are fluent in both Arabic and English.' chooseSrc='/assets/svg/expert.svg'/>
    </div>
   
    
  </div>
</div>


    </div>


  )
}

export default ChooseUs