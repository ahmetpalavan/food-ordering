/** @format */

import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
      <div className="bg-yellow-300 p-3">
        <ul className="mt-4 fener">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="w-3 h-3 border rounded-full bg-white mt-1 ">
      {i}
    </div>,
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            objectFit="cover"
            alt="hero"
            layout="fill"
            src="https://raw.githubusercontent.com/eminbasbayan/food-ordering-udemy/55c598ab1566598810d0524eb8cadd5963f9bc8c/public/images/hero-bg.jpg"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="z-50 text-white mt-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <Button className="btn-primary">Order Now</Button>
          </div>
        </div>
        <div>
          <div className="z-50 text-white mt-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <Button className="btn-primary">Order Now</Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
