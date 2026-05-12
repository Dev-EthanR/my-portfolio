import { MdOutlineZoomIn } from "react-icons/md";

interface Props {
  description: string;
}

const GalleryHover = ({ description }: Props) => {
  return (
    <div className="absolute bottom-0 left-0 bg-linear-to-b from-transparent to-background w-full text-xs h-40 flex items-end p-4">
      <div className="flex items-center gap-3">
        <MdOutlineZoomIn className="size-4" />
        {description}
      </div>
    </div>
  );
};

export default GalleryHover;
