import { Product } from "@/types/typeStore";
import CategoryButton from "@/wrappers/CategoryButton";

import React from "react";

const Sidebar = ({products}:{products:Product[]}) => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 pt-14  bg-gray-50  dark:bg-gray-800 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <CategoryButton
                category="men's clothing"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.182 512.182"
                  fill="#000000"
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
                      style={{ fill: "#FFE356" }}
                      d="M256.091,0c141.392,0,256,114.608,256,256s-114.608,256-256,256s-256-114.608-256-256 S114.699,0,256.091,0z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#F7CB48" }}
                      d="M170.819,221.381h165.99v106.409c0,45.552-37.352,82.904-82.904,82.904l0,0 c-45.552,0-82.904-37.352-82.904-82.904V221.381H170.819z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#FF7069" }}
                      d="M195.781,71.789l-35.712,3.098c0,0-62.315-8.017-75.069,46.463 c-12.754,54.298-42.819,111.875-42.819,111.875l69.603,30.611l20.772-42.818v259.462c36.623,20.225,78.713,31.704,123.354,31.704 c44.823,0,86.912-11.479,123.354-31.704V221.016l20.772,42.818l69.603-30.611c0,0-29.882-57.395-42.819-111.875 c-12.754-54.298-75.069-46.463-75.069-46.463l-35.712-3.098c-2.733,25.509-28.606,45.552-60.31,45.552s-57.577-20.043-60.31-45.552 H195.781z"
                    ></path>{" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M195.781,71.789l-15.123,1.275c4.373,32.433,36.441,57.577,75.433,57.577 c38.81,0,70.878-25.144,75.433-57.577l-15.123-1.275c-2.733,25.509-28.606,45.552-60.31,45.552S198.514,97.298,195.781,71.789z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M50.38,216.643c-4.737,10.386-8.017,16.581-8.017,16.581l69.603,30.611l7.288-14.941L50.38,216.826 V216.643z M393.11,248.712l7.288,14.941l69.603-30.611c0,0-3.28-6.195-8.017-16.581L393.11,248.53V248.712z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span className="ml-3"> Men{"'"}s clothing</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                 {products.filter((product:Product)=> product.category == "men's clothing").length}
                </span>
              </CategoryButton>
            </li>

            <li>
              <CategoryButton
                  category="women's clothing"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 504.136 504.136"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g transform="translate(1 2)">
                      {" "}
                      <path
                        style={{ fill: "#AAB1BA" }}
                        d="M157.201,11.561h187.733c0,52.053-34.133,128-93.867,153.6 C191.335,139.561,157.201,63.615,157.201,11.561"
                      ></path>{" "}
                      <path
                        style={{ fill: "#C49AE9" }}
                        d="M464.401,49.961l-30.72,117.76l-20.48-2.56c0,0-25.6,51.2-25.6,119.467 c0,46.933,11.947,125.44,19.627,170.667H97.468l-2.56-0.853c7.68-45.227,19.627-123.733,19.627-169.813 c0-68.267-25.6-119.467-25.6-119.467l-23.04,3.413L37.735,49.961l34.133-21.333c17.067-8.533,42.667-17.067,51.2-17.067h34.133 c0,52.053,34.133,128,93.867,153.6c59.733-25.6,93.867-101.547,93.867-153.6h34.133c8.533,0,34.133,8.533,51.2,17.067 L464.401,49.961z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#E4F2DE" }}
                        d="M413.201,489.428H88.935c0,0,2.56-13.653,5.973-34.987l2.56,0.853h309.76 C410.641,475.775,413.201,489.428,413.201,489.428L413.201,489.428z M498.535,71.295l-25.6,102.4l-39.253-5.973l30.72-117.76 L498.535,71.295L498.535,71.295z M37.735,49.961l28.16,118.613l-36.693,5.12l-25.6-102.4L37.735,49.961L37.735,49.961z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#FFE079" }}
                        d="M276.668,224.895c18.773,0,34.133,15.36,34.133,34.133c0,10.24-4.267,19.627-11.947,25.6l0,0 l-47.787,51.2l-47.787-51.2l0,0c-6.827-5.973-11.947-15.36-11.947-25.6c0-18.773,15.36-34.133,34.133-34.133 c10.24,0,19.627,4.267,25.6,11.947C257.041,229.161,266.428,224.895,276.668,224.895"
                      ></path>{" "}
                    </g>{" "}
                    <path
                      style={{ fill: "#51565F" }}
                      d="M414.201,495.695H89.935c-0.853,0-2.56-0.853-3.413-1.707s-0.853-2.56-0.853-3.413 c0-1.707,25.6-136.533,25.6-203.947c0-57.173-18.773-103.253-23.893-115.2l-56.32,7.68c-2.56,0-4.267-0.853-5.12-3.413l-25.6-102.4 c-0.853-1.707,0-3.413,1.707-4.267l34.133-21.333l0,0l34.133-21.333c16.213-8.533,43.52-17.92,53.76-17.92h187.733 c2.56,0,4.267,1.707,4.267,4.267s-1.707,4.267-4.267,4.267H162.468c1.707,52.053,35.84,120.32,89.6,144.213 c55.467-24.747,89.6-96.427,89.6-148.48c0-2.56,1.707-4.267,4.267-4.267h34.133c10.24,0,36.693,9.387,52.907,17.92l34.133,21.333 c0,0,0,0,0.853,0l34.133,21.333c1.707,0.853,2.56,2.56,1.707,4.267l-25.6,102.4c-0.853,1.707-2.56,3.413-5.12,3.413l-56.32-7.68 c-5.12,11.093-23.893,57.173-23.893,115.2c0,67.413,25.6,202.24,25.6,203.947c0,0.853,0,2.56-0.853,3.413 S415.055,495.695,414.201,495.695z M95.055,487.161h314.027c-0.853-5.12-2.56-14.507-4.267-25.6H132.601 c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h270.507c-7.68-46.08-18.773-121.173-18.773-166.4 c0-68.267,24.747-119.467,26.453-121.173c0.853-1.707,2.56-2.56,4.267-2.56l56.32,7.68l23.893-95.573l-26.453-16.213l-19.627,83.627 c-0.853,2.56-2.56,3.413-5.12,3.413c-1.707-0.853-3.413-2.56-3.413-4.267v-0.853l20.48-86.187l-31.573-19.627 c-17.067-8.533-41.813-16.213-48.64-16.213h-29.867c-1.707,55.467-38.4,128-96.427,153.6c-0.853,0.853-2.56,0.853-3.413,0 c-58.027-24.747-94.72-98.133-96.427-153.6h-29.867c-6.827,0-31.573,7.68-49.493,16.213L43.855,54.521l20.48,86.187v0.853 c0,1.707-1.707,3.413-3.413,4.267c-2.56,0.853-4.267-0.853-5.12-3.413L36.175,58.788L9.722,75.001l23.893,95.573l56.32-7.68 c1.707,0,3.413,0.853,4.267,2.56c0.853,1.707,26.453,52.907,26.453,121.173C119.801,347.215,99.322,461.561,95.055,487.161z M252.068,342.095L252.068,342.095c-0.853,0-2.56-0.853-3.413-1.707l-47.787-51.2c0,0,0,0-0.853-0.853 c-7.68-7.68-11.947-17.067-11.947-28.16c0-21.333,17.067-38.4,38.4-38.4c9.387,0,18.773,3.413,25.6,10.24 c6.827-5.973,16.213-10.24,25.6-10.24c21.333,0,38.4,17.067,38.4,38.4c0,10.24-4.267,20.48-11.947,28.16c0,0,0,0-0.853,0.853 l-47.787,51.2C254.628,341.241,252.922,342.095,252.068,342.095z M207.695,284.921l44.373,46.933l44.373-46.933 c0-0.853,0.853-0.853,0.853-0.853c6.827-5.973,10.24-13.653,10.24-22.187c0-16.213-13.653-29.867-29.867-29.867 c-8.533,0-17.067,3.413-22.187,10.24c-1.707,1.707-5.12,1.707-6.827,0c-5.973-6.827-13.653-10.24-22.187-10.24 c-16.213,0-29.867,13.653-29.867,29.867c0,8.533,3.413,17.067,10.24,22.187C207.695,284.068,207.695,284.068,207.695,284.921z"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Women{"'"}s clothing
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                 {products.filter((product:Product)=> product.category == "women's clothing").length}
                </span>
              </CategoryButton>
            </li>
            <li>
              <CategoryButton
               category="jewelery"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  width="32px"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fxemoji"
                  preserveAspectRatio="xMidYMid meet"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0096D1"
                      d="M26.1 49.8l9.6 21.8c0 .1-.1.1-.1.1L16.9 49.8h9.2zm-8.8-20.1H.1c0 .7 1.1 1.6 1.1 1.6l15.7 18.5l6.3-6.7l-5.9-13.4z"
                    ></path>
                    <path
                      fill="#76DFFF"
                      d="M71.5 30.5c-.5.5-1.3.5-1.8 0c-.2-.2-.4-.6-.4-.9H54.6l-9.2-10L55 9.5l16.3 19.1s0 .1.1.1h.1c.5.6.5 1.4 0 1.8zm-35.6-.8l9.4-10l-9.4-10.2l-9.4 10.2l9.4 10z"
                    ></path>
                    <path
                      fill="#59CAFC"
                      d="M36.3 71.7c-.1.1-.2 0-.1-.1l9.6-21.8H55L36.3 71.7zm12.4-28.6l6.3 6.7l16.4-19.2s.4-.6.4-.9H54.6l-5.9 13.4z"
                    ></path>
                    <path fill="#27C7FF" d="M26.5 19.7l-9.2 10h18.6z"></path>
                    <path fill="#B0E9FF" d="M45.4 19.7l-9.5 10h18.7z"></path>
                    <path
                      fill="#00B1FF"
                      d="M26.5 19.7l-9.2 10H.1s.1-.6.5-1l15.8-18.5c.1-.1.2-.2.3-.2c.2-.3.5-.4.9-.4c.7 0 1.2.6 1.2 1.2c0 .2-.1.4-.2.6l7.9 8.3zm9.4 10l12.8 13.5l5.9-13.5H35.9zm-18.6 0l5.9 13.5L36 29.7H17.3zm8.8 20.1l9.7 22c.1.1.2.1.3 0l9.7-22H26.1zm22.6-6.7l-2.9 6.7H55l-6.3-6.7z"
                    ></path>
                    <path
                      fill="#59CAFC"
                      d="M45.4 19.7L35.9 9.5H55l-9.6 10.2zM35.9 9.5H18c-.4 0-1.2 0-.9.3l9.4 9.9l9.4-10.2z"
                    ></path>
                    <path fill="#0074A8" d="M23.2 43.1l-6.3 6.7h9.2z"></path>
                    <path
                      fill="#0096D1"
                      d="M23.2 43.1l2.9 6.7h19.7l2.9-6.7l-12.8-13.4z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M52.7 29.9c2.7.7 4.8 2.8 5.5 5.5c.1.3.4.3.5 0c.7-2.7 2.8-4.8 5.5-5.5c.3-.1.3-.4 0-.5c-2.7-.7-4.8-2.8-5.5-5.5c-.1-.3-.4-.3-.5 0c-.7 2.7-2.8 4.8-5.5 5.5c-.3.1-.3.4 0 .5z"
                    ></path>
                    <path
                      fill="#B0E9FF"
                      d="M42.6 3.6c1.4.4 2.5 1.5 2.9 2.9c0 .1.2.1.2 0c.4-1.4 1.5-2.5 2.9-2.9c.1 0 .1-.2 0-.2c-1.4-.4-2.5-1.5-2.9-2.9c0-.1-.2-.1-.2 0c-.4 1.4-1.5 2.5-2.9 2.9c-.1 0-.1.2 0 .2z"
                    ></path>
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Jewelry</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                 {products.filter((product:Product)=> product.category == "jewelery").length}
                </span>
              </CategoryButton>
            </li>
            <li>
              <CategoryButton
                category="electronics"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.001 512.001"
                  fill="#000000"
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
                      style={{ fill: "#DBDDDD" }}
                      d="M367.347,0H144.654c-21.098,0-38.204,17.104-38.204,38.204v435.592 c0,21.1,17.107,38.204,38.204,38.204h222.693c21.101,0,38.204-17.104,38.204-38.204V150.531V123.99V38.204 C405.551,17.104,388.448,0,367.347,0z"
                    ></path>{" "}
                    <path
                      style={{ opacity: "0.15", fill: "#231F20" }}
                      d="M123.949,473.797V38.204c0-21.1,17.107-38.204,38.204-38.204 h-17.499c-21.098,0-38.204,17.104-38.204,38.204v435.592c0,21.1,17.107,38.204,38.204,38.204h17.499 C141.056,512,123.949,494.897,123.949,473.797z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#53CAF9" }}
                      d="M366.958,231.176c0,7.329-5.942,13.27-13.27,13.27H158.314c-7.33,0-13.27-5.942-13.27-13.27V56.207 c0-7.329,5.941-13.27,13.27-13.27h195.374c7.329,0,13.27,5.942,13.27,13.27V231.176z"
                    ></path>{" "}
                    <path
                      style={{ opacity: "0.15", fill: "#231F20" }}
                      d="M162.153,231.176V56.207c0-7.329,5.941-13.27,13.27-13.27 h-17.11c-7.33,0-13.27,5.942-13.27,13.27v174.969c0,7.329,5.941,13.27,13.27,13.27h17.11 C168.094,244.446,162.153,238.505,162.153,231.176z"
                    ></path>{" "}
                    <path
                      style={{ fill: "#EFEEED" }}
                      d="M256.003,280.772c-52.606,0-95.245,42.643-95.245,95.249c0,52.603,42.639,95.245,95.245,95.245 c52.602,0,95.241-42.642,95.241-95.245C351.243,323.415,308.604,280.772,256.003,280.772z M256.002,409.98 c-18.758,0-33.96-15.205-33.96-33.96c0-18.757,15.202-33.962,33.96-33.962c18.755,0,33.958,15.205,33.958,33.962 C289.96,394.776,274.757,409.98,256.002,409.98z"
                    ></path>{" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#547475" }}
                        d="M255.999,326.18c-4.58,0-8.294-3.714-8.294-8.294v-13.27c0-4.581,3.714-8.294,8.294-8.294 c4.581,0,8.294,3.714,8.294,8.294v13.27C264.293,322.467,260.58,326.18,255.999,326.18z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#547475" }}
                        d="M255.999,455.566c-4.58,0-8.294-3.714-8.294-8.294v-13.27c0-4.58,3.714-8.294,8.294-8.294 c4.581,0,8.294,3.714,8.294,8.294v13.27C264.293,451.853,260.58,455.566,255.999,455.566z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#547475" }}
                        d="M197.941,384.238h-13.27c-4.58,0-8.294-3.714-8.294-8.294s3.714-8.294,8.294-8.294h13.27 c4.581,0,8.294,3.714,8.294,8.294S202.522,384.238,197.941,384.238z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#547475" }}
                        d="M327.328,384.238h-13.27c-4.581,0-8.294-3.714-8.294-8.294s3.714-8.294,8.294-8.294h13.27 c4.581,0,8.294,3.714,8.294,8.294S331.908,384.238,327.328,384.238z"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#DBDDDD" }}
                        d="M207.341,100.56c0,1.958-1.588,3.547-3.547,3.547h-19.724c-1.958,0-3.547-1.588-3.547-3.547V80.836 c0-1.958,1.588-3.547,3.547-3.547h19.724c1.958,0,3.547,1.588,3.547,3.547V100.56z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#DBDDDD" }}
                        d="M207.341,153.554c0,1.958-1.588,3.547-3.547,3.547h-19.724c-1.958,0-3.547-1.588-3.547-3.547V133.83 c0-1.958,1.588-3.547,3.547-3.547h19.724c1.958,0,3.547,1.588,3.547,3.547V153.554z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#DBDDDD" }}
                        d="M207.341,206.548c0,1.957-1.588,3.545-3.547,3.545h-19.724c-1.958,0-3.547-1.588-3.547-3.545 v-19.725c0-1.958,1.588-3.547,3.547-3.547h19.724c1.958,0,3.547,1.588,3.547,3.547V206.548z"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#A8E2EF" }}
                        d="M331.475,98.992h-96.21c-4.581,0-8.294-3.714-8.294-8.294c0-4.581,3.714-8.294,8.294-8.294h96.21 c4.581,0,8.294,3.714,8.294,8.294C339.769,95.278,336.055,98.992,331.475,98.992z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#A8E2EF" }}
                        d="M331.475,151.986h-96.21c-4.581,0-8.294-3.714-8.294-8.294c0-4.58,3.714-8.294,8.294-8.294h96.21 c4.581,0,8.294,3.714,8.294,8.294C339.769,148.272,336.055,151.986,331.475,151.986z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#A8E2EF" }}
                        d="M331.475,204.979h-96.21c-4.581,0-8.294-3.714-8.294-8.294s3.714-8.294,8.294-8.294h96.21 c4.581,0,8.294,3.714,8.294,8.294S336.055,204.979,331.475,204.979z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Electronics
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                 {products.filter((product:Product)=> product.category == "electronics").length}
                </span>
              </CategoryButton>
            </li>
            <li>
              <CategoryButton
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </CategoryButton>
            </li>
            <li>
              <CategoryButton
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </CategoryButton>
            </li>
          </ul>
        </div>
      </aside>

      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
