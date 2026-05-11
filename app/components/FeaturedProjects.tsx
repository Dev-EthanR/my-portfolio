"use client";
import jsonData from "@/data/projects.json";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import { useIsMobile } from "../hooks/useIsMobile";

const FeaturedProjects = () => {
  const isMobile = useIsMobile(1024);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-6 mb-10 ">
        {jsonData.slice(isMobile ? 0 : 1, 3).map((data, index) => (
          <span
            key={data.id}
            className={index === 2 ? "md:col-span-2 max-w-md mx-auto" : ""}
          >
            <ProjectCard details={data} href={`/projects/${data.slug}`} />
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        href="/projects"
        className="font-light  rounded-sm"
        size="large"
      >
        View All Projects
      </Button>
    </div>
  );
};

export default FeaturedProjects;
