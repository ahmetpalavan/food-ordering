import Card from "@mui/material/Card";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imgSrc, setImgSrc] = useState();

  const handleChanges = (e) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImgSrc(onLoadEvent.target.result);
      setFile(onLoadEvent.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    console.log(imgSrc);
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen after:content-[''] after:w-screen after:h-screen after:bg-purple-200 after:absolute
        after:top-0 after:left-0 after:opacity-60 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative mt-10">
          <Card className="relative p-10 z-50 w-[370px] md:w-[600px] rounded-3xl bg-white">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>
            <div className="flex flex-col text-sm mt-6">
              <label className="flex gap-2 items-center">
                <input type="file" onChange={(e) => handleChanges(e)} className="hidden" />
                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">Choose an Image</button>
                {imgSrc && (
                  <div>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img src={imgSrc} alt="" className="w-12 h-12 rounded-full" />
                  </div>
                )}
              </label>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input type="text" className="border-2 p-1 text-sm px-1 outline-none" placeholder="Write a title..." />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea className="border-2 p-1 text-sm px-1 outline-none" placeholder="Write a title..." />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select className="border-2 p-1 text-sm px-1 outline-none" placeholder="Write a title...">
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
              </select>
            </div>
            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                <input type="number" className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36" placeholder="small" />
                <input type="number" className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36" placeholder="medium" />
                <input type="number" className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36" placeholder="large" />
              </div>
            </div>
            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
                <input type="text" className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36" placeholder="item" />
                <input type="number" className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36" placeholder="price" />
                <button className="btn-primary ml-auto">Add</button>
              </div>
              <div className="mt-2">
                <span className="inline-block border border-orange-500 text-orange-500  p-1 rounded-xl text-xs">ketçap</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn-primary !bg-success ">Create</button>
            </div>
            <button className="absolute  top-4 right-4" onClick={() => setIsProductModal(false)}>
              <GiCancel size={25} className=" transition-all" />
            </button>
          </Card>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
