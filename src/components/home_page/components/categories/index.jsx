import axios from "axios";
import { useEffect, useState } from "react";
import LessThanIcon from "../../../../assets/huge_icons/lessThanIcon";
import LessThanIcon1 from "../../../../assets/huge_icons/lessThanIcon1";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("https://mobile.olcha.uz/api/v2/categories").then((response) => {
      setCategories(response.data.data.categories);
    });
  }, []);

  const onga = () => {
    if (currentIndex < categories.length - 10) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const chapga = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedCategories = categories.slice(currentIndex, currentIndex + 10);

  return (
    <div className="flex gap-10 mt-10 relative container px-13 overflow-hidden">
      <button
        onClick={chapga}
        className="absolute left-10 z-10 p-2 bg-slate-200 h-max w-max rounded-full cursor-pointer"
      >
        <LessThanIcon />
      </button>
      <button
        onClick={onga}
        className="absolute right-1 z-10 p-2 bg-slate-200 h-max w-max rounded-full cursor-pointer"
      >
        <LessThanIcon1 />
      </button>

      <div className="flex gap-10 transition-transform duration-300">
        {displayedCategories.map((item) => {
          return (
            <div key={item.id} className="transition duration-500 hover:scale-105">
              <div
                className="relative w-32 rounded-full"
                style={{
                  backgroundImage: `url(${item.background_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img src={item.main_image} alt="" />
              </div>
              <h2 className="text-center font-medium mt-2">{item.name_oz}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
