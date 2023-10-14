import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css";
import { Product } from "@/types/typeStore";
const ProductCard = ({ product }: { product: Product }) => {
  return (
    // <div className="flex flex-col items-center justify-between text-center max-w-xs">
    <div className="p-4 max-w-[18rem] bg-white rounded-lg overflow-hidden  border relative border-gray-200 flex flex-col justify-between shadow">
      <div>
        <div
          className="relative text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.imageContainer}>
            <Image
              className="w-full text-center"
              src={product.image}
              fill
              alt="Product Image"
            />
          </div>
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>

        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
      {product?.description.length> 176 ? product.description.slice(0,173)+"...":product.description}
        </p>
      </div>
      <div className="flex items-center justify-between relative  bottom-0 mt-auto">
        <span className="font-bold text-lg">{product.price}$</span>
        <Link href={"/products/"+product.id} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
