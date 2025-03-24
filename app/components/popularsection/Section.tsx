"use client";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";

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
    <div className="flex flex-col gap-4">
      {/* Carousel without default controls */}
      <Carousel
        withIndicators
        height={200}
        withControls={false}
        onSlideChange={setCurrentSlide}
      >
        <Carousel.Slide className="flex flex-col justify-center items-center text-white bg-blue-500">
          {currentSlide}
        </Carousel.Slide>
      </Carousel>

      {/* Custom controls in a row below the carousel */}
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Section;
