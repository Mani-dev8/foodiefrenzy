import React from 'react'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="flex h-[100vh] font-poppins items-center flex-col justify-center lg:flex-row py-28 px-4 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img
          src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
          className=""
          alt="Page not found"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-zinc-100">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800 dark:text-zinc-100">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800 dark:text-zinc-100">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <Link to={"/home"}>
          <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-4 bg-emerald-500 text-white hover:bg-emerald-600 font-semibold dark:border-none dark:text-black ">
            Go back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error404