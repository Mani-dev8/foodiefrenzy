import React from 'react'

function FoodCategorySearch() {
  return (
    <div className="dark:bg-zinc-900 rounded  shadow-md block overflow-hidden ">
      <div className="w-full p-2 py-4 flex flex-row items-center justify-start bg-emerald-500 transition-all text-zinc-800 cursor-pointer relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <p className="font-semibold ml-2 text-md h-fit ">Filter Food:</p>
      </div>
      <div className=" w-full relative flex flex-row gap-2 py-4 px-2 overflow-scroll   items-center ">
        <button className="p-1 px-8  m-0.5 py-2 hover:text-emerald-600 hover:border-emerald-500 text-sm font-bold border-2 text-gray-500 border-gray-500  rounded-full">
          <span className="w-full flex align-middle">Circolare</span>
        </button>
        <button className="p-1 px-8  m-0.5 py-2 text-sm font-bold border-2 bg-emerald-500 border-emerald-500  rounded-full">
          <span className="w-full inline-flex leading-4  align-middle">
            Statistiche
          </span>
        </button>
        <button className="p-1 px-8  m-0.5 py-2 hover:text-emerald-600 hover:border-emerald-500 text-sm font-bold border-2 text-gray-500 border-gray-500  rounded-full">
          <span className="w-full flex align-middle">Circolare</span>
        </button>
        <button className="p-1 px-8  m-0.5 py-2 hover:text-emerald-600 hover:border-emerald-500 text-sm font-bold border-2 text-gray-500 border-gray-500  rounded-full">
          <span className="w-full flex align-middle">Circolare</span>
        </button>
      </div>
    </div>
  );
}

export default FoodCategorySearch