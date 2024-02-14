"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Faq = () => {
    // State to manage the visibility of each answer
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the visibility of the answer
    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // FAQ data containing questions and answers
    const faqData = [
        {
            question: 'How can I play for my appointment?',
            answer:
                'Please check our "Pricing" page for detailed information on course fees. We offer flexible packages to accommodate diverse learning needs, ensuring affordability without compromising the quality of your Quranic education. Feel free to explore the options that best suit your preferences and goals.',
        },
        {
            question: 'Who can apply ?',
            answer: 'Anyone eager to deepen their connection with the Quran is welcome to apply! Our courses are designed for learners of all ages and backgrounds, whether you"re a beginner seeking to start your Quranic journey or someone looking to enhance your existing knowledge. Join us on this enriching experience.',
        },
        {
            question: 'What qualification will i get ?',
            answer: 'You will receive a Certificate of Completion upon successfully finishing our course. Our comprehensive curriculum is designed to equip you with a solid foundation in all of our featured courses...',
        },
        {
            question: 'What qualification will i get ?',
            answer: 'You will receive a Certificate of Completion upon successfully finishing our course. Our comprehensive curriculum is designed to equip you with a solid foundation in all of our featured courses...',
        },
    ];

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-[37px] gap-[19]">
                <h1 className='text-[#28374B] lg:text-[40px] text-[24px] font-prosto'>Frequently Asked Questions</h1>
                <p className='text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] max-w-[540px] text-center'>Got questions? We've got answers! Explore our Frequently Asked Questions for insights and information.</p>
            </div>

            <div className="flex justify-center items-center flex-col lg:flex-row gap-8">

                <div className="lg:w-2/5">
                    <Image
                        src='/assets/images/question.png'
                        alt="logo"
                        width={450}
                        height={56}
                    />
                </div>

                <div className="lg:w-3/5">
                    <section className="bg-[#F6FAF9] card-shadow w-fit rounded-lg" >


                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className=" lg:w-[720px] min-w-[320px]">
                                    <button className=" p-[25px] flex items-center justify-between w-full" onClick={() => toggleAnswer(index)}>
                                        <h1 className=" font-montserrat font-bold text-[#2E2C2C] leading-[19.5px] ">{faq.question}</h1>
                                        <span className={`text-gray-400 bg-gray-200 rounded-full ${openIndex === index ? 'transform rotate-45' : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <p className=" py-[6px] px-[21px] bg-[#FCFEFD] font-montserrat font-medium text-[14px] leading-[19.6px] tracking-[3%] text-[#5E6978]">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default Faq;
