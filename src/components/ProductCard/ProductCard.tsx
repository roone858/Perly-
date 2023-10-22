import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";
import { Product } from "@/types/typeStore";
import OutlineStar from "../stars/OutlineStar";
import OptionsIcons from "../optionsIcons/OptionsIcons";
const ProductCard = ({ product }: { product: Product }) => {
  return (
    // <div className="flex flex-col items-center justify-between text-center max-w-xs">
    <div
    className={`${styles.card} transition-all duration-500  gap-4 pb-4 `}
  >
    <div className="aspect-square w-full relative overflow-hidden">
      <Image
        className="object-cover "
        src={"/test-product.jpg"}
        alt="product"
        fill
      />
      <div className="absolute flex items-center justify-center w-full h-full text-black">
        <div
          className={`${styles.optionsIcons} shadow bg-white p-4 py-2`}
        >
          <OptionsIcons />
        </div>
      </div>
    </div>
    <div className="text-text-color font-bold flex items-center justify-between pt-[20px] mb-[10px] ">
      <div>
        <span className="text-[16px] text-[#929292]  line-through mr-[6px]">
          $102.47
        </span>
        <span className="text-[16px] text-[#ee3333]">$75.14</span>
      </div>
      <div className="flex items-center justify-end">
        <OutlineStar />
        <OutlineStar />
        <OutlineStar />
        <OutlineStar />
        <OutlineStar />
      </div>
    </div>
    <div className={` text-[14px]   text-black `}>
      6. Variable With Soldout Product
    </div>
  </div>
    // </div>
  );
};

export default ProductCard;
