 import { Grid } from "@mui/material";
import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto my-20">
      <Title addClass="text-[40px] text-center ">What Our Customers Say</Title>
      <div>
        <CustomerItem />
      </div>
    </div>
  );
};

export default Customers;
