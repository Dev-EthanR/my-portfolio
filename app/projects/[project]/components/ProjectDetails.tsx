import { Project } from "@/app/entities/project";
import Image from "next/image";
import Features from "./ProjectDetails/Features";
import FutureImprovements from "./ProjectDetails/FutureImprovements";
import Gallery from "./ProjectDetails/Gallery";
import Links from "./ProjectDetails/Links";
import Technologies from "./ProjectDetails/technologies";

interface Props {
  data: Project;
}
const ProjectDetails = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 mb-6">
      <h1 className="text-4xl md:text-5xl font-bold ">{data.title}</h1>
      <h2 className="text-md md:text-xl font-medium  mb-3 max-w-170 text-center">
        {data.description}
      </h2>
      <Image
        src={data.image}
        width={500}
        height={100}
        alt=""
        className="mb-5"
      />
      <Technologies data={data} />
      <div className="flex gap-4 flex-col md:flex-row mx-3">
        <Features data={data} />
        <FutureImprovements data={data} />
      </div>
      <Gallery data={data} />
      <Links data={data} />
    </div>
  );
};

export default ProjectDetails;
