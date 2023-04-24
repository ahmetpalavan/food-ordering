import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-b-3xl rounded-tl-2xl rounded-tr-2xl">
        <Link href="/product">
          <div className="relative w-36 h-36">
            <Image src="https://html.design/demo/feane/images/f1.png" className="hover:scale-110" layout="fill" objectFit="cover" />
          </div>
        </Link>
      </div>
      <div className="text-white p-[25px]">
        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <div className="flex items-center justify-between ">
          <span>$20</span>
          <button className="btn-primary !w-10 !h-10 !rounded-full grid !p-0 place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
