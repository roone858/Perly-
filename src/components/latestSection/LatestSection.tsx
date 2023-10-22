import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types/typeStore";
import SectionHeader from "../sectionHeader/SectionHeader";
const product: Product = {
  id: "5",
  title: "Product One",
  description: "lorem lorem lorem lorem lorem lorem lorem",
  price: 99,
  category: "5",
  image: "",
  ProductOrder: [],
  rating: { rate: 2, count: 150 },
};
const LatestSection = () => {
  return (
    <div className="latest-products ">
     <SectionHeader
            title={"Latest Products"}
            description="    Mirum est notare quam littera gothica, quam nunc putamus parum claram
        anteposuerit litterarum formas."
          />
      <div className="grid grid-cols-12 overflow-hidden  gap-5   ">
        <div className={`  col-span-12    md:col-span-4 lg:col-span-3 `}>
          <ProductCard product={product} />
        </div>
        <div className={`hidden  sm:block col-span-12   md:col-span-4 lg:col-span-3 `}>
          <ProductCard product={product} />
        </div>
        <div className={`hidden md:block  col-span-12    md:col-span-4 lg:col-span-3`}>
          <ProductCard product={product} />
        </div>
        <div className={`hidden  lg:block  col-span-12    md:col-span-4 lg:col-span-3 `}>
          <ProductCard product={product} />
        </div>
       
      </div>
    </div>
  );
};

export default LatestSection;
