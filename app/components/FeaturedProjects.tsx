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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-6 mb-10 ">
        {jsonData.slice(0, 3).map((data, index) => (
          <span
            key={data.id}
            className={
              index === 2
                ? "md:col-span-2 place-items-center lg:col-span-1"
                : ""
            }
          >
            <ProjectCard details={data} href={`/projects/${data.slug}`} />
          </span>
        ))}
      </div>
      <Link
        href="/projects"
        className="bg-surface p-4 border-accent border hover:bg-accent transition-colors duration-200"
      >
        View All Projects
      </Link>
    </div>
  );
};

export default FeaturedProjects;
