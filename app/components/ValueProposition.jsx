"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { RxDotFilled, RxDot } from "react-icons/rx";
import styles from "./../styles.module.css";

function ValueProposition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useMemo(
    () => [
      {
        url: "https://katzchwat.com/wp-content/uploads/2017/10/digital-asset.jpg",
        title1: "Saving Your Time,",
        title2: "Enhancing Your Creativity",
        subtitle:
          "Experience seamless content creation with our advanced AI, leaving you with more time to focus on what matters most - your creative vision.",
        style:
          "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600",
      },
      {
        url: "https://katzchwat.com/wp-content/uploads/2017/10/digital-asset.jpg",
        title1: "Learns Your Style,",
        title2: "Write With Your Reader in Mind",
        subtitle:
          "Our AI dynamically adapts to your unique writing style, ensuring each piece of content resonates with your audience while still reflecting your personal touch.",
        style:
          "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",
      },
    ],
    []
  );
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [currentIndex, slides]);

  return (
    <div className="flex space-x-12 items-center">
      <button className="  cursor-pointer text-2xl" onClick={prevSlide}>
        <TfiArrowCircleLeft size={40} />
      </button>
      <div>
        <div className=" overflow-hidden relative">
          <div
            className=" flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex space-x-24  min-w-full ">
                <Image
                  src={slides[index].url}
                  alt="title"
                  height={600}
                  width={700}
                  className=" rounded-3xl"
                />
                <div>
                  <div
                    className={`transition duration-500 text-4xl font-semibold ${slides[currentIndex].style}`}
                  >
                    {slides[currentIndex].title1}
                    <br /> {slides[currentIndex].title2}
                  </div>
                  <div className="text-xl mt-5">
                    {slides[currentIndex].subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all h-3 bg-white rounded-full ${
                currentIndex === index ? "p-2 w-8" : "bg-opacity-50 w-3"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <button className=" cursor-pointer text-2xl" onClick={nextSlide}>
        <TfiArrowCircleRight size={40} />
      </button>
    </div>
  );
}

export default ValueProposition;
