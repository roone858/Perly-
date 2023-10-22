
import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div>
      <div className="new-collection py-20 ">
        <div className="grid grid-cols-12 gap-10 ">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
