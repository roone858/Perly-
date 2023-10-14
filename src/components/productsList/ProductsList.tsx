import React, { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productList.module.css";
import { Product } from "@/types/typeStore";

interface Props {
  products: Product[];
}
const ProductsList: FC<Props> = ({ products }) => {
  
  return (
    <div className={styles.productContainer}>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
