"use client";
import { Project } from "@/app/entities/project";
import Image from "next/image";

interface Props {
  data: Project;
}
const Gallery = ({ data }: Props) => {
  const layouts = [
    "md:col-span-2 md:row-span-2", // hero desktop
    "md:col-span-1 md:row-span-1", // small landscape
    "md:col-span-1 md:row-span-3", // small landscape
    "md:col-span-1 md:row-span-2", // mobile portrait
    "md:col-span-1 md:row-span-1", // auth screen
  ];
  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Gallery</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
        {data.gallery.map((image, index) => (
          <div
            key={image.src}
            className={`
        relative
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        group
        ${layouts[index % layouts.length]}
      `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="
          object-cover
          transition-all
          duration-500
          group-hover:scale-105
        "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
