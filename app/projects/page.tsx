import jsonData from "@/projects.json";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="w-fit">
      <h1 className="text-5xl font-bold mb-6">Projects:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {jsonData.map((data) => (
          <ProjectCard
            key={data.id}
            imageSrc={data.image}
            title={data.title}
            href={`/projects/${data.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
