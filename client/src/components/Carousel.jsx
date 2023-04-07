import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { handleScrollCardAnimation } from '../services/helper';

function Carousel() {
  const handleCarousel=(event)=>{
    const id=event.currentTarget.classList[0];
    handleScrollCardAnimation(id)
  }
  return (
    <div className="container min-w-[100vw] ">
      <div className="flex items-center justify-center w-full h-full py-16 md:py-24 sm:py-8 px-4 mx-auto sm:px-8 lg:px-12 max-w-7xl ">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="cursor-pointer lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -left-5 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div onClick={handleCarousel} className="ChickenBiryani flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Biryani</span></h1>
                      <img
                        src="https://iili.io/HOzIsn4.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div onClick={handleCarousel} className="VegFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Fried Rice</span></h1>
                      <img
                        src="https://t3.ftcdn.net/jpg/03/44/05/76/360_F_344057615_YwLZhPE7LtXATY422XdWETVCH2oEyBoM.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Burger</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/burger-food-with-melted-cheese-floating-cartoon-vector-icon-illustration-food-object-isolated-flat_138676-6841.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div onClick={handleCarousel} className="PrawnsFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Prawn Fried Rice</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/nasi-goreng-udang-shrimp-fried-rice-top-view_307665-306.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all aspect-square bg-gray-50"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div onClick={handleCarousel} className="ChickenCheesePizza flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Pizza</span></h1>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/001/268/523/non_2x/fresh-delicious-pizza-vector.jpg"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div onClick={handleCarousel} className="ChickenTikka flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Chicken Tikka</span></h1>
                      <img
                        src="https://img.freepik.com/free-vector/hand-drawn-satay-illustration_23-2148792763.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -right-12 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="cursor-pointer lg:hidden sm:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -left-5 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div onClick={handleCarousel} className="ChickenBiryani flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Biryani</span></h1>
                      <img
                        src="https://iili.io/HOzIsn4.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div onClick={handleCarousel} className="VegFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Fried Rice</span></h1>
                      <img
                        src="https://t3.ftcdn.net/jpg/03/44/05/76/360_F_344057615_YwLZhPE7LtXATY422XdWETVCH2oEyBoM.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Burger</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/burger-food-with-melted-cheese-floating-cartoon-vector-icon-illustration-food-object-isolated-flat_138676-6841.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div onClick={handleCarousel} className="PrawnsFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Prawn Fried Rice</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/nasi-goreng-udang-shrimp-fried-rice-top-view_307665-306.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all aspect-square bg-gray-50"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div onClick={handleCarousel} className="ChickenCheesePizza flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Pizza</span></h1>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/001/268/523/non_2x/fresh-delicious-pizza-vector.jpg"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div onClick={handleCarousel} className="ChickenTikka flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Chicken Tikka</span></h1>
                      <img
                        src="https://img.freepik.com/free-vector/hand-drawn-satay-illustration_23-2148792763.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -right-12 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="cursor-pointer block sm:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -left-5 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex gap-1 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div onClick={handleCarousel} className="ChickenBiryani flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Biryani</span></h1>
                      <img
                        src="https://iili.io/HOzIsn4.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div onClick={handleCarousel} className="VegFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Fried Rice</span></h1>
                      <img
                        src="https://t3.ftcdn.net/jpg/03/44/05/76/360_F_344057615_YwLZhPE7LtXATY422XdWETVCH2oEyBoM.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Burger</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/burger-food-with-melted-cheese-floating-cartoon-vector-icon-illustration-food-object-isolated-flat_138676-6841.jpg"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div onClick={handleCarousel} className="PrawnsFriedRice flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Prawn Fried Rice</span></h1>
                      <img
                        src="https://img.freepik.com/premium-vector/nasi-goreng-udang-shrimp-fried-rice-top-view_307665-306.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all aspect-square bg-gray-50"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div onClick={handleCarousel} className="ChickenCheesePizza flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Pizza</span></h1>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/001/268/523/non_2x/fresh-delicious-pizza-vector.jpg"
                        alt="black chair and white table"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div onClick={handleCarousel} className="ChickenTikka flex flex-shrink-0 relative w-full sm:w-auto border border-zinc-300 flex-row items-center justify-center group overflow-hidden dark:border-none rounded-lg">
                      <h1 className="text-emerald-300 bg-zinc-900 bg-opacity-50 text-sm absolute  w-full h-full sm:group-hover:text-emerald-300  transition-all bg-transparent sm:group-hover:bg-zinc-900 content-center grid  sm:group-hover:bg-opacity-50 font-bold  sm:text-2xl text-center z-10"><span >Delicious <br /> Chicken Tikka</span></h1>
                      <img
                        src="https://img.freepik.com/free-vector/hand-drawn-satay-illustration_23-2148792763.jpg?w=2000"
                        alt="sitting area"
                        className="object-cover object-center w-full group-hover:scale-125  transition-all"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="hover:bg-emerald-500 absolute w-10 h-10 rounded-full bg-zinc-900 overflow-hidden z-30 -right-12 mr-8 focus:outline-nonebg-zinc-900 bg-opacity-60 transition-all "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Carousel