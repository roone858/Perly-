import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className=" z-50 absolute w-full  py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10">
        <Link href="/" className="flex items-center ">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <Image
            className=" mr-3"
            alt="Logo"
            src={"/logo.webp"}
            width={130}
            height={120}
          />
        </Link>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
        <div
          className="hidden w-full md:block md:w-auto relative -left-14"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-[color:var(--textColor)] font-rubik">
            <li>
              <Link
                href="/home"
                className="block py-6 px-2 uppercase text-[13px]   bg-red-color rounded md:bg-transparent   text-text-color md:hover:text-red-color hover:text-red-color dark:text-white md:dark:text-red-color font-rubik"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-6 px-2 uppercase text-[13px] bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-6 px-2 uppercase text-[13px] bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-6 px-2 uppercase text-[13px] bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="items-center justify-between  w-full md:flex md:w-auto md:order-1 flex-"
          id="navbar-search"
        >
          <div className="searchIcon hover:cursor-pointer hover:fill-red-color mx-6  ">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clip-path="url(#clip0_15_152)">
                  {" "}
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    stroke-linejoin="round"
                  ></circle>{" "}
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#000000"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_15_152">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </div>
          <div className="cart">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clip-path="url(#clip0_15_35)">
                  {" "}
                  
                  <path
                    d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                    stroke="#000000"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <circle
                    cx="10"
                    cy="20"
                    r="1"
                    stroke="#000000"
                    stroke-linejoin="round"
                  ></circle>{" "}
                  <circle
                    cx="17.5"
                    cy="20"
                    r="1"
                    stroke="#000000"
                    stroke-linejoin="round"
                  ></circle>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_15_35">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
