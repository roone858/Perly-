import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./home.module.css";
import CategorySection from "@/components/categorySection/CategorySection";
const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <CategorySection />
    </div>
  );
};
export default Home;
