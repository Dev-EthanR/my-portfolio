import jsonData from "@/projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";

const page = async ({ searchParams }: { searchParams: { tech?: string } }) => {
  const params = await searchParams;
  const filteredData = params.tech
    ? jsonData.filter((project) =>
        project.displayTechnologies
          .map((tech) => tech.toLowerCase())
          .includes(params.tech!.toLowerCase()),
      )
    : jsonData;
  return (
    <div className="w-fit mx-auto ">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 text-primary  tracking-wider">
        Projects
      </h1>
      <ProjectFilter data={jsonData} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {filteredData.map((data) => (
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
