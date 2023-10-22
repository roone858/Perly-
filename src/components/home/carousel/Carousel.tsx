import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Link from "next/link";
const Carousel = () => {
  return (
    <div>
      <div className={`${styles.carousel } carousel w-full`}>
        <div
          id="slide1"
          className={`${styles.slideContainer} carousel-item relative w-full flex items-center justify-center `}
        >
          <Image
            src="/slider-01.webp"
            className="w-full object-cover"
            fill
            alt="..."
          />
          <div className="absolute flex justify-center items-center flex-col text-center text-text-color pt-7">
            <h1 className="font-playfair  text-7xl font-bold m-2  mt-4 capitalize ">Winter <br /> Big Sale 2019</h1>
            <p className="mt-[30px] text-[16px] font-rubik capitalize">
              Discover the collection as styled by fashion in our new season
              campaign.
            </p>
            <Link href={"/product"} className="transition-all uppercase outline outline-2 max-w-fit text-center font-rubik py-5 px-10 mt-[90px] text-[13px] font-bold text-text-color hover:bg-text-color hover:text-white " >Shop Now</Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1"  className={` ${styles.slideBtn} btn btn-circle  bg-white border-white shadow`} >

              ❮
            </a>
            <a href="#slide2"  className={` ${styles.slideBtn} btn btn-circle  bg-white border-white shadow`}>

              ❯
            </a>
          </div>
        </div>
        <div id="slide2"   className={`${styles.slideContainer} carousel-item relative w-full flex items-center justify-center `}>
          <Image src="/slider-02.webp" className="w-full object-cover" fill alt="..." />
          <div className="absolute flex justify-center items-center flex-col text-center text-text-color pt-7">
            <h1 className="font-playfair  text-7xl font-bold m-2  mt-4 capitalize ">Winter <br />  men{"'"}s jacket</h1>
            <p className="mt-[30px] text-[16px] font-rubik capitalize">
              Discover the collection as styled by fashion in our new season
              campaign.
            </p>
            <Link href={"/product"} className="transition-all uppercase outline outline-2 max-w-fit text-center font-rubik py-5 px-10 mt-[90px] text-[13px] font-bold text-text-color hover:bg-text-color hover:text-white " >Shop Now</Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1"  className={` ${styles.slideBtn} btn btn-circle  bg-white border-white shadow`} >
              ❮
            </a>
            <a href="#slide2"  className={` ${styles.slideBtn} btn btn-circle  bg-white border-white shadow`}>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
