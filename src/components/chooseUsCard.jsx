import React from 'react'
import Image from 'next/image'

const chooseUsCard = ({chooseHeading,chooseSrc, choosePara }) => {
  return (
    <div className='bg-[#ffffff] h-auto rounded-[13px] chooseus-border'>
        <div className="lg:p-[16px] p-[3px] max-w-[225px] flex gap-[24px] flex-col text-center items-center">
<h1 className='text-[#5E6978] font-lato lg:text-[19.128px] font-bold text-[16px]  '>{chooseHeading}</h1>

<Image
            src={chooseSrc}
            alt="logo"
            width={40}
            height={56}
            className='lg:w-[40px] w-[30px]'
          />

          <p className='font-montserrat lg:text-[13px] text-[11px] font-medium' >{choosePara}</p>


    </div>
    </div>
  )
}

export default chooseUsCard