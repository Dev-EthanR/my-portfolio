import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  techologies: string[];
  features: string[];
  futureImprovements: string[];
  image: string;
  gallery: string[];
  live: string;
  github: string;
}

interface Props {
  data: Project;
}
const ProjectDetails = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 mb-6">
      <h1 className="text-5xl font-bold ">{data.title}</h1>
      <h2 className="text-xl font-medium  mb-3 max-w-170 text-center">
        {data.description}
      </h2>
      <Image
        src={data.image}
        width={500}
        height={100}
        alt=""
        className="mb-5"
      />
      <h3 className="text-left text-xl font-medium">Tech Stack:</h3>
      <div className="flex gap-2 flex-wrap mb-4">
        {data.techologies.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>
      <div className="flex gap-4">
        <ul className="border-r py border-accent pl-8 mr-3">
          <h3 className="text-xl font-medium mb-2">Features:</h3>
          {data.features.map((feature) => (
            <li key={feature} className="list-disc max-w-90">
              {feature}
            </li>
          ))}
        </ul>
        <ul>
          <h3 className="text-xl font-medium mb-2 ">Future Improvments:</h3>
          {data.futureImprovements.map((future) => (
            <li key={future} className="list-disc max-w-90">
              {future}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">Gallery:</h3>
        <div className="grid grid-cols-2">
          {data.gallery.map((image) => (
            <Image key={image} src={image} width={400} height={100} alt="" />
          ))}
        </div>
      </div>
      <div className="flex gap-7">
        <Link
          href={data.live}
          target="_blank"
          className="bg-primary px-4 py-1.5 "
        >
          🔗 Live Demo
        </Link>
        <Link
          href={data.github}
          target="_blank"
          className="bg-primary px-4 py-1.5 flex items-center gap-2"
        >
          <Image src="/logos/github.png" alt="Github" width={25} height={25} />
          Source Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
