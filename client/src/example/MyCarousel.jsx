import React, { useState, useEffect } from "react";
import { handleScrollCardAnimation } from "../services/helper";
import handleAll from "../components/FoodCategoryCard";
const slides = [
  {
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
    title: "Satisfy your cravings with our ",
    main_title: "delicious pizza!",
    dish_id: "Margherita Pizza",
  },
  {
    img: "https://bucketbiryani.com/wp-content/uploads/2020/02/slider_1-1.jpg",
    title: "Don't miss out on our",
    main_title: " mouth-watering biryani!",
    dish_id: "Biryani",
  },
  {
    img: "https://nomoneynotime.com.au/uploads/recipes/Leftover-fried-rice_2021-06-11-044501.jpg",
    title: "Taste the perfection in every bite with our",
    main_title: "fried rice!",
    dish_id: "Chicken Fried Rice",
  },
  {
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: "Get your hands on our juicy and flavorful",
    main_title: "juicy and flavorful burgers!",
    dish_id: "Burger",
  },
  {
    img: "https://wallpaperaccess.com/full/5912737.jpg",
    title: "Indulge in the rich and creamy flavors of our ",
    main_title: " butter chicken!",
    dish_id: "Butter Chicken",
  },
];
let filterData
let setUpdatedData
let setCategoryType
function MyCarousel() {
  const length = slides.length;
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => {
    setCurr((curr) => (curr === length - 1 ? 0 : curr + 1));
  };
  function showCard(event){

    handleScrollCardAnimation(event.target.id.split(1)[0]);
  }
  return (
    <div className="pt-12 z-50 max-w-7xl relative">
      <div
        className={`relative  flex-row m-auto max-w-full rounded  overflow-hidden flex `}
      >
        {slides.map((img) => {
          return (
            <div
              className="relative   min-w-[100%] flex flex-row items-center justify-center md:max-h-[400px] lg:max-h-[500px]  ease-out duration-500 max-h-[300px]"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <h1 className=" text-2xl sm:text-4xl px-10 lg:px-32 md:text-5xl md:leading-normal lg:leading-normal  text-center  absolute z-30 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-emerald-100 ">
                {img.title}
                <br />
                <span className="text-2xl sm:text-4xl text-center  md:text-5xl md:leading-normal lg:leading-normal font-semibold  z-30 font-serif italic text-emerald-300">
                  {img.main_title}
                </span>
                <br />
                <button
                  id={img.dish_id + "1"}
                  style={{ zIndex: 1000 }}
                  onClick={showCard}
                  className="text-sm mt-10 cursor hover:bg-opacity-80 transition-all pointer font-poppins px-3 py-2 rounded bg-emerald-500 text-white"
                >
                  Order now
                </button>
              </h1>

              <img
                src={img.img}
                alt=""
                className={`min-w-[100%] h-full  object-cover transition-transform`}
              ></img>
              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            </div>
          );
        })}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-10 rounded-full m-2 hover:bg-opacity-20 active:opacity-20"
          onClick={prev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 focus:bg-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <path
              fillRule="evenodd"
              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-10 rounded-full m-2 hover:bg-opacity-20 active:opacity-20"
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <path
              fillRule="evenodd"
              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MyCarousel;
