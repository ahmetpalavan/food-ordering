import Image from "next/image";
import React, { useState } from "react";
import Title from "../../components/ui/Title";

const itemsExtra = [
  {
    id: 1,
    name: "Extra Cheese",
    price: 1,
  },
  {
    id: 2,
    name: "Extra Tomato",
    price: 2,
  },
  {
    id: 3,
    name: "Extra Onion",
    price: 3,
  },
];

const Index = () => {
  const [prices, setPrices] = useState([5, 10, 20]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setextraItems] = useState(itemsExtra);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleSize = (e) => {
    const difference = prices[e] - prices[size];
    setSize(e);
    changePrice(difference);
  };

  const changePrice = (difference) => {
    setPrice(price + difference);
    console.log(price);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckedItems([...checkedItems, item]);
      changePrice(item.price);
    } else {
      changePrice(-item.price);
      setCheckedItems(checkedItems.filter((i) => i.id !== item.id));
    }
  };
  console.log(checkedItems);

  return (
    <div className="flex items-center md:h-[calc(100vh-_-88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] h-36 w-36 mx-auto">
        <Image src="https://html.design/demo/feane/images/f1.png" layout="fill" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">${price}</span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur eius
          numquam molestiae.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => {
                handleSize(0);
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/eminbasbayan/food-ordering-udemy/03fc2b8e2147fac327f2909fbacf03bc643b016d/public/images/size.png"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Small</span>
            </div>
            <div onClick={() => handleSize(1)} className="relative w-12 h-12 cursor-pointer">
              <Image
                src="https://raw.githubusercontent.com/eminbasbayan/food-ordering-udemy/03fc2b8e2147fac327f2909fbacf03bc643b016d/public/images/size.png"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Medium</span>
            </div>
            <div onClick={() => handleSize(2)} className="relative w-16 h-16 cursor-pointer">
              <Image
                src="https://raw.githubusercontent.com/eminbasbayan/food-ordering-udemy/03fc2b8e2147fac327f2909fbacf03bc643b016d/public/images/size.png"
                alt=""
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Large</span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          {extraItems.map((item) => (
            <label key={item.id} className="flex items-center gap-x-1">
              <input onChange={(e) => handleChange(e, item)} type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
