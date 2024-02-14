import React from 'react'
import Image from 'next/image'

const chooseUsCard = ({chooseHeading,chooseSrc, choosePara }) => {
  return (
    <div className='bg-[#ffffff] h-auto rounded-[13px] chooseus-border'>
        <div className="p-[16px] max-w-[225px] flex gap-[24px] flex-col text-center items-center">
<h1 className='text-[#5E6978] font-lato text-[19.128px] font-bold  '>{chooseHeading}</h1>

<Image
            src={chooseSrc}
            alt="logo"
            width={40}
            height={56}
          />

          <p className='font-montserrat text-[13px] font-medium' >{choosePara}</p>


    </div>
    </div>
  )
}

export default chooseUsCard