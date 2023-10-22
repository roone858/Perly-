import Carousel from "@/components/carousel/Carousel";

import { FC } from "react";

import CategorySection from "@/components/categorySection/CategorySection";

import Image from "next/image";
import LatestSection from "@/components/latestSection/LatestSection";
import Banners from "@/components/banners/Banners";
import ProductCard from "@/components/ProductCard/ProductCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import FeaturesSection from "@/components/featuresSection/FeaturesSection";
import PostCard from "@/components/postCard/PostCard";

const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="px-5 md:px-20 lg:px-10">
        <CategorySection />
        <LatestSection />
        <Banners />
        <FeaturesSection />
        <div className="my-11">
          <SectionHeader
            title="Latest Blog"
            description="Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
          />
          <div className="grid grid-cols-6 gap-7">
            <div className=" col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
            <div className=" col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
            <div className=" col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
