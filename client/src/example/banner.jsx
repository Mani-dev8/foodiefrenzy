import React, { useContext, useState } from "react";
import { useEffect } from "react";
import bgImageHero from "../assets/banner-hero-food.png";
import Bg from "../assets/bg.jsx";

/* let myTimeout;

const placeholder = "search food ex. biryani        ";
let count = placeholder.length;
let start = 0;
let value = "";
function startSearch() {
  myTimeout = setInterval(myGreeting, 200);
}

function myGreeting() {
  value = value + placeholder[start];
  start = start + 1;
  if (start===count) {
    start=0;
    value='',
  }
  search_item.setAttribute('placeholder',value)
  console.log("value=== ", value);
}
startSearch()
function myStopFunction() {
  clearTimeout(myTimeout);
  console.log(typeof myTimeout);
}
 */
function setSearch(value) {
  /*   console.log("length ", value.length);
  if (value.length === 0) {
    startSearch();
  } else {
    myStopFunction();
  } */
}

function BannerHero() {
  const [state, setState] = useState(true);

  const [searchValue, setSearchValue] = useState("");
  const [foodData, setFoodData] = useState(null);
  useEffect(() => {
    setFoodData(JSON.parse(window.localStorage.getItem("FoodData")));
  }, []);
  useEffect(() => {
    const search_parent = document.querySelector("#search-parent");

    console.log(
      "🚀 ~ file: banner.jsx:49 ~ useEffect ~ searchValue.length:",
      searchValue.length
    );
    if (searchValue.length > 0) {
      setState(false);

      console.log("🚀 ~ file: banner.jsx:53 ~ useEffect ~ ", foodData);
      const search_item = document.querySelector("#search-item");
      console.log("search_item", search_item.value);

      const matchingOptions = Array.from(foodData).filter((option) =>
        option.name.toLowerCase().includes(search_item.value.toLowerCase())
      );
      console.log(
        "🚀 ~ file: banner.jsx:57 ~ useEffect ~ matchingOptions:",
        matchingOptions
      );
      // foodData.map((value) => {
      //   console.log("🚀 ~ file: banner.jsx:58 ~ useEffect ~ value:", value.name.split(' ').join(''))

      // })
      let result = "";
      matchingOptions.map((option) => {
        console.log(
          "🚀 ~ file: banner.jsx:62 ~ useEffect ~  option.value:",
          option.name
        );
        result =
          result +
          `<button className="" >
            ${option.name}
          </button>`;
      });
      search_parent.innerHTML = result;
      // search_item.onfocus=()=>{
      // }
      var text = searchValue.toLocaleUpperCase();
      console.log("text uppercase", text);
      // const search_item = document.querySelector("#PrawnsFriedRice");
      // search_item.scrollIntoView({behavior:"smooth"})
    }
    if (searchValue.length === 0) {
      console.log(
        "🚀 ~ file: banner.jsx:84 ~ useEffect ~ searchValue.length:",
        searchValue.length
      );

      search_parent.innerHTML = "";
    }
    console.log("value", searchValue);
  }, [searchValue]);

  function handleScrollIntoView(value) {
    const foodCardElement = document.querySelector(
      `#${value.split(" ").join("")}`
    );
    //! USING setTimeout function for executing srollIntoView because it wont work without it in mobile devices

    setTimeout(() => {
      const elementPosition =
      foodCardElement.getBoundingClientRect().top;
      console.log("🚀 ~ file: banner.jsx:113 ~ setTimeout ~ foodCardElement.getBoundingClientRect().top:", foodCardElement.getBoundingClientRect().top)
      console.log("🚀 ~ file: banner.jsx:112 ~ setTimeout ~ elementPosition:", elementPosition)
      const offset = elementPosition - 200;
      console.log("🚀 ~ file: banner.jsx:115 ~ setTimeout ~ offset:", offset)
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      // foodCardElement.scrollIntoView({
      //   behavior: "smooth",
        
      // });
    }, 100);
    foodCardElement.children[0].classList.add(
      "shadow-xl",
      "scale-105",
      "dark:bg-emerald-800",
      "border-emerald-500",
      "dark:shadow-zinc-800",
      "animate-pulse",
      "bg-emerald-100",
      "border-2",
      "dark:border-emerald-500"
      // "dark:bg-emerald-900"
    );
    const handleHoverEffectElement = document.createElement("div");
    handleHoverEffectElement.id = "handle-hover-effect-element";
    handleHoverEffectElement.classList.add(
      "fixed",
      "w-[100vw]",
      "h-[100vh]",
      "top-0",
      "left-0",
      "z-[100]",
      "bg-transparent"
    );
    document.body.appendChild(handleHoverEffectElement);
    document.querySelector("#search-parent").innerHTML = "";
    document.querySelector("#search-item").value = "";
    setState(true);
    setTimeout(() => {
      document.querySelector("#handle-hover-effect-element").remove();
      foodCardElement.children[0].classList.remove(
        "shadow-xl",
        "scale-105",
        "dark:bg-emerald-800",
        "border-emerald-500",
        "dark:shadow-zinc-800",
        "animate-pulse",
        "bg-emerald-100",
        "border-2",
        "dark:border-emerald-500"
        // "dark:bg-emerald-900"
      );
    }, 2500);
  }
  return (
    <div
      className=" bg-cover min-h-[400px] grid justify-items-center items-center  relative bg-center  "
    >
      <img
        src={bgImageHero}
        alt="heroBanner"
        className=" w-full h-full object-cover object-center "
      />
      <div className="absolute w-full h-full bg-zinc-900 bg-opacity-60 "></div>
      <div className="z-20  absolute text-center  sm:flex-row sm:flex-wrap flex-col  items-center sm:justify-between  font-poppins  sm:pt-28 lg:pt-32 px-6 mx-auto  min-w-[280px]   max-w-7xl bg-cover ">
        <div className="w-full text-center ">
          {/* <spna className="text-xl sm:text-2xl dark:text-white ">Special</spna> */}
          <h1 className=" mt-5 text-3xl sm:text-[2.5rem] leading-normal  md:leading-normal md:text-5xl lg:text-7xl  italic font-serif font-semibold text-white lg:leading-relaxed">
           Order Your <br /> Delicious Food
          </h1>
        </div>
        <div className="relative bg-zinc-900 bg-opacity-50 rounded  w-full min-w-[240px] m-auto mt-4  sm:my-6 ">
          <div className="absolute inset-y-0 left-0  pl-4 flex items-center ">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            name="search-item"
            id="search-item"
            autoComplete="off"
            style={{ caret: "underscore" }}
            className="peer relative rounded pl-12 border-2 border-zinc-600   text-emerald-50 text-xl min-w-[360px]  placeholder-emerald-400 placeholder:text-lg w-full  h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  placeholder-shown:border-blue-gray-200 z-10 placeholder-shown:border-t-blue-gray-200  border-b-2  border-b-emerald-500  px-3 sm:py-2.5 py-2"
            onChange={(e) =>
              e.target.value.length === 0 ? setState(true) : ""
            }
            onKeyUp={(e) => setSearchValue(e.target.value)}
            placeholder=""
            list="list-search"
          />
          <div
            id="search-parent"
            onMouseDown={(e) => handleScrollIntoView(e.target.innerText)}
            className=" absolute w-full z-[100] flex flex-col [&_button]:text-left [&_button]:border-b [&_button]:border-zinc-600  bg-zinc-800  transition-all [&_button:hover]:bg-emerald-500  [&_button]:px-4 [&_button]:py-1 [&_button]:text-emerald-500 [&_button:hover]:text-white [&_button]:dar:hoverk:text-zinc-900 [&_button]:cursor-pointer"
          ></div>

          <span
            className={`ml-10 absolute peer-focus:hidden top-1/2 border-r-2 -z-0 border-emerald-500 animate-[typing_6s_steps(28)_infinite,_blink_.4s_step-end_infinite_alternate] overflow-hidden w-[28ch] whitespace-nowrap font-mono -translate-y-1/2 text-white text-opacity-90 left-4 text-lg ${
              state ? "block" : "hidden"
            }`}
          >
            search for food ex. biryani
          </span>
        </div>
        {/* <Bg /> */}
      </div>
    </div>
  );
}

