import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div>
      <div className="new-collection py-20 ">
        <div className="grid grid-cols-6 gap-6  ">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <CategoryCard
              category={{
                image: "/test-product-women.jpg",
                title: "Women Collection ",
              }}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <CategoryCard
              category={{
                image: "/test-product-men.jpg",
                title: "Men Collection ",
              }}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <CategoryCard
           category={{
            image: "/test-product-girl.jpg",
            title: "Girl Collection ",
          }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
