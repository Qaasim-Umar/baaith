import React from 'react'
import Image from 'next/image'

const facilitiescard = ({src , paragraph , heading}) => {
  return (
    <div>
      <div className='bg-[#ffffff] border lg:p-[31px] p-[20px] flex flex-col justify-center items-center rounded-[16px] lg:w-[272px] lg:h-[293px] lg:hover:w-[299px] lg:hover:h-[306px] w-[224px] h-[242px] '>
        <Image
          src={src}
          alt="logo"
          width={125}
          height={56}
          className='lg:w-[125px] w-[90px]'
        />
        <div className="flex gap-[8px] flex-col mt-4">
          <h1 className='lg:text-[24px] text-[20px] text-[#5E6978D9] font-montserrat font-bold text-center'>{heading}</h1>
          <p className='text-[#5E6978] text-center font-montserrat lg:text-[14px] text-[12px] font-medium tracking-[0.28px]'>{paragraph}</p>
        </div>
      </div>

    </div>
  )
}

export default facilitiescard