export default BannerHero;

            // <div className="relative  w-full min-w-[220px] max-w-[400px] m-auto mt-4  sm:my-6 md:mt-10">
    //         <div className="bg-cover relative ">
    //   <div className=" min-h-[400px] aspect-video bg-cover border bg-center" style={{backgroundImage:"url('https://bucketbiryani.com/wp-content/uploads/2020/02/slider_1-1.jpg')"}}>
    //     {/* <img
    //       src=
    //       alt="banner biryani"
    //       className="dark:opacity-60 h-full min-h-[400px]  "
    //     /> */}
        
    //   </div>
    //   <div className="flex sm:flex-row sm:flex-wrap flex-col  items-center sm:justify-between  font-poppins pt-28 lg:pt-32 px-6 mx-auto  sm:px-8 lg:px-12 max-w-7xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    //     <div className="w-1/2 sm:w-full text-center ">
    //       {/* <spna className="text-xl sm:text-2xl dark:text-white ">Special</spna> */}
    //       <h1 className=" mt-5 text-4xl leading-normal  md:text-5xl lg:text-7xl  italic font-serif font-semibold text-emerald-500 ">
    //         Delicious Food
    //       </h1>
    //     </div>
    //     <div className="relative   w-full min-w-[220px] max-w-[400px] m-auto mt-4  sm:my-6 md:mt-10">
    //       <input
    //         type="text"
    //         name="search-item"
    //         id="search-item"
    //         autoComplete="off"
    //         style={{ caret: "underscore" }}
    //         className="peer relative rounded pl-12 border border-emerald-100 dark:border-emerald-900 text-emerald-500 text-xl min-w-[220px]  placeholder-emerald-400 placeholder:text-lg w-full  h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  placeholder-shown:border-blue-gray-200 z-10 placeholder-shown:border-t-blue-gray-200  border-b-2  border-b-emerald-500 dark:border-b-emerald-500  px-3 py-2.5 "
    //         onChange={(e) =>
    //           e.target.value.length === 0 ? setState(true) : ""
    //         }
    //         onKeyUp={(e) => setSearchValue(e.target.value)}
    //         placeholder=""
    //         list="list-search"
    //       />
    //       <div
    //         id="search-parent"
    //         onMouseDown={(e) => handleScrollIntoView(e.target.innerText)}
    //         className="absolute w-full z-[70] flex flex-col bg-emerald-100 dark:bg-zinc-800  transition-all [&_button:hover]:bg-emerald-500  [&_button]:px-4 [&_button]:py-1 [&_button]:text-emerald-500 [&_button:hover]:text-white [&_button]:dar:hoverk:text-zinc-900 [&_button]:cursor-pointer"
    //       ></div>

    //       <span
    //         className={`absolute peer-focus:hidden top-1/2 border-r-2 -z-0 border-emerald-500 animate-[typing_6s_steps(28)_infinite,_blink_.4s_step-end_infinite_alternate] overflow-hidden w-[28ch] whitespace-nowrap font-mono -translate-y-1/2 text-emerald-500 text-opacity-90 left-12 text-lg ${
    //           state ? "block" : "hidden"
    //         }`}
    //       >
    //         search for food ex. biryani
    //       </span>
    //       <svg
    //         className="h-6 w-6 text-gray-500 absolute top-1/2 -translate-y-1/2 left-2"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <circle cx="11" cy="11" r="8"></circle>
    //         <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //       </svg>
    //     </div>
    //     {/* <Bg /> */}
    //   </div>
    //   {/* <section className="hero bg-gray-100">
    //     <div className="container mx-auto py-16">
    //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8">
    //         Search for your favorite items
    //       </h1>
    //       <div className="relative mx-auto lg:w-1/2 xl:w-2/3">
    //         <input
    //           type="text"
    //           className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 pl-12 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
    //           placeholder="Search for items..."
    //         />
    //         <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
    //           <svg
    //             className="h-6 w-6 text-gray-500"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <circle cx="11" cy="11" r="8"></circle>
    //             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //           </svg>
    //         </div>
    //       </div>
    //       <div className="relative  mx-auto lg:w-1/2 xl:w-2/3 border rounded-lg overflow-hidden m-auto mt-4  sm:my-6 md:mt-10">
    //         <input
    //           type="text"
    //           name="search-item"
    //           id="search-item"
    //           autoComplete="off"
    //           style={{ caret: "underscore" }}
    //           className="peer pl-14   relative   text-emerald-500 text-xl min-w-[220px]  placeholder-emerald-400 placeholder:text-lg w-full  h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  placeholder-shown:border-blue-gray-200 z-10 placeholder-shown:border-t-blue-gray-200  border-b-2  border-b-emerald-500  px-3 py-2.5 "
    //           onChange={(e) =>
    //             e.target.value.length === 0 ? setState(true) : ""
    //           }
    //           onKeyUp={(e) => setSearchValue(e.target.value)}
    //           placeholder=""
    //           list="list-search"
    //         />
    //         <svg
    //           className="h-6 w-6 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         >
    //           <circle cx="11" cy="11" r="8"></circle>
    //           <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //         </svg>
    //         <div
    //           id="search-parent"
    //           onMouseDown={(e) => handleScrollIntoView(e.target.innerText)}
    //           className="absolute w-full z-[70] flex flex-col bg-emerald-100 dark:bg-zinc-800  transition-all [&_button:hover]:bg-emerald-500  [&_button]:px-4 [&_button]:py-1 [&_button]:text-emerald-500 [&_button:hover]:text-white [&_button]:dar:hoverk:text-zinc-900 [&_button]:cursor-pointer"
    //         ></div>
    //         <div className="flex items-center"></div>
    //         <span
    //           className={` ml-10 absolute peer-focus:hidden top-1/2 border-r-2 -z-0 border-emerald-500 animate-[typing_6s_steps(28)_infinite,_blink_.4s_step-end_infinite_alternate] overflow-hidden w-[28ch] whitespace-nowrap font-mono -translate-y-1/2 text-emerald-500 text-opacity-90 left-4 text-lg ${state ? "block" : "hidden"}`}
    //         >
    //           search for food ex. biryani
    //         </span>
    //       </div>
    //     </div>
    //   </section> */}
    // </div>


    