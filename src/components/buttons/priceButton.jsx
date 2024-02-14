import React from 'react'

const priceButton = ({py, px}) => {
  return (
    <div>

    <div className={`rounded-[6px] h-${py}  px-${px} flex justify-center items-center font-montserrat font-semibold text-[#267A95] -tracking-[3%]  text-[17px] leading-[21px] price-button`}>Package Pricing</div>
    
        </div>
  )
}

export default priceButton