import React from "react";

interface Props {
  name: string;
}

const Badge = ({ name }: Props) => {
  return (
    <div className="bg-surface  px-3 py-0.5 rounded-xl font-medium border-gray-500 border w-fit">
      {name}
    </div>
  );
};

export default Badge;
