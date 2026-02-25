import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}

const Features = ({ data }: Props) => {
  return (
    <ul>
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
