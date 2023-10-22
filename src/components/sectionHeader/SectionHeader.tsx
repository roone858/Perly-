import React from "react";

const SectionHeader = ({ title, description }: any) => {
  return (
    <div className="header text-center mb-[40px]">
      <h2 className="text-[#292929] text-[30px] mb-[30px] font-bold font-playfair">
        {title}
      </h2>
      <p className="text-[#555555] text-[14px]  mb-[10px] font-rubik">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
