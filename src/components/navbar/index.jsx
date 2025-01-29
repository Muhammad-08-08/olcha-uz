import { useState } from "react";
import olcha_logo from "../../assets/olcha_logo.png";
import Button from "./button";
import Katalog from "./katalog";
import ShoppingCart02Icon from "../../assets/huge_icons/shopping_savatchasi";
import FavouriteIcon from "../../assets/huge_icons/like";
import Analytics03Icon from "../../assets/huge_icons/taqqoslash";
import { Link } from "react-router";

const Menu01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"currentColor"}
    fill={"none"}
    {...props}
  >
    <path
      d="M4 5L20 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12L20 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 19L20 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Search01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#ffffff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M17.5 17.5L22 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const User02Icon = (props) => (
  <svg
    className="mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"currentColor"}
    fill={"none"}
    {...props}
  >
    <path
      d="M18.5 20V17.9704C18.5 16.7281 17.9407 15.5099 16.8103 14.9946C15.4315 14.3661 13.7779 14 12 14C10.2221 14 8.5685 14.3661 7.18968 14.9946C6.05927 15.5099 5.5 16.7281 5.5 17.9704V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="7.5"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Cancel01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"currentColor"}
    fill={"none"}
    {...props}
  >
    <path
      d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Navbar() {
  const [modal, setModal] = useState(false);
  {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <div>
      <div className="container mx-auto px-13 py-8 flex justify-between items-center">
        <div className="flex gap-9 items-center">
          <Link to={"/"}>
            <img className="w-28" src={olcha_logo} alt="olcha logo" />
          </Link>
          <div
            onClick={() => {
              setModal(modal ? false : true);
            }}
            className="w-max py-2 px-7.5 border-2 hover:border-red-600 hover:text-red-600 flex items-center gap-3 rounded-xl cursor-pointer"
          >
            {modal ? <Cancel01Icon /> : <Menu01Icon />}
            <p className="text-xl">Katalog</p>
          </div>
        </div>
        <div className="flex items-center w-[600px] h-12 bg-slate-200 rounded-xl">
          <input
            className="w-full h-full rounded-xl outline-0 pl-6"
            type="text"
            placeholder="katalog bo'yicha qidirish"
          />
          <button className="px-10 h-full bg-red-600 rounded-2xl cursor-pointer">
            <Search01Icon />
          </button>
        </div>
        <div className="flex gap-3">
          <Button>
            <Analytics03Icon />
            <p className="text-center">Taqqoslash</p>
          </Button>
          <Button>
            <FavouriteIcon />
            <p className="text-center">Sevimlilar</p>
          </Button>
          <Button>
            <ShoppingCart02Icon />
            <p className="text-center">Savatcha</p>
          </Button>
          <Button>
            <User02Icon />
            <p className="text-center">Kirish</p>
          </Button>
        </div>
      </div>
      {modal && <Katalog setModal={setModal} />}
    </div>
  );
}

export default Navbar;
