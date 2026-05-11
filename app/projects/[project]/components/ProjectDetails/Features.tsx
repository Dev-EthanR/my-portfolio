import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}

const Features = ({ data }: Props) => {
  return (
    <ul className="bg-blue-950/10 border-border border rounded-sm p-6">
      <h3 className="text-xl md:text-3xl font-medium  uppercase border-b border-primary pb-4 mb-6">
        Core Features
      </h3>
      {data.features.map((feature) => (
        <li
          key={feature.title}
          className=" max-w-90  text-sm md:text-base flex gap-4 mb-4"
        >
          <div className="border-l-2 border-l-primary pl-4">
            <h4 className="font-medium text-xl">{feature.title}</h4>
            <p className="text-sm text-white/60">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Features;
