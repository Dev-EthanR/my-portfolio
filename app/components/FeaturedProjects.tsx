import ProjectCard from "./ProjectCard";
import Link from "next/link";
import jsonData from "@/projects.json";

const FeaturedProjects = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
      <p className="text-sm font-light text-gray-300 mb-4">
        Some of my recent work:
      </p>
      <div className="grid grid-cols-1 w-fit gap-6 mb-10 ">
        {/*md:grid-cols-3*/}
        {jsonData.slice(0, 3).map((data) => (
          <ProjectCard
            key={data.id}
            imageSrc={data.image}
            title={data.title}
            href={`/projects/${data.slug}`}
          />
        ))}
      </div>
      <Link
        href="/projects"
        className="bg-surface p-4 border-gray-500 border hover:bg-elevated transition-colors duration-200"
      >
        View All Projects
      </Link>
    </div>
  );
};

export default FeaturedProjects;
