import {
  addNewUser,
  deleteUser,
  getAllUsers,
} from "@/controller/user.controller";

export const GET = getAllUsers;

export const POST = addNewUser;

export const DELETE = deleteUser;
