"use client";
import { Project } from "@/app/entities/project";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import GalleryHover from "./GalleryHover";
import Carousel from "./Carousel";

interface Props {
  data: Project;
}
const Gallery = ({ data }: Props) => {
  const [isHovered, setIsHovered] = useState("");
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setOpenLightbox(true);
    setCurrentImage(index);
  };

  return (
    <>
      <div>
        <h3 className="text-xl md:text-3xl font-medium mb-5 uppercase">
          Gallery
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {data.gallery.map((image, index) => (
            <button
              key={image.src}
              className={clsx(
                "relative w-full h-full overflow-hidden cursor-pointer",
                image.type === "desktop" && "col-span-2",
                image.type === "mobile" && "row-span-2",
                image.type === "card" && "row-span-2",
                image.type === "feature" && "row-span-2 col-span-2",
              )}
              onMouseEnter={() => setIsHovered(image.src)}
              onMouseLeave={() => setIsHovered("")}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={clsx("object-cover object-top")}
              />
              {isHovered === image.src && (
                <GalleryHover description={image.alt} />
              )}
            </button>
          ))}
        </div>
      </div>
      {openLightbox && (
        <Carousel
          images={data.gallery}
          onClose={() => setOpenLightbox(false)}
          imageSelected={currentImage}
        />
      )}
    </>
  );
};

export default Gallery;
