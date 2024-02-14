'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import '../../app/globals.css'
import { HiBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = ({ scrollToSection, props }) => {
    const [state, setState] = useState(true);
    const handleClick = () => {
        setState(!state);
      };

    return (
        <div className='bg-hero-background flex justify-between lg:px-20 px-8 py-3 items-center custom-box-shadow fixed top-0 right-0 left-0 z-50 h-fit'>

            <Image
                src='assets/svg/logo.svg'
                alt="logo"
                width={75}
                height={56}
            />
            <div className={state ? "nav-links" : "nav-links active" }>

            <ul className='lg:flex lg:space-x-5 font-montserrat text-[#8C959180] text-[21px] font-medium cursor-pointer '>
            <Link href='/'>  <li className='custom-underline-active text-themeBlue font-semibold'>Home</li></Link> 
                <li className='custom-underline custom-underline2 hover:text-themeBlue hover:font-semibold'>About Us</li>
               <li onClick={scrollToSection} className='custom-underline custom-underline3 hover:text-themeBlue hover:font-semibold'>Courses</li>
                <li className='custom-underline custom-underline4 hover:text-themeBlue hover:font-semibold'>Admission</li>
            </ul>

            <div>
                <Link href="" className='flex w-[130px] h-[54px] items-center justify-center font-montserrat rounded-lg bg-gradient-to-r from-themeBlue to-[#2DC8D6] text-[21px] text-[#ffffff]'>Register </Link>
            </div>

            </div>

            <div className="bar">
        <button className={state ? " show" : "hidden"} onClick={handleClick}>
          <HiBars3 />
        </button>
        <button className={state ? "hidden" : "show "} onClick={handleClick}>
          <FaTimes />
        </button>
      </div>
        </div>
    )
}

export default Navbar