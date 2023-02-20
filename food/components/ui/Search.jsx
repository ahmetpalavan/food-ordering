import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";
import Card from '@mui/material/Card';
import { Button, Input } from "@mui/material";
const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen after:content-[''] after:w-screen after:h-screen after:bg-purple-200 after:absolute
        after:top-0 after:left-0 after:opacity-60 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative mt-10">
          <Card className="relative p-10 z-50 w-[370px] md:w-[600px] rounded-full bg-white">
            <Title addClass="text-[40px] text-center">Search</Title>
            <Input type="text" placeholder="Search..." className="border w-full my-10" />
            <ul>
              <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image alt="food" src="https://html.design/demo/feane/images/f1.png" width={48} height={48} />
                </div>
                <span className="font-bold">Food Name</span>
                <span className="font-bold">Price</span>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image alt="food" src="https://html.design/demo/feane/images/f1.png" width={48} height={48} />
                </div>
                <span className="font-bold">Food Name</span>
                <span className="font-bold">Price</span>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image alt="food" src="https://html.design/demo/feane/images/f1.png" width={48} height={48} />
                </div>
                <span className="font-bold">Food Name</span>
                <span className="font-bold">Price</span>
              </li>
            </ul>
            <button onClick={() => setIsSearchModal(false)} className="absolute top-4 right-4">
              <GiCancel size={25} className="transition-all " />
            </button>
        </Card>
      </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
