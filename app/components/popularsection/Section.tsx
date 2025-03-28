"use client";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { Left, Right } from "../svg";
import Cards from "../specialoffer/Card";
import { Image } from "@mantine/core";

const Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col gap-[100px]">
      {/* Carousel without default controls */}
      <Carousel
        withIndicators
        withControls={false}
        onSlideChange={setCurrentSlide}
        slideSize="100%"
        slideGap="md"
        align="start"
        slidesToScroll={1}
        initialSlide={currentSlide}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <Carousel.Slide
            key={index}
            className="flex flex-col justify-center items-center text-white"
          >
            <div className="lg:grid lg:grid-cols-3 gap-8 border-2 border-amber-300 rounded-[16px]">
              <Image
                className="h-full w-full rounded-[16px]"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Custom controls in a row below the carousel */}
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-[#172432] rounded hover:bg-gray-300"
          onClick={handlePrevious}
        >
          <Left />
        </button>
        <button
          className="px-4 py-2 bg-[#FF7757] rounded hover:bg-gray-300"
          onClick={handleNext}
        >
          <Right />
        </button>
      </div>
    </div>
  );
};

export default Section;
