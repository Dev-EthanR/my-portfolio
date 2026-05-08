import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}
const FutureImprovements = ({ data }: Props) => {
  if (data.futureImprovements.length === 0) return null;
  return (
    <ul>
      <h3 className="text-xl md:text-3xl font-medium mb-5">
        Future Improvements:
      </h3>
      <div className="flex flex-wrap gap-4">
        {data.futureImprovements.map((improvement, index) => (
          <li
            key={improvement.title}
            className="max-w-90 text-sm md:text-base border p-5 border-border bg-blue-950/10 rounded-sm"
          >
            <div className="text-primary-bright uppercase">
              {(index + 1).toString().padStart(2, "0")} - {improvement.title}
            </div>
            <p className="text-white/55">{improvement.description}</p>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default FutureImprovements;
