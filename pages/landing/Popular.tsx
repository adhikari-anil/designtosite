import Section from "@/app/components/popularsection/Section";
import TextPart from "@/app/components/popularsection/TextPart";
import { Left, Right } from "@/app/components/svg";

const Popular = () => {
  return (
    <div className="w-[90%] mx-auto pt-[80px] pr-[16px] pb-[80px] pl-[16px] gap-[100px] flex flex-col">
      <div className="flex justify-start md:flex md:justify-between">
        <TextPart />
        <div className="hidden md:flex md:justify-center md:items-center md:gap-4">
          <button className="px-4 py-2 bg-[#172432] w-[66px] h-[60px] rounded-[12px] hover:bg-gray-300 flex justify-center items-center">
            <Left />
          </button>
          <button className="w-[66px] h-[60px] px-4 py-2 bg-[#FF7757] rounded-[12px] hover:bg-gray-300 flex justify-center items-center">
            <Right />
          </button>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Popular;
