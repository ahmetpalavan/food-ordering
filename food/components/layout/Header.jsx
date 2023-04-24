import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

const Header = () => {
  const router = useRouter();
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <div className={`h-[5.5rem] relative z-50 ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"} `}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:flex hidden w-full
          h-screen sm:text-white text-black sm:w-auto sm:h-auto bg-white sm:bg-transparent
            ${isMenuModal !== false && "!grid place-content-center"}
          `}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button onClick={() => setIsMenuModal(false)} className="absolute top-4 right-4 z-50">
              <GiCancel size={25} className="transition-all " />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transition-all" />
          </Link>
          <span className="relative">
            <Link href="/cart">
              <FaShoppingCart className="hover:text-primary transition-all" />
              <span className="w-4 h-4 text-xs text-black absolute font-bold -top-2 -right-2 grid place-content-center rounded-full bg-primary">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </Link>
          </span>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button onClick={() => setIsMenuModal(true)} className="sm:hidden inline-block">
            <GiHamburgerMenu className="hover:text-primary transition-all text-xl" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
