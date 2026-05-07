import Badge from "./Badge";
import stack from "@/stack.json";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-4 justify-center max-w-3xl">
        {stack.map((tech) => (
          <Badge key={tech.title} title={tech.title} imageSrc={tech.src} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
