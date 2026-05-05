import jsonData from "@/projects.json";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="w-fit mx-auto">
      <h1 className="text-xs md:text-sm font-medium mb-2 text-primary uppercase tracking-wide">
        All Projects
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white  tracking-wider">
        What I&apos;ve Built
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
