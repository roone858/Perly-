import { Delete, getAll, getOne, add } from "@/model/product.model";
import { Product } from "@/types/typeStore";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const getAllProducts = async (req: NextRequest) => {
  try {

    const products = await getAll();
    return  NextResponse.json(products, { status: 200 });
    
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const getOneProduct = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const product = await getOne(params.productId);
    return NextResponse.json(product, { status: 201 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const addNewProduct = async (req: NextRequest) => {
  try {
    const body: Product = await req.json();
    // const validation = schema.safeParse(body);
    // if (validation.success) {
    const product = await add(body);
    return NextResponse.json(product, { status: 201 });
    // } else throw new Error("Incoming Data not valid!");
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const deleteProduct = async (req: NextRequest) => {
  try {
    const body: Product = await req.json();
    const deleteProduct = await Delete(body.id);
    if (deleteProduct) {
      return NextResponse.json({ message: "deleted" }, { status: 200 });
    }
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};
