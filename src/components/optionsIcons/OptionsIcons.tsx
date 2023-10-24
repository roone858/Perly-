import React from "react";
import styles from "./optionsIcons.module.css"
const OptionsIcons = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="cart">
        <svg
          className={styles.icon}
          width="32px"
          height="32px"
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
      <div className="view">
        <svg
             className={styles.icon}
          width="32px"
          height="32px"
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
            <path
              d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default OptionsIcons;
