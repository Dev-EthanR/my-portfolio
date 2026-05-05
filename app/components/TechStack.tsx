import Badge from "./Badge";
import stack from "@/stack.json";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">My Tech Stack</h2>
      <div className="flex gap-5 flex-wrap justify-center">
        {stack.map((tech) => (
          <Badge key={tech.title} title={tech.title} imageSrc={tech.src} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
