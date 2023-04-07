import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../screens/Cart";
import CartModal from "../modal/CartModal";

import {
  useDispatchContextTheme,
  useStateContext,
  useStateContextTheme,
} from "./ContextReducer";
 
function Header() {
  let totalValue = useStateContext().length;
 
  
  const dispatch = useDispatchContextTheme();
  let changeThemeState = useStateContextTheme();
  const [cartView, setCartView] = useState(false);
  const loadCart = () => {
    setCartView(!cartView);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  let value;
  const [themeState, setThemeState] = useState();
  useEffect(() => {
    setThemeState(!JSON.parse(window.localStorage.getItem("themeMode")));
    console.log("value changeThemeState", themeState);
  }, []);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsCollapsed(true);
        document.querySelector("#peer-nav").checked = false;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  async function handleTheme() {
    value = themeState;
    setThemeState(!value);
    await dispatch({ type: "change", value: value });
    const theme_container = document.getElementById("theme-container");
    const themeMode = JSON.parse(window.localStorage.getItem("themeMode"));
    console.log("value", value);
    if (value) {
      console.log("themeMode local type", themeMode);
      console.log(theme_container);
      theme_container.classList.add("dark");
      console.log(theme_container);
    } else {
      console.log(
        "theme-element",
        theme_container,
        ("themeMode local type", themeMode),
        theme_container.classList.remove("dark"),
        theme_container
      );
    }
  }
  return (
    <header className=" z-50 inset-x-0 top-0  py-2 md:py-3 fixed bg-emerald-500 ">
      <div className="px-4 mx-auto sm:px-8 lg:px-12 max-w-7xl  ">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 active:outline-none">
            <Link
              to="/home"
              title="FoodieFrenzy"
              className="inline-flex rounded-md focus:outline-none active:opacity-60"
            >
              <svg viewBox="0 0 403 88" className="css-1j8o68f  h-12 md:h-14  ">
                <defs id="SvgjsDefs1608"></defs>
                <g
                  id="SvgjsG1609"
                  featurekey="symbolContainer"
                  transform="matrix(1,0,0,1,0,0)"
                  fill={
                    !JSON.parse(window.localStorage.getItem("themeMode"))
                      ? "#fff"
                      : "#18181b"
                  }
                >
                  {" "}
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="nonzero"
                    d="             M0,0             H83             V88             H0,0             z             M4,4             v80             h75             v-80             z     "
                  ></path>
                </g>
                <g
                  id="SvgjsG1610"
                  featurekey="symbolFeature-0"
                  transform="matrix(1.272657036781311,0,0,1.272657036781311,10.183155845039796,12.317262960449973)"
                  fill={
                    !JSON.parse(window.localStorage.getItem("themeMode"))
                      ? "#fff"
                      : "#18181b"
                  }
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill={
                        !JSON.parse(window.localStorage.getItem("themeMode"))
                          ? "#fff"
                          : "#18181b"
                      }
                      d="M44.104,11.163c0.779-0.705,0.704-1.413-0.15-2.119   c-4.348,0.819-31.488,11.599-32.084,13.682C22.578,18.858,33.359,15.03,44.104,11.163z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill={
                        !JSON.parse(window.localStorage.getItem("themeMode"))
                          ? "#fff"
                          : "#18181b"
                      }
                      d="M36.52,2.613c-0.484-3.271-4.054,0.521-6.617,2.082   c-2.642,2.043-4.833,3.531-7.547,5.578c-2.566,1.968-13.312,9.478-13.906,11.783L36.52,2.613z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill={
                        !JSON.parse(window.localStorage.getItem("themeMode"))
                          ? "#fff"
                          : "#18181b"
                      }
                      d="M18.671,26.926c2.752-1.076,2.381-4.869,7.548-2.936   c0.483,0.781,0,1.45-0.632,2.229c3.235-1.261,5.245-2.86,7.66,1.303c1.896-0.631,5.726,0.93,6.023-0.074   c-1.488-0.816-3.05-1.486-5.354-1.486c-0.744-0.707-1.523-1.376-2.305-2.083c-1.19-0.372-2.416-0.335-3.641,0.111   c-1.268-0.818-1.936-1.747-4.092-1.747c-2.12,0-2.791,0.929-4.017,1.747c-3.271,0-3.568,0.036-5.986,2.229   c-1.561,0.447-3.159,0.855-4.721,1.303c0.073,0.223,0.111,0.447,0.186,0.631c1.747-0.258,3.495-0.52,5.242-0.779   C15.214,24.995,20.048,23.582,18.671,26.926z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill={
                        !JSON.parse(window.localStorage.getItem("themeMode"))
                          ? "#fff"
                          : "#18181b"
                      }
                      d="M5.363,28.861c-0.224,8.625,5.279,16.691,11.079,19.816h16.917   c0.036-0.113,5.986-5.133,7.434-7.734c1.637-3.014,3.05-7.732,3.05-12.082H5.363z"
                    ></path>
                  </g>
                </g>
                <g
                  id="SvgjsG1611"
                  featurekey="nameFeature-0"
                  transform="matrix(1.1391252279281616,0,0,1.1391252279281616,101.17740085060106,9.021263940100443)"
                  fill={
                    !JSON.parse(window.localStorage.getItem("themeMode"))
                      ? "#fff"
                      : "#18181b"
                  }
                >
                  <path d="M12.12 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M16.04 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M33.519999999999996 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M43.120000000000005 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M60.6 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M69.36 28.36 c0 6.28 5.32 11.68 12.08 11.68 c2 0 3.88 -0.4 5.6 -1.24 l0 1.2 l6.48 0 l0 -0.36 c0 -3.76 0.04 -7.52 0.04 -11.28 c0 -6.36 -0.04 -12.76 -0.04 -19.12 l0 -0.4 l-6.36 0 l0 9.2 c-1.76 -0.88 -3.68 -1.32 -5.72 -1.32 c-6.76 0 -12.08 5.4 -12.08 11.64 z M85.44 32.32 c-1.08 1.08 -2.4 1.64 -4 1.64 c-3.16 0 -5.6 -2.64 -5.6 -5.6 c0 -2.92 2.44 -5.56 5.6 -5.56 c1.6 0 2.92 0.6 4 1.64 c0.8 0.8 1.6 2.2 1.6 3.24 l0 1.4 c0 1.04 -0.8 2.48 -1.6 3.24 z M96.76 12.399999999999999 c0 1.88 1.52 3.56 3.64 3.56 c2.08 0 3.68 -1.68 3.68 -3.56 c0 -1.84 -1.6 -3.64 -3.68 -3.64 c-2.12 0 -3.64 1.8 -3.64 3.64 z M97.16000000000001 16.84 l0 23.16 l6.48 0 l0 -23.16 l-6.48 0 z M105.6 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M112.76 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M143.20000000000002 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M148.36 16.84 l0 23.16 l6.36 0 l0.08 -12.08 c0.04 -2.96 2.44 -5.44 5.6 -5.44 l1.68 0 l0.04 -6.08 l-1.72 0 c-1.96 0 -3.88 0.4 -5.6 1.28 l0 -0.84 l-6.44 0 z M163.24 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M170.4 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M190.36 17.04 c0 7.52 -0.04 15.04 -0.04 22.6 l0 0.36 l6.48 0 l0 -11.84 c0 -2.88 2.52 -5.4 5.6 -5.4 c2.96 0 5.28 2.28 5.6 5 c0.04 0.4 0 0.84 0 1.24 l0.04 2.92 l0 8 l6.48 0.08 l0 -12.04 c0 -2.92 -1.48 -5.8 -3.6 -7.84 c-2.32 -2.24 -5.16 -3.44 -8.52 -3.44 c-2 0 -3.92 0.44 -5.68 1.32 l0 -1.2 l-6.36 0 l0 0.24 z M217.72000000000003 34.519999999999996 l0 5.44 l19.84 0 l0 -6.28 l-10.04 0 l10 -11.6 l0 -5.24 l-19.44 0 l0 6.28 l9.64 0 z M240.76000000000002 41.12 c0 6.24 5.32 11.64 12.08 11.64 c6.92 0 12.12 -5.28 12.12 -11.64 l0 -24.32 l-6.48 0 l0 11.64 c0 2.92 -2.52 5.44 -5.64 5.44 c-3.08 0 -5 -2.24 -5.56 -5.04 l-0.04 -12.04 l-6.48 0 l0 11.88 c0 6.08 5.68 11.28 12.08 11.28 c2.04 0 3.96 -0.44 5.68 -1.32 l-0.04 2.48 c-0.08 3.08 -2.28 5.56 -5.64 5.56 c-3.16 0 -5.6 -2.64 -5.6 -5.56 l0 -0.36 l-6.48 0 l0 0.36 z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex gap-[2vw]  md:hidden">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="group  scale-110  transition z-50 dark:hover:ring-white/20"
              onClick={handleTheme}
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-50 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-100 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-white [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-white"
              >
                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"
                ></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="hidden h-6 w-6 fill-emerald-500 stroke-zinc-900 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-900 [@media_not_(prefers-color-scheme:dark)]:fill-teal-800/10 [@media_not_(prefers-color-scheme:dark)]:stroke-black hover:scale-95 hover:fill-zinc-900"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button onClick={loadCart} className="relative">
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1 mr-1.5 mt-0.5 w-[23px] h-[23px] text-white dark:text-black "
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="140 20 500 500"
                className="w-[28px] h-[28px] text-white "
              >
                <path
                  d="m313.63 407.52c-14.688 0-26.602 11.906-26.602 26.602 0 14.688 11.91 26.602 26.602 26.602 14.688 0 26.602-11.91 26.602-26.602-0.003907-14.699-11.914-26.602-26.602-26.602zm161.46 0c-14.688 0-26.602 11.906-26.602 26.602 0 14.688 11.91 26.602 26.602 26.602 14.688 0 26.602-11.91 26.602-26.602 0-14.699-11.91-26.602-26.602-26.602zm-239.93-242.44-21.492-65.801h-113.62l11.199 39.199h73.98l79.801 244.3h260.64l74.277-217.7z"
                  fill="#ffff"
                  className="color000 svgShape"
                ></path>
              </svg> */}
              <h1 className="absolute rounded-full bg-emerald-500 w-[19px] h-[19px] text-white dark:text-black border-2  text-center -top-1 -right-1 font-semibold  text-[11px] dark:border-black">
                {totalValue}
              </h1>
            </button>
            <button onClick={handleCollapse} className=" ">
              <div className="hamburger ml-1 flex lg:hidden relative flex-col justify-around min-h-[1.5rem] w-[1.4rem]  items-center">
                <input
                  type="checkbox"
                  name=""
                  id="peer-nav"
                  className="w-full peer h-full absolute opacity-0 z-10 "
                />
                <div className="w-full rounded peer-checked:hidden transition-all peer-checked:h-[1.8px] h-[1.8px]  bg-white dark:bg-zinc-900 "></div>
                <div className="w-full rounded transition-all peer-checked:h-[1.8px] h-[1.8px] bg-white dark:bg-zinc-900 peer-checked:-rotate-45  "></div>
                <div className="w-full rounded transition-all peer-checked:h-[1.8px] h-[1.8px] bg-white dark:bg-zinc-900 peer-checked:rotate-45  absolute   m-auto"></div>
                <div className="w-full rounded peer-checked:hidden transition-all peer-checked:h-[1.8px] h-[1.8px] bg-white dark:bg-zinc-900"></div>
              </div>
            </button>
          </div>
          <div className="hidden md:flex md:items-center  md:space-x-5 lg:space-x-7 lg:ml-28 ">
            <Link
              to="/home"
              title=""
              className="font-poppins text-base font-normal  hover:underline underline-offset-4 hover:decoration-2 active:opacity-50 transition-all duration-200 rounded   text-white dark:text-zinc-900   select-none"
            >
              Home{" "}
            </Link>
            <Link
              to="/food_category"
              title=""
              className="font-poppins text-base font-normal  hover:underline underline-offset-4 hover:decoration-2 active:opacity-50 transition-all duration-200 rounded   text-white dark:text-zinc-900  select-none"
            >
              Food Category{" "}
            </Link>
            <Link
              to="/about_us"
              title=""
              className="font-poppins text-base font-normal  hover:underline underline-offset-4 hover:decoration-2 active:opacity-50 transition-all duration-200 rounded   text-white dark:text-zinc-900  select-none"
            >
              About Us{" "}
            </Link>

            <button onClick={loadCart} className="relative">
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1 mr-1.5 mt-0.5 w-[23px] h-[23px] text-white dark:text-black "
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="140 20 500 500"
                className="w-[28px] h-[28px] text-white "
              >
                <path
                  d="m313.63 407.52c-14.688 0-26.602 11.906-26.602 26.602 0 14.688 11.91 26.602 26.602 26.602 14.688 0 26.602-11.91 26.602-26.602-0.003907-14.699-11.914-26.602-26.602-26.602zm161.46 0c-14.688 0-26.602 11.906-26.602 26.602 0 14.688 11.91 26.602 26.602 26.602 14.688 0 26.602-11.91 26.602-26.602 0-14.699-11.91-26.602-26.602-26.602zm-239.93-242.44-21.492-65.801h-113.62l11.199 39.199h73.98l79.801 244.3h260.64l74.277-217.7z"
                  fill="#ffff"
                  className="color000 svgShape"
                ></path>
              </svg> */}
              <h1 className="absolute rounded-full bg-emerald-500 w-[19px] h-[19px] text-white dark:text-black border-2  text-center -top-1 -right-1 font-semibold  text-[11px] dark:border-black">
                {totalValue}
              </h1>
            </button>
            {cartView ? (
              <CartModal>
                <Cart onClose={loadCart} />
              </CartModal>
            ) : (
              ""
            )}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="group   py-2  backdrop-blur transition  dark:hover:ring-white/20"
              onClick={handleTheme}
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-white [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-emerald-600"
              >
                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"
                ></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="hidden h-6 w-6 fill-emerald-500 stroke-zinc-900 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-900 [@media_not_(prefers-color-scheme:dark)]:fill-teal-800/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-800 hover:scale-95 hover:fill-zinc-900"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {localStorage.getItem("authToken") !== null ? (
              <Link
                to="/settings"
                title=""
                className=" inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-poppins
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            border-emerald-50                           
                            rounded-full
                            text-white dark:text-zinc-900                         
                            dark:border-zinc-900
                            focus:outline-none
                            hover:bg-white dark:hover:bg-zinc-900 hover:text-emerald-500 dark:hover:text-emerald-500 
                            focus:ring-offset-secondary
                        "
              >
                Account
              </Link>
            ) : (
              <Link
                to="/signup"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-poppins
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            border-emerald-50
                            
                            rounded-full
                            text-white dark:text-zinc-900
                            
                            dark:border-zinc-900
                            focus:outline-none
                            hover:bg-white dark:hover:bg-zinc-900 hover:text-emerald-500 dark:hover:text-emerald-500 
                            focus:ring-offset-secondary
                        "
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
      <ul
        className={`abolsute md:hidden text-white dark:text-zinc-900 ${
          isCollapsed ? "h-0 " : "h-fit -mb-2   mt-2 "
        } overflow-hidden text-center   list-none  bottom-0 w-full`}
      >
        <Link
          to="/home"
          className="flex flex-row items-center gap-2 hover:bg-emerald-600 dark:text-zinc-900 transition-all justify-start py-4 px-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5   "
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <li>Home</li>
        </Link>
        <Link
          to="/food_category"
          className="flex flex-row items-center gap-2 hover:bg-emerald-600 dark:text-zinc-900 transition-all justify-start py-4 px-12"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1  h-5 w-5"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <li>Food Category</li>
        </Link>
        <Link
          onClick={loadCart}
          className="flex flex-row items-center gap-2 hover:bg-emerald-600 dark:text-zinc-900 transition-all justify-start py-4 px-12"
        >
          <svg
            height="48"
            className="h-[1.35rem] w-[1.35rem] fill-current"
            viewBox="0 0 48 48"
            width="48"
          >
            <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
          <li>Cart</li>
        </Link>
        {localStorage.getItem("authToken") !== null ? (
          <Link
            to="/settings"
            className="flex flex-row items-center gap-2 hover:bg-emerald-600 dark:text-zinc-900 transition-all justify-start py-4 px-12"
          >
            <svg
              className="h-[1.35rem] w-[1.35rem]  fill-current"
              enableBackground="new 0 0 24 24"
              id="Layer_1"
              version="1.0"
              viewBox="0 0 24 24"
              space="preserve"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M12,14c-6.1,0-8,4-8,4v2h16v-2C20,18,18.1,14,12,14z" />
            </svg>

            <li>Accounts</li>
          </Link>
        ) : (
          <Link
            to="/signup"
            className="flex flex-row items-center gap-2 hover:bg-emerald-600 dark:text-zinc-900 transition-all justify-start py-4 px-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[1.4rem] h-[1.4rem] "
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>

            <li>Sign Up</li>
          </Link>
        )}
      </ul>
    </header>
  );
}

export default Header;
