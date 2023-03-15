/** @format */

import { Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)] w-full container mx-auto">
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
      <div className="relative z-50 text-white mt-1/2">
        <Title>Fast Food Restaurant</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <Button className="btn-primary">Order Now</Button>
      </div>
    </div>
  );
};

export default Carousel;
