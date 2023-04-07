import React from 'react'
import { Link } from 'react-router-dom';
function Footer({isDark}) {
  function scrollToTop(){
    const rootElement = document.getElementById("root");
      rootElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="px-6  bg-emerald-500 dark:text-black text-white pt-16 mx-auto sm:max-w-full  ">
      <div className="grid gap-10 row-gap-6 lg:max-w-screen-xl m-auto  pb-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <Link
            onClick={scrollToTop}
            to="/home"
            title="FoodieFrenzy"
            className="inline-flex -mt-6  rounded-md focus:outline-none active:opacity-60"
          >
            <svg
              viewBox="100 0 403 88"
              className="css-1j8o68f fill-current  h-12 md:h-14  "
            >
              <defs id="SvgjsDefs1608"></defs>
              <g
                id="SvgjsG1611"
                featurekey="nameFeature-0"
                transform="matrix(1.1391252279281616,0,0,1.1391252279281616,101.17740085060106,9.021263940100443)"
              >
                <path d="M12.12 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M16.04 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M33.519999999999996 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M43.120000000000005 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M60.6 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M69.36 28.36 c0 6.28 5.32 11.68 12.08 11.68 c2 0 3.88 -0.4 5.6 -1.24 l0 1.2 l6.48 0 l0 -0.36 c0 -3.76 0.04 -7.52 0.04 -11.28 c0 -6.36 -0.04 -12.76 -0.04 -19.12 l0 -0.4 l-6.36 0 l0 9.2 c-1.76 -0.88 -3.68 -1.32 -5.72 -1.32 c-6.76 0 -12.08 5.4 -12.08 11.64 z M85.44 32.32 c-1.08 1.08 -2.4 1.64 -4 1.64 c-3.16 0 -5.6 -2.64 -5.6 -5.6 c0 -2.92 2.44 -5.56 5.6 -5.56 c1.6 0 2.92 0.6 4 1.64 c0.8 0.8 1.6 2.2 1.6 3.24 l0 1.4 c0 1.04 -0.8 2.48 -1.6 3.24 z M96.76 12.399999999999999 c0 1.88 1.52 3.56 3.64 3.56 c2.08 0 3.68 -1.68 3.68 -3.56 c0 -1.84 -1.6 -3.64 -3.68 -3.64 c-2.12 0 -3.64 1.8 -3.64 3.64 z M97.16000000000001 16.84 l0 23.16 l6.48 0 l0 -23.16 l-6.48 0 z M105.6 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M112.76 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M143.20000000000002 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M148.36 16.84 l0 23.16 l6.36 0 l0.08 -12.08 c0.04 -2.96 2.44 -5.44 5.6 -5.44 l1.68 0 l0.04 -6.08 l-1.72 0 c-1.96 0 -3.88 0.4 -5.6 1.28 l0 -0.84 l-6.44 0 z M163.24 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M170.4 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M190.36 17.04 c0 7.52 -0.04 15.04 -0.04 22.6 l0 0.36 l6.48 0 l0 -11.84 c0 -2.88 2.52 -5.4 5.6 -5.4 c2.96 0 5.28 2.28 5.6 5 c0.04 0.4 0 0.84 0 1.24 l0.04 2.92 l0 8 l6.48 0.08 l0 -12.04 c0 -2.92 -1.48 -5.8 -3.6 -7.84 c-2.32 -2.24 -5.16 -3.44 -8.52 -3.44 c-2 0 -3.92 0.44 -5.68 1.32 l0 -1.2 l-6.36 0 l0 0.24 z M217.72000000000003 34.519999999999996 l0 5.44 l19.84 0 l0 -6.28 l-10.04 0 l10 -11.6 l0 -5.24 l-19.44 0 l0 6.28 l9.64 0 z M240.76000000000002 41.12 c0 6.24 5.32 11.64 12.08 11.64 c6.92 0 12.12 -5.28 12.12 -11.64 l0 -24.32 l-6.48 0 l0 11.64 c0 2.92 -2.52 5.44 -5.64 5.44 c-3.08 0 -5 -2.24 -5.56 -5.04 l-0.04 -12.04 l-6.48 0 l0 11.88 c0 6.08 5.68 11.28 12.08 11.28 c2.04 0 3.96 -0.44 5.68 -1.32 l-0.04 2.48 c-0.08 3.08 -2.28 5.56 -5.64 5.56 c-3.16 0 -5.6 -2.64 -5.6 -5.56 l0 -0.36 l-6.48 0 l0 0.36 z"></path>
              </g>
            </svg>
          </Link>
          <div className=" lg:max-w-sm">
            <p className="text-sm dark:text-zinc-600 text-zinc-300">
              designed by Manish Mahto
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide dark:text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 dark:text-gray-800 ">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              8169363402
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 dark:text-gray-800 ">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              manishmahto982@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 dark:text-gray-800 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Old Mumbai-Pune Road, Thane
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide dark:text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="dark:text-gray-700 text-zinc-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="dark:text-gray-700 text-zinc-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="dark:text-gray-700 text-zinc-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="text-sm dark:text-zinc-600 text-zinc-300 mt-2">
            © Copyright 2023 Foodie Frenzy, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer