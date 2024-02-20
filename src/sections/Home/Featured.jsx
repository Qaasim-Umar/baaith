"use client";
import React from 'react'
import Image from 'next/image'
import FeaturedCard from '@/components/featuredCard'
import Navbar from '../Global/Navbar'
import Link from 'next/link'


const Featured = () => {

  const scrollToSection = () => {
    const section = document.getElementById('featuredScroll');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='h-auto pb-[105px] ' id="featuredScroll">
<Navbar scrollToSection={scrollToSection} />

      <div className="flex flex-col justify-center items-center mt-[70px] gap-[19]">
        <h1 className='text-[#28374B] lg:text-[40px] text-[24px] font-prosto leading-[48px]'>Featured Programs</h1>
        <p className='text-[14px] lg:text-[16px] px-[13px] text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] text-center pb-[73px]'>Empowering Minds, Nuturing Hearts: Explore The Exceptional Learning Facilities That Fuel Our Educational Journey</p>
      </div>


      <div className='flex gap-[33px] justify-center items-center overflow-auto '>
      <Link href='/quranrecitation'> <FeaturedCard featuredSrc='/assets/images/quran2.png' featuredPara='Quran memorization' month='24' /></Link> 
        <FeaturedCard featuredSrc='/assets/images/tajweed.png' featuredPara='Tajweed' month='4' />
        <FeaturedCard featuredSrc='/assets/images/quran.png' featuredPara='Quran Recitation' month='3' />
        <FeaturedCard featuredSrc='/assets/images/arabic.png' featuredPara='Modern Standard Arabic' month='6' />
      </div>


    </div>
  )
}

export default Featured