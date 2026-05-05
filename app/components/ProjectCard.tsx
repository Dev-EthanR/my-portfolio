"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "../entities/project";
import Badge from "@/app/projects/[project]/components/Badge";

interface Props {
  details: Project;
  href: string;
}

const ProjectCard = ({ details, href }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className="border-b-primary-dark border-primary-dark border hover:scale-105 transition-transform duration-300 cursor-pointer lg:w-80 xl:w-95 2xl:w-112.5 flex flex-col h-full"
    >
      <Image
        className="w-full h-60 object-cover lg:h-40 xl:h-50 2xl:h-60 select-none"
        src={details.image}
        alt={details.title}
        width={450}
        height={400}
      />

      <div className="bg-surface p-3 lg:p-6 grow mb-auto flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {details.displayTechnologies.map((tech) => (
              <Badge key={tech} name={tech} />
            ))}
          </div>

          <h3 className="font-bold uppercase mb-2 md:text-lg lg:text-xl 2xl:text-2xl tracking-wide">
            {details.title}
          </h3>

          <p className="text-sm text-[#E0BFB5] mb-4">{details.description}</p>
        </div>
        <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
          <Link
            href={details.live}
            target="_blank"
            className="bg-primary px-4 py-1.5 text-black font-semibold hover:bg-primary-glow"
          >
            🔗 Live
          </Link>

          <Link
            href={details.github}
            target="_blank"
            className="px-4 py-1.5 text-text-primary font-light flex items-center gap-2 border-primary-dark border hover:bg-primary-glow transition-colors"
          >
            <span>{"<>"}</span>
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
