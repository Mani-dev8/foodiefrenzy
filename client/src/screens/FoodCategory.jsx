import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../components/ContextReducer";
import FilterCard from "../components/FilterCard";
import FoodCategoryCard from "../components/FoodCategoryCard";
import FoodCategoryHighlight from "../components/FoodCategoryHighlight";
import FoodCategorySearch from "../components/FoodCategorySearch";
import MyCarousel from "../example/MyCarousel";
import CartModal from "../modal/CartModal";
import Cart from "./Cart";
import Footer from "../components/Footer";
function FoodCategory() {  
  const [cartView, setCartView] = useState(false);
  const loadCart = () => {
    setCartView(!cartView);
  };
  let totalValue=useStateContext().length; 
  return (
    <>
    <div className="font-poppins">
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto pt-5">
        {/* <div className="flex flex-row items-center justify-between border-b border-emerald-500 border-opacity-50">
          <h1 className="py-6 italic text-3xl md:text-4xl font-serif  font-semibold  text-emerald-500">
            Food Category
          </h1>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Link to="/home">
              <div className="flex sm:hover:text-emerald-600  cursor-pointer text-gray-400  flex-row items-center justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                &nbsp;
                <span className="font-semibold mr-0.5 hidden sm:block">
                  Home{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <div className="flex flex-row  text-emerald-500 items-center justify-center">
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
              &nbsp;
              <span className="font-semibold hidden sm:block">
                Food Category
              </span>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center border-b dark:border-zinc-600 py-4 sm:flex-row  ">
          <Link
            to="#"
            className="text-3xl md:text-4xl font-bold text-emerald-500 italic font-serif"
          >
            Food Category
          </Link>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <Link
                  to="/home"
                  className="flex items-center space-x-3 text-left sm:space-x-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 dark:text-zinc-400 text-zinc-500"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>

                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                    home
                  </span>
                </Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <Link
                  onClick={loadCart}
                  className="flex  items-center space-x-3 text-left sm:space-x-4"
                >
                  <button className="relative ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 dark:text-gray-400 text-zinc-500"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>

                    <h1 className="absolute rounded-full bg-emerald-500 w-5  h-5 text-white dark:text-black  items-center  text-center -top-2 -right-2 font-semibold text-[11px]  dark:border-black">
                      <div className="relative w-full h-full">
                        <span className="max-h-fit m-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
                          {totalValue}
                        </span>
                      </div>
                    </h1>
                  </button>

                  <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                    cart
                  </span>
                </Link>
                {cartView && (
                  <CartModal>
                    <Cart onClose={loadCart} />
                  </CartModal>
                )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1 dark:text-zinc-100"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Category
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </ul>
            </div>
          </div>
        </div>
        <MyCarousel />
        <FoodCategoryCard />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default FoodCategory;
 