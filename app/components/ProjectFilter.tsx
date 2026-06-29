"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Project } from "../entities/project";
import Button from "./Button";

interface Props {
  data: Project[];
}

const ProjectFilter = ({ data }: Props) => {
  const techOverview: Pick<Project, "displayTechnologies"> = {
    displayTechnologies: Array.from(
      new Set([
        "All",
        ...data.flatMap((project) => project.displayTechnologies),
      ]),
    ),
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <div className="max-w-[calc(100vw-32px)] flex overflow-x-auto mb-4 pr-4">
      {techOverview.displayTechnologies.map((tech) => (
        <Button
          key={tech}
          className="inline-block px-3 lg:px-6 py-1 mb-4 rounded-full text-xs lg:text-sm font-medium mr-2  cursor-pointer transition-colors whitespace-nowrap"
          variant={
            !searchParams.get("tech") && tech === "All"
              ? "primary"
              : searchParams.get("tech") === tech.toLowerCase()
                ? "primary"
                : "outline"
          }
          onClick={() => {
            if (tech === "All") return router.push("/projects");
            router.push(`/projects?tech=${tech.toLowerCase()}`);
          }}
        >
          {tech}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;
