import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import { FC } from "react";
import styles from "./page.module.css";
import CategorySection from "@/components/categorySection/CategorySection";
import OutlineStar from "@/components/stars/OutlineStar";
import OptionsIcons from "@/components/optionsIcons/OptionsIcons";
const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <CategorySection />
      <div className="latest-products px-20 ">
        <div className="header text-center mb-[40px]">
          <h2 className="text-[#292929] text-[30px] mb-[30px] font-bold font-playfair">
            Latest Products
          </h2>
          <p className="text-[#555555] text-[14px]  mb-[10px] font-rubik">
          Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 ">
          <div
            className={`${styles.card} col-span-3  transition-all duration-500  gap-4 pb-4 `}
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
          <div
            className={`${styles.card} col-span-3  transition-all duration-500  gap-4 pb-4 `}
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
          <div
            className={`${styles.card} col-span-3  transition-all duration-500  gap-4 pb-4 `}
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
          <div
            className={`${styles.card} col-span-3  transition-all duration-500  gap-4 pb-4 `}
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
        </div>
      </div>
    </div>
  );
};
export default Home;
