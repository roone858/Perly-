import {
     addNewProduct,
     deleteProduct,
     getAllProducts,
   } from "@/controller/product.controller";
   
   export const GET = getAllProducts;
   
   export const POST = addNewProduct;
   
   export const DELETE = deleteProduct;
   