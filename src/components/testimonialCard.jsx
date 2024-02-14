import React from 'react'
import Image from 'next/image'


const testimonialCard = ({ testimonialFirst, testimonialSurname, testimonialPara, testimonialPara2 }) => {
    return (
        <div>


            <div className="testimonial-custom p-[24px] flex flex-col gap-[26px]">

                <div className="flex gap-2">
                    <Image
                        src="/assets/svg/profile.svg"
                        alt="logo"
                        width={49}
                        height={56}
                    />


                    <p className='text-[#267A95] font-montserrat font-bold'>{testimonialFirst} <br /> {testimonialSurname}</p>

                </div>

                <div>
                    <p className='text-[#5E6978] font-montserrat font-medium leading-[18px] tracking-[0.3px]'>{testimonialPara}</p>


                    <p className='text-[#5E6978] font-montserrat font-medium leading-[18px] tracking-[0.3px] mt-5'>{testimonialPara2}</p>
                </div>

            </div>

        </div>
    )
}

export default testimonialCard