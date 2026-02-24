import React from "react";

interface Props {
  name: string;
}

const Badge = ({ name }: Props) => {
  return (
    <div className="bg-surface w-fit px-3 py-0.5 rounded-md font-medium">
      {name}
    </div>
  );
};

export default Badge;
