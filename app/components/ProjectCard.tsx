"use client";

import Badge from "@/app/projects/[project]/components/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "../entities/project";
import Button from "./Button";

interface Props {
  details: Project;
  href: string;
}

const ProjectCard = ({ details, href }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="border-b-primary-dark border-primary-dark border hover:scale-105 transition-transform duration-300 cursor-pointer w-full flex flex-col h-full text-left"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          className="object-cover select-none"
          src={details.thumbnail.src}
          alt={details.thumbnail.alt}
          quality={100}
          fill
        />
      </div>

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

          <p className="text-sm text-[#E0BFB5] mb-4">{details.concept}</p>
        </div>
        <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
          <Button
            variant="primary"
            href={details.live}
            target="_blank"
            className="font-semibold "
          >
            <span className="select-none">🔗</span> Live
          </Button>
          <Button
            variant="outline"
            href={details.github}
            target="_blank"
            className="font-light flex items-center gap-1"
          >
            <Image
              src="/logos/github.png"
              alt="Github"
              width={25}
              height={25}
              className="invert select-none"
            />
            Source Code
          </Button>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
