import Offer from "@/app/components/specialoffer/Offer";
import Offertextpart from "@/app/components/specialoffer/Offertextpart";
import { Left, Right } from "@/app/components/svg";
import React from "react";

const Specialoffer = () => {
  return (
    <div className="w-[90%] mx-auto pt-[80px] pr-[16px] pb-[80px] pl-[16px] gap-[50px] flex flex-col">
      <div className="flex justify-end md:flex md:justify-between">
        <div className="hidden md:flex md:justify-center md:items-center md:gap-4">
          <button className="px-4 py-2 bg-[#172432] w-[66px] h-[60px] rounded-[12px] hover:bg-gray-300 flex justify-center items-center">
            <Left />
          </button>
          <button className="w-[66px] h-[60px] px-4 py-2 bg-[#FF7757] rounded-[12px] hover:bg-gray-300 flex justify-center items-center">
            <Right />
          </button>
        </div>
        <Offertextpart />
      </div>
      <Offer />
    </div>
  );
};

export default Specialoffer;
