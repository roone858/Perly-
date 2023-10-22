import React from "react";
import Image from "next/image";
const Banners = () => {
  return (
    <div className="banners flex flex-col  sm:flex-row gap-10 h-96 sm:h-36  md:h-36 lg:h-64 relative  my-20">
      <div className="imageContainer overflow-hidden  flex-1 relative">
        <Image
          src="/banner-01.webp"
          className="hover:scale-110 transition-all duration-500"
          fill
          alt="banner-01"
        />
      </div>{" "}
      <div className="imageContainer overflow-hidden flex-1 relative">
        <Image
          src="/banner-02.webp "
          className=" hover:scale-110 transition-all duration-500"
          fill
          alt="banner-01"
        />
      </div>
    </div>
  );
};

export default Banners;
