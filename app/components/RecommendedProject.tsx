import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const RecommendedProject = () => {
  const data = projects[0];
  return (
    <div className="hidden lg:flex flex-col items-center">
      <div className=" mb-10 max-w-150 max-h-150">
        <span>
          <ProjectCard details={data} href={`/projects/${data.slug}`} />
        </span>
      </div>
    </div>
  );
};

export default RecommendedProject;
