import { Project } from "@/app/entities/project";
import Badge from "../Badge";

interface Props {
  data: Project;
}

const Technologies = ({ data }: Props) => {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {data.technologies.map((tech) => (
        <Badge key={tech} name={tech} />
      ))}
    </div>
  );
};

export default Technologies;
