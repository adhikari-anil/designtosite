const TextPart = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[#172432] font-['Playfair_Display'] font-normal xl:text-[84px] lg:text-[64px] md:text-[54px] text-[40px] leading-[100%] md:tracking-wide tracking-tight flex flex-col w-full break-all">
        Popular Destinations
      </h1>
      <div className="w-[227px] border-[3px] border-[#FF7757]"></div>
      <p className="font-['Rubik'] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#767E86]">
        Most popular destinations around the world, from historical places to
        natural wonders.
      </p>
    </div>
  );
};

export default TextPart;
