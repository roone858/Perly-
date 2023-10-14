import schema from "@/app/api/users/schema";
import { Delete, getAll, getOne, add } from "@/model/user.model";
import { User } from "@/types/typeStore";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const getAllUsers = async (req: NextRequest) => {
  try {
    const users = await getAll();
    return NextResponse.json(users, { status: 200 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const getUserByUsername = async (
  req: NextRequest,
  { params }: { params: { username: string } }
) => {
  try {
    const user = await getOne(params.username);
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};
export const getUserByEmail = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    const user = await getOne(params.email);
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const addNewUser = async (req: NextRequest) => {
  try {
    const body: User = await req.json();
    const validation = schema.safeParse(body);
    if (validation.success) {
      const user = await add(body);
      return NextResponse.json(user, { status: 201 });
    } else throw new Error("Incoming Data not valid!");
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};

export const deleteUser = async (req: NextRequest) => {
  try {
    const body: User = await req.json();
    const deleteUser = await Delete(body.email);
    if (deleteUser) {
      return NextResponse.json({ message: "deleted" }, { status: 200 });
    }
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify([{ message: "Something went wrong!" }, { status: 500 }])
    );
  }
};
