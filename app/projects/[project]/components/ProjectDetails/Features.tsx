import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}

const Features = ({ data }: Props) => {
  return (
    <ul className="border-r py border-accent pl-8 mr-3">
      <h3 className="text-xl font-medium mb-2">Features:</h3>
      {data.features.map((feature) => (
        <li key={feature} className="list-disc max-w-90">
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default Features;
