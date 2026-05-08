import { Project } from "@/app/entities/project";
import Image from "next/image";
import Features from "./ProjectDetails/Features";
import FutureImprovements from "./ProjectDetails/FutureImprovements";
import Gallery from "./ProjectDetails/Gallery";
import Links from "./ProjectDetails/Links";
import Technologies from "./ProjectDetails/technologies";
import Link from "next/link";

interface Props {
  data: Project;
}
const ProjectDetails = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-6 mb-6">
      <div className="md:flex justify-between items-end">
        <div className="space-y-6">
          <div className="uppercase mb-4 text-sm md:text-base tracking-wide">
            <Link
              href="/projects"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Projects {">"}{" "}
            </Link>
            <span className="text-primary-bright">{data.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-wide">
            {data.title}
          </h1>
          <Technologies data={data} />
        </div>
        <div className="min-w-70">
          <Links data={data} />
        </div>
      </div>
      <Image
        src={data.thumbnail.src}
        width={1600}
        height={400}
        alt={data.thumbnail.alt}
        className="mb-5 mx-auto border border-border rounded-lg"
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="order-1 md:order-2 border-b border-primary pb-3 lg:col-span-2">
          <h2 className="text-md md:text-3xl uppercase font-medium mb-3 ">
            The Concept
          </h2>
          <p className="text-sm font-light mb-3 max-w-170 text-white/55">
            {data.description}
          </p>
        </div>

        <div className="order-2 md:order-1 md:row-span-2">
          <Features data={data} />
        </div>

        <div className="order-3 lg:col-span-2">
          <FutureImprovements data={data} />
        </div>
      </div>
      <Gallery data={data} />
    </div>
  );
};

export default ProjectDetails;
