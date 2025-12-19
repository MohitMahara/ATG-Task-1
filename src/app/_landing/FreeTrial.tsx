import React from "react";
// import Button from '@/components/ui/Button';
const FreeTrial = () => {
  return (
    <div className="relative z-40 flex items-center justify-center  bg-black min-h-40 lg:min-h-60">
      <div className="absolute -top-40 w-[90%] lg:w-[75%] bg-gradient-to-r from-[#F9959D] to-[#A465B8] flex items-center justify-center rounded-2xl ">
        <div className="w-full h-full flex items-center justify-center rounded-2xl pl-2 lg:pl-8 ">
        <div className="  text-white py-10 lg:py-20  flex flex-col items-left justify-center gap-3 ">
          <p className="text-[15px] md:text-[20px] poppins ">Love our Our Tool?</p>
          <p className="font-semibold text-lg leading-5 lg:leading-15 md:text-xl lg:text-[48px]">
            Fell Free to Join Our 15 Days Free Trial
          </p>
          <button className="bg-black py-2 px-3 lg:px-0 lg:py-4  flex items-left w-fit lg:w-60 justify-center rounded-xl">
            Download <span className="hidden md:inline ml-1">Template</span>
          </button>
        </div>
        <div>
          <img src="./images/map.png" alt="map_img" className="w-lg lg:w-4xl" />
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default FreeTrial;
