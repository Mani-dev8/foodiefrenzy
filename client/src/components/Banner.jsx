import React from 'react'
import chefimg from '../assets/Male-chef.svg'
function Banner() {
  return (
    <div className="container  py-9 md:py-12 px-4 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div className="grid items-strech justify-center md:grid-cols-2   gap-10 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div
          style={{ zIndex: 1 }}
          className="flex flex-col  md:flex-row items-strech justify-between  rounded md:py-6 px-6 mt-8 sm:mt-0"
        >
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end order-2 md:order-1">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/woman-enjoying-food-5648592-4698960.png?f=webp"
              alt=""
              className=" scale-125 md:scale-150"
            />
          </div>
          <div className="flex flex-col items-center md:items-end justify-center md:text-right md:w-1/2 order-1 md:order-2">
            <h1 className="text-3xl lg:text-4xl font-semibold dark:text-gray-100">
              Best Deal
            </h1>
            <p className="text-base lg:text-xl darKtext-gray-100 mt-2">
              Save upto <span className="font-bold">50%</span>
            </p>
          </div>
        </div>
        <div
          style={{ marginLeft: "0px" }}
          className="flex flex-col  md:flex-row items-strech justify-between  rounded md:py-6 px-6 "
        >
          <div className="flex justify-end order-2 md:order-1">
            <img src={chefimg} alt="" srcSet="" />
          </div>
          <div className="flex flex-col justify-center  order-1 md:order-2">
            <h1 className="md:text-lg text-center md:text-left  dark:text-gray-100">
              "Food that's safe and clean, from our kitchen to your plate."
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner