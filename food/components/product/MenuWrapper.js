/** @format */

import { Button } from "@mui/material";
import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-2xl">Our Menu</Title>
        <div className="mt-10  ">
          <Button className="px-6 py-2 bg-secondary rounded-3xl text-white">All</Button>
          <Button className="px-6 py-2 rounded-3xl">Burger</Button>
          <Button className="px-6 py-2 rounded-3xl">Pizza</Button>
          <Button className="px-6 py-2 rounded-3xl">Pasta</Button>
          <Button className="px-6 py-2 rounded-3xl">Fries</Button>
        </div>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
