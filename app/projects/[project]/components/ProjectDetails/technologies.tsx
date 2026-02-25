import { Project } from "@/app/entities/project";
import Badge from "../Badge";

interface Props {
  data: Project;
}

const Technologies = ({ data }: Props) => {
  return (
    <>
      <h3 className="text-left text-xl font-medium">Tech Stack:</h3>
      <div className="flex gap-2 flex-wrap mb-4">
        {data.techologies.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
