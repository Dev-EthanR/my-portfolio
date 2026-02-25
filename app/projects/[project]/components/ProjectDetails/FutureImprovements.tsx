import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}
const FutureImprovements = ({ data }: Props) => {
  return (
    <ul>
      <h3 className="text-xl font-medium mb-2 ">Future Improvments:</h3>
      {data.futureImprovements.map((future) => (
        <li key={future} className="list-disc max-w-90">
          {future}
        </li>
      ))}
    </ul>
  );
};

export default FutureImprovements;
