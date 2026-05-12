import Badge from "./Badge";
import { stack } from "@/data/stack";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">Tech Stack</h2>

      <div className="flex flex-wrap gap-4 justify-center max-w-3xl">
        {stack.map((tech) => (
          <Badge key={tech.title} title={tech.title} imageSrc={tech.src} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
