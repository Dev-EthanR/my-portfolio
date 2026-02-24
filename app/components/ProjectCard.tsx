import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  href: string;
}

const ProjectCard = ({ imageSrc, title, href }: Props) => {
  return (
    <Link
      href={href}
      className="border-b-accent border-gray-400 border hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <Image src={imageSrc} alt={title} width={450} height={400} />
      <div className="bg-surface p-2 px-6">
        <h3 className="font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
