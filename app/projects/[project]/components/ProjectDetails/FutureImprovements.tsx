import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}
const FutureImprovements = ({ data }: Props) => {
  if (data.futureImprovements.length === 0) return null;
  return (
    <ul className="border-t md:border-l md:border-t-0 border-accent pt-3 md:pl-8">
      <h3 className="text-xl font-medium mb-2 ">Future Improvments:</h3>
      {data.futureImprovements.map((future) => (
        <li key={future} className="list-disc max-w-90 text-sm md:text-base">
          {future}
        </li>
      ))}
    </ul>
  );
};

export default FutureImprovements;
