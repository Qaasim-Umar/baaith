import React from "react";
import Image from "next/image";

const featuredCard = ({ featuredSrc, featuredPara, month }) => {
  return (
    <div>
      <div className="featured-container w-[272px]  h-auto">

        <div className="p-[8px] ">
        <Image src={featuredSrc} alt="logo" width={250} height={56} className="m-auto" />

        <p className="mt-[16px] text-[#4D4D4D] font-lato">{featuredPara}</p>

        <div className="flex justify-between mt-[16px] mb-[16px]">
          <div className="flex items-center gap-[8px]">
            <Image
              src="/assets/svg/time.svg"
              alt="logo"
              width={16}
              height={56}
            />
            <p className="text-[#5E6978] font-lato text-[11px] font-bold"> {month} MONTHS</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <Image
              src="/assets/svg/star.svg"
              alt="logo"
              width={85}
              height={56}
            />
            <p className="text-[#5E6978] font-lato text-[12px] font-bold ">(5.00)</p>
          </div>
        </div>

        </div>


        <hr className="text-[#E0E2E5]" />


        
        <div className="flex items-center p-[8px]">
          <p className="text-[#267A95BF] font-lato text-[11px] font-bold">READ MORE DETAILS </p>
          <Image
            src="/assets/svg/arrowIcon.svg"
            alt="logo"
            width={25}
            height={56}
          />
        </div>
      </div>
    </div>
  );
};

export default featuredCard;
