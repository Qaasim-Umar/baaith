import React from 'react'
import Image from 'next/image'

const facilitiescard = ({src , paragraph , heading}) => {
  return (
    <div>
      <div className='bg-[#ffffff] border p-[31px] flex flex-col justify-center items-center rounded-[16px] max-w-[272px] max-h-[293px] hover:max-w-[299px] hover:max-h-[306px]'>
        <Image
          src={src}
          alt="logo"
          width={125}
          height={56}
        />
        <div className="flex gap-[8px] flex-col mt-4">
          <h1 className='text-[24px] text-[#5E6978D9] font-montserrat font-bold text-center'>{heading}</h1>
          <p className='text-[#5E6978] text-center font-montserrat text-[14px] font-medium tracking-[0.28px]'>{paragraph}</p>
        </div>
      </div>

    </div>
  )
}

export default facilitiescard