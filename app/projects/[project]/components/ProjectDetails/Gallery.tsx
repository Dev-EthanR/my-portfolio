import Image from "next/image";
import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}
const Gallery = ({ data }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Gallery:</h3>
      <div className="grid grid-cols-2">
        {data.gallery.map((image) => (
          <Image key={image} src={image} width={400} height={100} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
