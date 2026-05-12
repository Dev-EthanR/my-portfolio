"use client";
import { Image as ImageType } from "@/app/entities/project";
import DisableBodyScroll from "@/app/hooks/DisableBodyScroll";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

interface Props {
  images: ImageType[];
  onClose: () => void;
  imageSelected: number;
}

const RATIOS: Record<ImageType["type"], string> = {
  desktop: "aspect-video",
  mobile: "aspect-[9/16]",
  card: "aspect-[4/3]",
  feature: "aspect-[3/2]",
};

const MAX_W: Record<ImageType["type"], string> = {
  desktop: "max-w-4xl",
  mobile: "max-w-xs",
  card: "max-w-xl",
  feature: "max-w-2xl",
};

const Carousel = ({ images, onClose, imageSelected }: Props) => {
  const [index, setIndex] = useState(imageSelected);
  DisableBodyScroll(true);

  const current = images[index];

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center gap-3 p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-340 mx-auto px-4 flex flex-col gap-3 h-full justify-between py-4">
        <div className="flex justify-end" onClick={(e) => e.stopPropagation()}>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/80  transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            <FaXmark size={24} className="invert" />
          </button>
        </div>

        <div
          className="flex items-center justify-between gap-4 flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/70 transition-colors"
            onClick={prev}
            aria-label="Previous image"
          >
            <FaChevronLeft size={14} className="invert" />
          </button>

          <div className="flex-1 flex justify-center items-center h-full">
            <div
              className={clsx(
                "relative w-full",
                MAX_W[current.type],
                RATIOS[current.type],
              )}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>

          <button
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/70  transition-colors"
            onClick={next}
            aria-label="Next image"
          >
            <FaChevronRight size={14} className="invert" />
          </button>
        </div>

        <p
          className="text-white/50 text-sm text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {current.alt}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
