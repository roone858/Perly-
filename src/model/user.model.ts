import { User } from "@/types/typeStore";
import prisma from "@/utils/prisma";

export const getAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const add = async (user: any) => {
  const newUser = await prisma.user.create({
    data: user,
  });
  return newUser;
};

export const getOne = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return user;
  } catch (err: any) {
    console.log(err.message);
    throw new Error(err.message);
  }
};


export const Delete = async (email: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      email: email,
    },
  });
  return deleteUser;
};

