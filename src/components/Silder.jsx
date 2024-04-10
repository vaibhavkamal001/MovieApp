import React, { useCallback, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ApplicationConstant from "../applicationConstant/ApplicationConstant";

function Silder(props) {
  const slides = props.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="max-w-[100%] h-[250px] md:h-[400px] lg:h-[500px] w-full m-auto group relative top-[78px]">
      <Link to={`movie/${slides[currentIndex]?.id}`}>
        <div
          style={{
            backgroundImage: `url(${
              ApplicationConstant.imageUrl + slides[currentIndex]?.backdrop_path
            })`,
          }}
          className="w-full h-full sm:bg-fixed bg-start bg-cover duration-500 flex items-end justify-end"
        >
          <span className="p-5 text-white font-semibold text-xl md:text-3xl">
            {slides[currentIndex]?.title}
          </span>
        </div>
      </Link>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={25} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={25} />
      </div>
    </div>
  );
}

export default Silder;
