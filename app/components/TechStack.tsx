import Badge from "./Badge";
import stack from "@/stack.json";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center space-y-12 w-full ">
        {stack.map((tech) => (
          <Badge key={tech.title} title={tech.title} imageSrc={tech.src} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
