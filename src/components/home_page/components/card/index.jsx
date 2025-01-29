import ShoppingCart02Icon from "../../../../assets/huge_icons/shopping_savatchasi";
import FavouriteIcon from "../../../../assets/huge_icons/like";
import Analytics03Icon from "../../../../assets/huge_icons/taqqoslash";
import { useState } from "react";

function Card({ img_url, img_name, narxi, nomi, bolib_tolash }) {
  const [isliked, setIsliked] = useState(false);
  function like_bosish() {
    setIsliked(isliked ? false : true);
  }
  return (
    <div className="w-[250px] rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden mt-10">
      <div className="relative h-64 flex items-center justify-center bg-gray-100">
        <FavouriteIcon
          fill={isliked ? "red" : "none"}
          onClick={(e) => {
            e.preventDefault();
            like_bosish();
          }}
          className="absolute right-3 top-3 text-red-500 cursor-pointer hover:scale-110 transition duration-300"
        />
        <Analytics03Icon className="absolute right-3 top-12 text-gray-500 cursor-pointer hover:scale-110 transition duration-300" />
        <img src={img_url} alt={img_name} className="h-full object-contain" />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 line-clamp-2">{nomi}</p>
        <h3 className="text-lg font-semibold text-black mt-2">{narxi} so'm</h3>
        <p className="text-sm mt-1 w-max px-3 bg-amber-400 rounded-lg">
          {Math.floor(bolib_tolash)} so'm x 12
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button className="py-2 px-3 border-2 rounded-md shadow hover:bg-red-600 hover:text-white cursor-pointer transition duration-300">
            <ShoppingCart02Icon />
          </button>
          <button className="py-2 px-3 border-2 border-red-500 text-red-500 rounded-md shadow hover:bg-red-500 hover:text-white cursor-pointer transition duration-300">
            Muddatli to'lov
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
