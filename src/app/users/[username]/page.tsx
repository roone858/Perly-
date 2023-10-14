import Card from "@/components/card/UserCard";
import React, { FC } from "react";
import styles from "./userDetails.module.css";
import ProfilePage from "@/components/profilePage/ProfilePage";

import { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { username: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const username = params.username
  const user = await fetch("http://localhost:3000/api/users/" + username).then((res) => res.json())
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: user.name,
  
  }
}
 

const page: FC<Props> = async ({ params }) => {
  const { username } = params;
  const res = await fetch(
    "http://localhost:3000/api/users/" + username
  ,{ cache: "force-cache",});
  const user = await res.json();

  return (
    <div className={styles.userDetailsContainer}>
    <ProfilePage user={user}/>
    </div>
  );
};

export default page;
