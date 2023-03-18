import { Button } from "@mui/material";
import Image from "next/image";
import Title from "./ui/Title";
import Icon from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart'

const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex-1 flex flex-wrap items-center rounded-md py-5 px-[15px] gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']  border-[5px] rounded-full border-primary overflow-hidden">
        <Image
          className="hover:scale-105 transition-all rounded-full"
          src="https://raw.githubusercontent.com/eminbasbayan/food-ordering-udemy/73ee5ea6bb0545130f3d3d191e71a42af1c3f0e4/public/images/o1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div>
          <span className="text-[40px] font-dancing">20%</span>
          <span className="text-sm inline-block ml-1 font-dancing">Off</span>
        </div>
        <Button className="btn-primary flex items-center gap-x-2">
          Order Now <ShoppingCart className="text-xl" />
        </Button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between gap-5 mx-auto container py-20">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
};

export default Campaigns;
