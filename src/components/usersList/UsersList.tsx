import React, { FC } from "react";
import Card from "../card/UserCard";
import styles from "./usersList.module.css";
import { User } from "@/types/typeStore";

interface Props {
  users: User[];
}
const UsersList: FC<Props> = ({ users }) => {
  return (
    <div className={styles.usersContainer}>
      {users.map((user: User) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
