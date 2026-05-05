import jsonData from "@/projects.json";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="w-fit mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 text-primary  tracking-wider">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {jsonData.map((data) => (
          <ProjectCard
            key={data.id}
            details={data}
            href={`/projects/${data.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
