import Carousel from "@/components/home/carousel/Carousel";

import { FC } from "react";
import CategorySection from "@/components/home/categorySection/CategorySection";
import LatestSection from "@/components/home/latestSection/LatestSection";
import Banners from "@/components/home/banners/Banners";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import FeaturesSection from "@/components/home/featuresSection/FeaturesSection";
import PostCard from "@/components/postCard/PostCard";

const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="px-5 md:px-20 lg:px-20">
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
            <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
