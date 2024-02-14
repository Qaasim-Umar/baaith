import React from 'react'
import TestimonialCard from '@/components/testimonialCard'

const Testimonial = () => {
    return (
        <div className='bg-testimonial-background h-auto pb-[106px]'>

            <div className="flex flex-col justify-center items-center pt-[70px] pb-[37px] gap-[19]">
                <h1 className='text-[#28374B] lg:text-[40px] text-[24px]  font-prosto'>Testimonials</h1>
                <p className='text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] max-w-[540px] text-center'>Discover What Our Students  Have to Say – Real Stories, Real Transformations, Real Testimonials...</p>
            </div>




<div className='flex gap-4 items-center justify-center flex-col lg:flex-row '>
    <TestimonialCard testimonialFirst='Abdusalaam' testimonialSurname='Musa' testimonialPara='Impressed with the quality of education provided.
Expert tutors, well-structured courses,,,' />
    <TestimonialCard testimonialFirst='Ridwan' testimonialSurname='Olatunji' testimonialPara='I have benefitted alot from this academy' testimonialPara2='jazaakumullahu kayran'/>
    <TestimonialCard testimonialFirst='Rahmat' testimonialSurname='Aderemi' testimonialPara='The classes are well structured with reasonable prices'/>
    <TestimonialCard testimonialFirst='Maryam' testimonialSurname='Aderemi' testimonialPara='Emphasis on not just memorization but also understanding the meanings ...' />
</div>


        </div>
    )
}

export default Testimonial