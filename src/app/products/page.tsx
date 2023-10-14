import ProductsList from "@/components/productsList/ProductsList";
import React from "react";
import SortProduct from "@/components/sortProducts/SortProduct";
import { filterArray } from "@/utils/sortFunctions";
import { Metadata } from "next";
import Sidebar from "@/components/sidebar/Sidebar";

interface Props {
  params: any;
  searchParams: { sort: string; category: string };
}

export const metadata: Metadata = {
  title: "Products",
  description: "List all users",
};

const page = async ({ searchParams }: Props) => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  const products = await res.json();

  const { sort, category } = searchParams;

  return (
    <div>
      <Sidebar products={products} />
      <div className="sm:ml-64">
        <SortProduct />
        <ProductsList products={filterArray(products, sort, category)} />
      </div>
    </div>
  );
};
// post man get data without issues

export default page;
