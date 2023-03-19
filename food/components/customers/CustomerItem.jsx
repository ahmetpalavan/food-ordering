/** @format */

import Image from "next/image";
import React from "react";

const CustomerItem = () => {
  return (
    <div className="mt-4">
      <div className="bg-secondary p-6 text-white rounded-[5px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptates quibusdam quos
        necessitatibus voluptatibus quas quidem. Quisquam, quae. Quisquam voluptatum, quod, quia, voluptas quae voluptates quibusdam quos
        necessitatibus voluptatibus quas quidem. Quisquam, quae.
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold ">Ahmet</span>
          <span className="text-[15px]">Magna Aliqua</span> 
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default CustomerItem;
