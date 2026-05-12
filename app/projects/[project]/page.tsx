import { projects } from "@/data/projects";
import ProjectDetails from "./components/ProjectDetails";

const page = async ({ params }: { params: { project: string } }) => {
  const { project } = await params;
  const data = projects.find((data) => data.slug === project);

  if (!data) return;

  return (
    <div>
      <ProjectDetails data={data} />
    </div>
  );
};

export default page;
