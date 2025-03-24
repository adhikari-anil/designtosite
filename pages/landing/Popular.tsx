import Section from "@/app/components/popularsection/Section";
import TextPart from "@/app/components/popularsection/TextPart";

const Popular = () => {
  return (
    <div className="w-[90%] mx-auto pt-[80px] pr-[16px] pb-[80px] pl-[16px] gap-[100px] flex flex-col">
      <TextPart />
      <Section />
    </div>
  );
};

export default Popular;
