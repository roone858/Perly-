"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import React, { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className=" z-50 absolute w-full  py-4 justify-center ">
      <div className="max-w-screen-xl mx-auto px-10 flex md:grid grid-cols-4 gap-4  items-center  justify-between">
        <Link href="/" className="flex items-center col-span-1">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <Image
            className=" mr-3"
            alt="Logo"
            src={"/logo.webp"}
            width={130}
            height={120}
          />
        </Link>

        <div
          className="hidden w-full md:block md:w-auto col-span-2"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-[color:var(--textColor)] font-rubik">
            <li>
              <Link
                href="/home"
                className="block py-6 px-2 uppercase text-[13px] transition-all   bg-red-color rounded md:bg-transparent   text-text-color md:hover:text-red-color hover:text-red-color dark:text-white md:dark:text-red-color font-rubik"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-6 px-2 uppercase text-[13px] transition-all bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-6 px-2 uppercase text-[13px] transition-all bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-6 px-2 uppercase text-[13px] transition-all bold text-text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-color  dark:text-white md:dark:hover:text-red-color dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="w-full flex flex-row md:w-auto  items-center justify-end md:order-1 col-span-1"
          id="navbar-search"
        >
          <div className=" searchIcon hover:cursor-pointer hover:fill-red-color mx-6  ">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#000000"
                  className="hover:stroke-red-color"
                  strokeWidth="1.032"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="cart">
            <svg
              className={styles.icon}
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clipPath="url(#clip0_15_35)">
                  {" "}
                  <path
                    d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                    stroke="#000000"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <circle
                    cx="10"
                    cy="20"
                    r="1"
                    stroke="#000000"
                    strokeLinejoin="round"
                  ></circle>{" "}
                  <circle
                    cx="17.5"
                    cy="20"
                    r="1"
                    stroke="#000000"
                    strokeLinejoin="round"
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

        <button
          onClick={() => setOpenNavbar(!openNavbar)}
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
        </button>
        {openNavbar && <ResponsiveNavBar />}
      </div>
    </nav>
  );
};

const ResponsiveNavBar = () => {
  return (
    <div
      className="w-full md:block md:w-auto absolute top-14 left-0"
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
