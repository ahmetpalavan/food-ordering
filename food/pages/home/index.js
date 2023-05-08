import React from "react";
import About from "../../components/About";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = ({ categoryList }) => {
  console.log(categoryList);
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Index;
