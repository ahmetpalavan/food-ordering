import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  function NextBtn({ onClick }) {
    // console.log(NextBtn, "next");
    return (
      <button
        className="absolute -bottom-12 left-1/2 text-white bg-primary rounded-full flex items-center justify-center w-10 h-10"
        onClick={onClick}
      >
        <ArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="
        absolute -bottom-12 right-1/2 text-white bg-primary rounded-full flex items-center justify-center w-10 h-10 mr-4
      "
        onClick={onClick}
      >
        <ArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  //   console.log(settings, "settingsq123");

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center ">What Our Customers Say</Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/ahmet.png" />
        <CustomerItem imgSrc="/aziz.png" />
        <CustomerItem imgSrc="/ahmet.png" />
        <CustomerItem imgSrc="/aziz.png" />
      </Slider>
    </div>
  );
};

export default Customers;
