import React from "react";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="post">
      <div className="imageContainer w-full aspect-[16/11] relative mb-[22px]">
        <Image
          src={"/post-01.webp"}
          className="object-cover"
          alt="post-01"
          fill
        />
      </div>
      <div className="text">
        <span className="font-rubik text-[#928989CC] text-[12px] mb-[7px]">
          Wed, Mar 13,19
        </span>
        <h5 className="text-[#292929]">3 Ways My Style Has Evolved</h5>
        <span className="font-rubik text-red-color text-[12px] mb-[15px]  ">
          Mahmoud Gamal Admin
        </span>
        <p className="text-[#707070]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eius
          iste fugiat reprehenderit ratione fuga iusto distinctio deserunt illo
          libero...
        </p>
      </div>
    </div>
  );
};

export default PostCard;
