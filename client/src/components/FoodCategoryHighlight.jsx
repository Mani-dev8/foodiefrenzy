import React from 'react'

function FoodCategoryHighlight() {
  return (
    <div className="py-16 px-4 mx-auto sm:px-8 lg:px-12 max-w-7xl lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="dark:text-zinc-100 mb-4 font-sans text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Chase ball of string eat
        </h2>
        <p className="dark:text-zinc-100 text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr className="dark:border-zinc-600 w-full my-8 border-gray-300 " />
      </div>
    </div>
  );
}

export default FoodCategoryHighlight




    
