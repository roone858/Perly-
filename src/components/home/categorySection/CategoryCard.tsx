import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import styles from "./category.module.css"

const CategoryCard = () => {
  return (
     <Link
     href={"products"}
     className={`${styles.card} col-span-4 text-center border-b-2 hover:border-sub-text transition-all duration-500  flex flex-col gap-4 pb-4 `}
   >
     <div className="aspect-square w-full relative overflow-hidden">
       <Image
         className="object-cover hover:scale-110 transition-all duration-500 "
         src={"/test-product.jpg"}
         alt="product"
         fill
       />
     </div>
     <h4 className="text-text-color text-[24px]  font-bold ">
       Men Collection
     </h4>
     <div
       className={`${styles.shopNow} text-[14px] font-bold duration-500 transition-all flex items-center justify-center`}
     >
       SHOP NOW
       <span className="duration-500 transition-all text-red-color">
         <svg
           className="inline-block duration-500 transition-all relative"
           width="24px"
           height="24px"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
           <g
             id="SVGRepo_tracerCarrier"
             strokeLinecap="round"
             strokeLinejoin="round"
           ></g>
           <g id="SVGRepo_iconCarrier">
             {" "}
             <path
               d="M6 12H18M18 12L13 7M18 12L13 17"
               stroke="#000000"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>{" "}
           </g>
         </svg>
       </span>
     </div>
   </Link>
  )
}

export default CategoryCard