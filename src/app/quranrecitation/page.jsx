import Footer from '@/sections/Global/Footer'
import Navbar from '@/sections/Global/Navbar'
import React from 'react'
import Image from 'next/image'
import BookButton from '@/components/buttons/bookButton'
import PriceButton from '@/components/buttons/priceButton'
import Linearstar from '@/components/linearstar'

const Courses = () => {
  return (
    <div>


      <Navbar />



      <div className='pt-[140px] mb-10 course-bg'>



        <div className="flex justify-center lg:items-center p-[28px] flex-col">
          <h1 className='font-montserrat font-bold lg:text-[48px] text-[30px] text-center leading-[38px] lg:leading-[59px] text-[#267A95] mb-[24px]'>Quran Memorization Course</h1>



          <div className="grid lg:grid-cols-2 font-montserrat mb-[80px] text-start">
            <div className="flex flex-col gap-[12px]">
              <p className='flex items-center gap-2 font-bold text-[12px] leading-[14px] -tracking-[1%] text-[#5E6978]'>Total  Ratings <span>  <Image
                src='/assets/svg/star.svg'
                alt="logo"
                width={65}
                height={56}
              /></span></p>

              <p className='font-bold text-[12px] leading-[14px] -tracking-[1%] text-[#5E6978]'>Duration: <span className='font-semibold'>24 months</span> </p>
            </div>
            <div className="flex flex-col gap-[12px] lg:mt-0 mt-3">
              <p className='font-bold text-[12px] leading-[14px] -tracking-[1%] text-[#5E6978]'>Application deadline : <span className='font-semibold text-[10px] leading-[13px] -tracking-[1%] text-[#0000FF]  '> Request info</span></p>
              <p className='font-bold text-[12px] leading-[14px] -tracking-[1%] text-[#5E6978]'>Language of instruction : <span className='font-semibold'> English, Arabic</span>  </p>
            </div>
          </div>



        </div>





        {/* Main and aside  */}
        <div className=" flex flex-col lg:flex-row">
          {/* Main content */}
          <div className="lg:w-[60%] m-[28px]  lg:pl-[188px] bg-[#ffffff] left-card">


            <Image
              src='/assets/images/picture.png'
              alt="logo"
              width={265}
              height={56}
              className='m-auto'
            />

            <div className='max-w-[478px]'>

              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mb-4 mt-4'>Course Overview:</h1>
                <p className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>This Quran Memorization Course is designed to facilitate the memorization (Hifz) of selected chapters (Surahs) from the Holy Quran. The course aims to provide a structured and supportive environment for students to memorize, understand, and retain verses from the Quran.</p>
              </div>

              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mb-4 mt-4'>Course Objectives:</h1>

                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <ol>
                    <li> 1. Enable students to memorize selected Surahs with proper Tajweed (pronunciation) and Tarteel (recitation).</li>
                    <li>2. Develop a deep understanding of the meanings and context of the memorized verses.</li>
                    <li>3. Foster a love for the Quran and encourage a lifelong commitment to its recitation and memorization.</li>
                    <li>4. Provide students with effective memorization techniques and strategies.</li>
                  </ol>
                </div>

              </div>



              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mb-4 mt-4'>Course Outline:</h1>

                <p className='font-montserrat font-bold text-[17px] leading-[24px] tracking-[2%] text-[#28374B] '>Weeks 1-4:</p>

                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <p>Introduction to Quranic Memorization</p>

                  <ol>
                    <li>- Overview of the importance of Hifz in Islam.</li>
                    <li>- Introduction to Tajweed rules</li>
                    <li>- Setting realistic memorization goals</li>
                  </ol>
                </div>

              </div>


              <div>
                <p className='font-montserrat font-bold text-[17px] leading-[24px] tracking-[2%] text-[#28374B] mt-4'>Weeks 5-11: </p>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <p>Memorization of Short Surahs</p>

                  <ol>
                    <li>- Begin memorization of short and commonly recited Surahs</li>
                    <li>- Emphasis on correct pronunciation and memorization techniques</li>
                    <li>- Weekly evaluations and progress assessments</li>
                  </ol>
                </div>

              </div>



              <div>
                <p className='font-montserrat font-bold text-[17px] leading-[24px] tracking-[2%] text-[#28374B] mt-4 '>Weeks 7-9:</p>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <p>Memorization of Mid-Length Surahs</p>
                  <ol>
                    <li>- Progress to memorizing Surahs of moderate length</li>
                    <li>- - Understanding the meanings and context of the verses</li>
                    <li>- Application of Tajweed rules during memorization</li>
                  </ol>
                </div>

              </div>






              <div>
                <p className='font-montserrat font-bold text-[17px] leading-[24px] tracking-[2%] text-[#28374B] mt-4 '>Weeks 10-12:</p>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <p>Memorization of Longer Surahs</p>
                  <ol>
                    <li>- Advance to memorizing longer Surahs with a focus on consolidation</li>
                    <li>- Recitation practice to enhance fluency and confidence</li>
                    <li>- Revision and review of all memorized Surahs</li>
                  </ol>
                </div>

              </div>




              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mt-5 '>Assessment and Evaluation:</h1>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <ol>
                    <li>- Weekly quizzes on memorized portions</li>
                    <li>- Mid-term and final assessments covering previously memorized Surahs</li>
                    <li>- Continuous evaluation of Tajweed and recitation skills</li>
                  </ol>
                </div>
              </div>




              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mt-5'>Materials Required:</h1>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <ol>
                    <li>- Mushaf (Quran copy) with clear Tajweed markings</li>
                    <li>- Notebooks for recording personal reflections and understanding of verses</li>
                    <li>- Audio recordings of the memorized Surahs for listening and correction</li>
                  </ol>
                </div>
              </div>


              <div>
                <h1 className='text-[#267A95] text-[23px] font-bold font-montserrat tracking-[2%] mt-5'>Prerequisites:</h1>
                <div className='font-montserrat font-semibold text-[17px] text-[#5E6978] tracking-[2%]'>
                  <ol>
                    <li>- Basic understanding of Arabic alphabet and reading skills</li>
                    <li>- Commitment to regular attendance and daily memorization practice</li>
                  </ol>
                </div>
              </div>

              <div>

                <p className=' mt-5 font-montserrat font-semibold text-[17px] text-[#737e8e] tracking-[2%]'><span className='text-[17px] font-bold  text-[#2b2e32]'>Note:</span> This Quran Memorization Course is designed to facilitate the memorization (Hifz) of selected chapters (Surahs) from the Holy Quran. The course aims to provide a structured and supportive environment for students to memorize, understand, and retain verses from the Quran.</p>
              </div>

              <div className="flex gap-[16px] mt-5">
                <BookButton py='54' px="10" />
                <PriceButton py="54" px='10' />
              </div>


            </div>
          </div>






          {/* Aside */}
          <aside className="lg:w-[40%] aside-bg lg:pl-[40px] p-[18px]">

            <div className='courses-custom bg-[#FFFFFF] lg:w-[337px] mt-10  rounded-[10px] lg:h-[407px] w-[337px] h-[406px] '>

              <h1 className='font-montserrat font-bold text-[19px] leading-[23px] -tracking-[3%] text-[#267A95] px-5 py-4 '>Course Feautures</h1>
              <div className='bg-[#FBFBFB] w-[300.44px] rounded-[10px] pb-4 m-auto flex flex-col justify-center'>

                <ul className=' flex flex-col'>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px]'> <Image
                    src='/assets/svg/path.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Structured Curriculum</li>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px]'> <Image
                    src='/assets/svg/path.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Expert Tutors </li>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px] '> <Image
                    src='/assets/svg/path.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Interactive Learning</li>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px]'><Image
                    src='/assets/svg/path.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Individualized Progress Tracking </li>
                  <li className='flex items-center gap-[12px] px-4 py-[14px] '><Image
                    src='/assets/svg/path.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Flexible Learning Schedule</li>
                </ul>

                <div className="flex gap-[16px] flex-col justify-center items-center">
                  <BookButton py='3' px="5" />
                  <PriceButton py="3" px="5" />
                </div>
              </div>

            </div>




            <div className='courses-custom bg-[#FFFFFF] w-[337px] mt-10  rounded-[10px] h-[407px]'>

              <h1 className='font-montserrat font-bold text-[19px] leading-[23px] -tracking-[3%] text-[#267A95] px-5 py-4 '>Students Feedback</h1>
              <div className='bg-[#FBFBFB] w-[300.44px] rounded-[10px] pb-4 m-auto flex flex-col justify-center'>

                <p className=' font-montserrat font-semibold text-[37px] leading-[45px] -tracking-[1%] text-[#000000] p-3'>4.9</p>

                <Image
                  src='/assets/svg/6stars.svg'
                  alt="logo"
                  width={136}
                  height={56}
                />

              </div>

              <p className=' font-montserrat text-[15px] leading-[18px] text-[#5E6978] font-medium pl-5 my-5 '>Total 18 Ratings</p>

<div className=" space-y-3 font-montserrat font-medium text-[15px]">
        <Linearstar firstnumber="5" secondImage='/assets/svg/1star.svg' thirdImage="/assets/svg/Rectanglefull.svg" fourthImage='15'/>
        <Linearstar firstnumber="4" secondImage='/assets/svg/1star.svg' thirdImage="/assets/svg/Rectangleempty.svg" fourthImage='3'/>
        <Linearstar firstnumber="3" secondImage='/assets/svg/1star.svg' thirdImage="/assets/svg/Rectangleempty.svg" fourthImage='0'/>
        <Linearstar firstnumber="2" secondImage='/assets/svg/1star.svg' thirdImage="/assets/svg/Rectangleempty.svg" fourthImage='0'/>
        <Linearstar firstnumber="1" secondImage='/assets/svg/1star.svg' thirdImage="/assets/svg/Rectangleempty.svg" fourthImage='0'/>
  </div>

            </div>






            <div>


            <div className='courses-custom bg-[#FFFFFF] w-[337px] mt-10  rounded-[10px] h-[303px]'>

              <h1 className='font-montserrat font-bold text-[19px] leading-[23px] -tracking-[3%] text-[#267A95] px-5 py-4 '>Related Courses</h1>
              <div className='bg-[#FBFBFB] w-[300.44px] rounded-[10px] pb-4 m-auto flex flex-col justify-center'>

                <ul className=' flex flex-col'>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px]'> <Image
                    src='/assets/svg/Ellipse.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Structured Curriculum</li>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px]'> <Image
                    src='/assets/svg/Ellipse.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Expert Tutors </li>
                  <li className='flex items-center gap-[12px] px-4 border-b border-[#F1F2F3] py-[14px] '> <Image
                    src='/assets/svg/Ellipse.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Interactive Learning</li>
                  <li className='flex items-center gap-[12px] px-4 py-[14px]'><Image
                    src='/assets/svg/Ellipse.svg'
                    alt="logo"
                    width={16}
                    height={56}
                  />Individualized Progress Tracking </li>
                 
                </ul>

                
              </div>

            </div>

            </div>


          </aside>
        </div>






      </div>

      <Footer />



    </div>
  )
}

export default Courses