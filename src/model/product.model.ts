import { Product } from "@/types/typeStore";
import prisma from "@/utils/prisma";

export const getAll = async () => {
console.log("hit api")
  const products = await prisma.product.findMany();
  
  return products;
};

export const add = async (product: any) => {
  const newProduct = await prisma.product.create({
    data: product,
  });
  return newProduct;
};

export const getOne = async (productId: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
   
    return product;
  } catch (err: any) {
    console.log(err.message);
    throw new Error(err.message);
  }
};


export const Delete = async (id: string) => {
  const deleteProduct = await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return deleteProduct;
};

