import jsonData from "@/projects.json";
import ProjectCard from "./ProjectCard";

const RecommendedProject = () => {
  const data = jsonData[0];
  return (
    <div className="hidden lg:flex flex-col items-center">
      <div className=" mb-10 ">
        <span key={data.id}>
          <ProjectCard details={data} href={`/projects/${data.slug}`} />
        </span>
      </div>
    </div>
  );
};

export default RecommendedProject;
