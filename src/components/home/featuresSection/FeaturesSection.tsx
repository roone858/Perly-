import React from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ProductCard from "../../ProductCard/ProductCard";

const FeaturesSection = () => {
  return (
    <div >
      <SectionHeader
        title={"Features Products"}
        description="    Mirum est notare quam littera gothica, quam nunc putamus parum claram
        anteposuerit litterarum formas."
      />
      <div className="btn-group flex items-center justify-center">
        <button className="transition-all duration-300 focus:bg-text-color focus:text-white bg-[#f1f1f1] text-[#555555] max-w-fit text-center font-rubik py-2 px-5 mx-3  text-[13px] hover:bg-text-color hover:text-white ">
          Men
        </button>
        <button className="transition-all duration-300 focus:bg-text-color focus:text-white bg-[#f1f1f1] text-[#555555] max-w-fit text-center font-rubik py-2 px-5 mx-3  text-[13px] hover:bg-text-color hover:text-white ">
          Shop
        </button>
        <button className="transition-all duration-300 focus:bg-text-color focus:text-white bg-[#f1f1f1] text-[#555555] max-w-fit text-center font-rubik py-2 px-5 mx-3  text-[13px] hover:bg-text-color hover:text-white ">
          Women
        </button>
      </div>
      <div className="grid grid-cols-12 gap-8 my-12">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => (
          <div
            key={item}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            {" "}
            <ProductCard product={{}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
