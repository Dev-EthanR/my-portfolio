import Image from "next/image";
import Link from "next/link";
import { Project } from "../entities/project";
import Badge from "@/app/projects/[project]/components/Badge";

interface Props {
  details: Project;
  href: string;
}

const ProjectCard = ({ details, href }: Props) => {
  return (
    <Link
      href={href}
      className="border-b-accent border-gray-400 border hover:scale-105 transition-transform duration-300 cursor-pointer w-80  lg:w-80 xl:w-95 2xl:w-112.5 flex flex-col h-full"
    >
      <Image
        className="w-full h-60 max-h-90 object-cover lg:h-40 xl:h-50 2xl:h-60"
        src={details.image}
        alt={details.title}
        width={450}
        height={400}
      />
      <div className="bg-surface py-3 px-3  grow mb-auto">
        <h3 className="font-medium mb-2">{details.title}</h3>
        <div className="flex flex-wrap gap-2">
          {details.techologies.map((tech) => (
            <Badge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
