import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./category.module.css";
import CategoryCard from "./categoryCard";
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
