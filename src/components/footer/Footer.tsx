import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="header px-5 md:px-20 lg:px-20 my-20 flex justify-center items-center flex-col  py-[100px]  border-t-2 border-gray-200 text-center">
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
            className="flex-shrink-0 font-rubik text-[12px] border-transparent border-4 text-[#292929] duration-300 hover:text-red-color  py-1  rounded font-semibold text-center px-10"
            type="button"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="footer grid grid-cols-12 gap-20 bg-[#f6f6f6] px-5 md:px-20 lg:px-20 py-24">
        <div className=" col-span-8 md:col-span-4 lg:col-span-6 mt-7 relative">
          <Image className="absolute -top-20" src={"/logo.webp"} width={150} height={150} alt="logo"/>
          <p className="text-[#707070]" >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis.
          </p>
          <div>
            <h4 className="text-[#292929] my-6 text-[18px] font-playfair">Follow Us</h4>
            <div className="icons flex  ">
              <div className="p-5 rounded-[50%] w-3 h-3 bg-[#ebebeb] text-[#292929] flex items-center justify-center mr-2 hover:text-red-color">
                <i className="fa-brands fa-facebook-f "></i>
              </div>
              <div className="p-5 rounded-[50%] w-3 h-3 bg-[#ebebeb] text-[#292929] flex items-center justify-center mr-2 hover:text-red-color">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="p-5 rounded-[50%] w-3 h-3 bg-[#ebebeb] text-[#292929] flex items-center justify-center mr-2 hover:text-red-color">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="p-5 rounded-[50%] w-3 h-3 bg-[#ebebeb] text-[#292929] flex items-center justify-center mr-2 hover:text-red-color">
                <i className="fa-brands fa-google"></i>
              </div>
              <div className="p-5 rounded-[50%] w-3 h-3 bg-[#ebebeb] text-[#292929] flex items-center justify-center mr-2 hover:text-red-color">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 lg:col-span-2 relative">
          <h4 className="font-playfair text-[#292929] text-[18px] mb-8">Information</h4>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">About Us</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Contact Us</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">FAQ</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">The Shop</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">The Blog</span>
        </div>
        <div className="col-span-8 md:col-span-4 lg:col-span-2 relative">
          <h4 className="font-playfair text-[#292929] text-[18px] mb-8">Our Company</h4>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Delivery</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">About Us</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Stores</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Contact us</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Sitemap</span>
        </div>
        <div className="col-span-8 md:col-span-4 lg:col-span-2 relative">
          <h4 className="font-playfair text-[#292929] text-[18px] mb-8">Your Account</h4>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Addresses</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Credit slips</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Orders</span>
          <span className="text-[#929292] font-rubik text-[14px] py-2 hover:text-red-color hover:translate-x-1 duration-300">Personal info</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
