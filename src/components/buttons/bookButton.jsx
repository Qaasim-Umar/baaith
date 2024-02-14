import React from 'react'

const BookButton = ({ px, py }) => {
    return (
        <div>
            <div
                className={`rounded-[6px] px-${px}  h-${py} flex justify-center items-center font-montserrat font-bold text-[17px] leading-[21px] book-button`}
            >
                <a href="" className="text-[#ffffff]">
                    Book a free trial
                </a>
            </div>
        </div>
    );
};

export default BookButton