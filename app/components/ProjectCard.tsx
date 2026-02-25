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
      className="border-b-accent border-gray-400 border hover:scale-105 transition-transform duration-300 cursor-pointer w-112.5"
    >
      <Image src={details.image} alt={details.title} width={450} height={400} />
      <div className="bg-surface py-3 px-6">
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
