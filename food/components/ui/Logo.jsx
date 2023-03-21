import Link from "next/link";
import React from "react";
import Title from "./Title";

const Logo = () => {
  return (
    <Link href="/">
      <Title addClass="text-[2rem] font-dancing cursor-pointer">Ahmet</Title>
    </Link>
  );
};

export default Logo;
