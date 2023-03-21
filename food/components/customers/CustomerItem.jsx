/** @format */

import Image from "next/image";
import React from "react";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-4 mx-4">
      <div className="bg-secondary p-6 text-white rounded-[5px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptates quibusdam quos
        necessitatibus voluptatibus quas quidem. Quisquam, quae. Quisquam voluptatum, quod, quia, voluptas quae voluptates quibusdam quos
        necessitatibus voluptatibus quas quidem. Quisquam, quae.
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold ">Ahmet</span>
          <span className="text-[15px]">Magna Aliqua</span>
        </div>
      </div>
        <div
          className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 
      flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 "
        >
          <Image src={imgSrc} layout="fill" objectFit="contain" className="rounded-full" />
        </div>
    </div>
  );
};

export default CustomerItem;
