import ProductCard from "@/components/ProductCard/ProductCard";
import React, { FC } from "react";
import styles from "./productDetails.module.css";
import ProductPage from "@/components/productPage/ProductPage";
interface Props {
  params: { productId: string };
}
const page: FC<Props> = async ({ params }) => {
  const { productId } = params;
  const res = await fetch("http://localhost:3000/api/products/" + productId, {
    cache: "no-cache",
  });
  const product = await res.json();
  if(!product.title) return <div>Product not found</div>

  return <ProductPage product={product} />;
};

export default page;
