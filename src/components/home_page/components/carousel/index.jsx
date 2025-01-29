import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import LessThanIcon from "../../../../assets/huge_icons/lessThanIcon";
import LessThanIcon1 from "../../../../assets/huge_icons/lessThanIcon1";

function Carousel() {
  const [carousel, setCarousel] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [count, setCount] = useState(54000);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  const minut = String(minutes).padStart(2, "0");
  const sekund = String(seconds).padStart(2, "0");

  useEffect(() => {
    setInProgress(true);
    axios
      .get("https://mobile.olcha.uz/api/v2/extra/sliders")
      .then((response) => {
        setCarousel(response.data.data.sliders);
      })
      .catch(() => {
        alert("Xatolik yuz berdi");
      })
      .finally(() => {
        setInProgress(false);
      });
  }, []);
  useEffect(() => {
    const carusel = setInterval(() => {
      setCarouselIndex((prev) => (prev < carousel.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(carusel);
  }, [carousel.length]);

  useEffect(() => {
    const kamayish = setInterval(() => {
      setCount(() => count - 1);
    }, 1000);
    return () => clearInterval(kamayish);
  }, [count]);

  const onga = () => {
    if (carouselIndex < carousel.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    }
  };
  const chapga = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-13 flex gap-4 justify-between">
      <div className="relative w-max">
        <button
          onClick={chapga}
          className="absolute left-5 top-[45%] p-1.5 bg-stone-200 rounded-full cursor-pointer"
        >
          <LessThanIcon />
        </button>
        {inProgress ? (
          <ClipLoader size={24} />
        ) : (
          <div>
            {carousel.length > 0 ? (
              <img
                src={carousel[carouselIndex].image_uz}
                alt={carousel[carouselIndex].title_uz}
              />
            ) : (
              <p>Ma'lumot mavjud emas</p>
            )}
          </div>
        )}
        <button
          onClick={onga}
          className="absolute right-5 top-[45%] p-1.5 bg-stone-200 rounded-full cursor-pointer"
        >
          <LessThanIcon1 />
        </button>
      </div>
      <div className="border-4 w-[320px] border-red-600 rounded-xl p-3.5">
        <div className="flex items-center gap-5 justify-between">
          <h4 className="text-lg font-bold">Kun mahsuloti</h4>
          <p className="flex gap-1 items-center">
            <span className="px-2 py-1 rounded-md border border-gray-300">
              {hours}
            </span>
            :
            <span className="px-2 py-1 rounded-md border border-gray-300">
              {minut}
            </span>
            :
            <span className="px-2 py-1 rounded-md border border-gray-300">
              {sekund}
            </span>
          </p>
        </div>
        <div>
          <p className="px-2.5 py-1 bg-red-600 w-max rounded-lg text-white">
            -15%
          </p>
          <img
            className="w-max mx-auto"
            src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-08-18/PSitz4kzBYewXgxYqnMkue6SL2ywHhb0icNcchn52ugDPHn9t1aI7n4ER1V4.jpg"
            alt="suv dazmol uchun"
          />
          <p className="font-sans">Dazmollash va tekislash uchun suv 10 l</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-medium text-red-600">30 000 so'm</h3>
            <del className="text-gray-500">35 000 so'm</del>
          </div>
          <p className="px-2 bg-amber-400 w-max rounded-md">
            4 000 so'm x 12 oy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
