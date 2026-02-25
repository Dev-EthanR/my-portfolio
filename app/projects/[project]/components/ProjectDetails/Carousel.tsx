"use client";
import { Project } from "@/app/entities/project";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  images: Project["gallery"];
  onClose: () => void;
  imageSelected: number;
}

const Carousel = ({ images, onClose, imageSelected }: Props) => {
  const [index, setIndex] = useState(imageSelected);

  function prevImage() {
    const currentIndex = index;
    const maximumIndex = images.length - 1;

    if (currentIndex === 0) return setIndex(maximumIndex);
    return setIndex(currentIndex - 1);
  }
  function nextImage() {
    const currentIndex = index;
    const maximumIndex = images.length - 1;

    if (currentIndex === maximumIndex) return setIndex(0);
    return setIndex(currentIndex + 1);
  }

  return (
    <>
      <DisableBodyScroll />
      <div className="w-full h-screen bg-black/60 fixed top-0 left-0 overflow-hidden flex flex-col items-end">
        <button
          className="w-40 h-40 flex items-start justify-end p-8 cursor-pointer hover:scale-105 duration-300 ease-in-out"
          onClick={onClose}
        >
          <Image alt="close" src="/close.webp" width={50} height={40} />
        </button>

        <div className="relative w-full ">
          <div className="relative w-80 h-120 md:w-170 md:h-210 lg:w-90 lg:h-70 2xl:w-160 2xl:h-220 rounded-base mx-auto">
            <div className="duration-700 ease-in-out">
              <Image
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
                src={images[index]}
                width={900}
                height={0}
              />
            </div>
            <button
              type="button"
              className="absolute top-0 -left-8.5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
              onClick={prevImage}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-gray-700 group-hover:bg-gray-500 rounded-full">
                <span>L</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 -right-8.5  z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextImage}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-gray-700 group-hover:bg-gray-500 rounded-full">
                <span>R</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

const DisableBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return null;
};
