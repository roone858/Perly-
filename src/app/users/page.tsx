import UsersList from "@/components/usersList/UsersList";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "users",
  description: "List all users",
};

const Users = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "force-cache",
  });
  const users = await res.json();

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};
export default Users;
// post man get data without issues
