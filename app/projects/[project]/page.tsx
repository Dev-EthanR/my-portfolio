import React from "react";
import jsonData from "@/projects.json";
import ProjectDetails from "./components/ProjectDetails";

const page = async ({ params }: { params: { project: string } }) => {
  const { project } = await params;
  const data = jsonData.find((data) => data.slug === project);

  if (!data) return;

  return (
    <div>
      <ProjectDetails data={data} />
    </div>
  );
};

export default page;
