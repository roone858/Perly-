import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
     <div className="px-5 md:px-20 lg:px-20 my-20">
      <div className="header flex justify-center items-center flex-col  py-[100px]  border-t-2 border-gray-200 text-center">
        <p className="text-[#707070] font-rubik mb-[10px] text-[14px]">
          Special Ofers For Subscribers
        </p>
        <h4 className="text-[#292929] font-playfair mb-[30px] text-[30px] font-bold">
          {" "}
          Ten Percent Member Discount
        </h4>
        <p className="text-[#707070] font-rubik text-[14px]  mb-10">
          Mirum Est Notare Quam Littera Gothica, Quam Nunc Putamus Parum Claram
          Anteposuerit Litterarum Formas.
        </p>
        <div className="flex items-center border-2 border-gray-200 py-2 pl-5 min-w-fit sm:min-w-[500px] md:min-w-[600px] ">
          <input
            className="appearance-none bg-transparent border-r-2 border-gray-300 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Ex : mahmoudg.dev@gmail.com"
            aria-label="Full name"
          />
        
          <button
            className="flex-shrink-0 font-rubik text-[12px] border-transparent border-4 text-[#292929] hover:text-red-color  py-1  rounded font-semibold text-center px-10"
            type="button"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
