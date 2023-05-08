import { Button } from "@mui/material";
import React, { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[30px]">Our Menu</Title>
        <div className="mt-10  ">
          {categoryList &&
            categoryList.map((category, index) => (
              <Button
                key={category.id}
                variant="text"
                className={`py-2 px-6 rounded-3xl ${index === activeCategory && "bg-secondary text-white"}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </Button>
            ))}
        </div>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
