"use client";
import Image from "next/image";
import { Project } from "@/app/entities/project";
import { useState } from "react";
import Carousel from "./Carousel";

interface Props {
  data: Project;
}
const Gallery = ({ data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setModalOpen(true);
    setCurrentImage(index);
  };

  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Gallery:</h3>
      <div className="grid grid-cols-2 gap-2">
        {data.gallery.map((image, index) => (
          <button onClick={() => handleImageClick(index)} key={image}>
            <Image
              className="size-35 md:size-50 object-cover cursor-pointer"
              src={image}
              width={500}
              height={500}
              alt=""
            />
          </button>
        ))}
      </div>

      {modalOpen && (
        <Carousel
          images={data.gallery}
          onClose={() => setModalOpen(false)}
          imageSelected={currentImage}
        />
      )}
    </div>
  );
};

export default Gallery;
