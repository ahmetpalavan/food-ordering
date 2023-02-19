import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:flex hidden w-full
          h-full sm:text-white text-black sm:w-auto sm:h-auto bg-white sm:bg-transparent
            ${isMenuModal !== false && "!grid place-content-center"}
          `}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
            <button onClick={() => setIsMenuModal(false)} className="absolute top-4 right-4 z-50">
              <GiCancel size={25} className="transition-all " />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
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
