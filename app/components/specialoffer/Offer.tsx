"use client";
import { Carousel } from "@mantine/carousel";
import Cards from "./Card";
import { Left, Right } from "../svg";
import { useEffect, useState } from "react";

const Offer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // Large screens - 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // Medium screens - 2 cards
      } else {
        setCardsPerSlide(1); // Mobile - 1 card
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    console.log("Previous Slide Changed!");
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    console.log("Next Slide Changed!");
  };
  return (
    <div className="flex flex-col gap-4">
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
            className="flex flex-col justify-center items-center text-white rounded-[16px] p-[40px] px-[20px]"
          >
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8">
              <Cards />
              {cardsPerSlide >= 2 && <Cards />}
              {cardsPerSlide === 3 && <Cards />}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Custom controls in a row below the carousel */}
      <div className="flex justify-center gap-4 md:hidden">
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

export default Offer;
