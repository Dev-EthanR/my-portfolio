import React from "react";
import Badge from "./Badge";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">My Tech Stack</h2>
      <div className="grid grid-cols-5 gap-5">
        <Badge title="JavaScript" imageSrc="/badges/javascript.webp" />
        <Badge title="JavaScript" imageSrc="/badges/javascript.webp" />
      </div>
    </div>
  );
};

export default TechStack;
