import stack from "@/stack.json";
const sections = [
  { key: "frontend" },
  { key: "backend" },
  { key: "tools" },
] as const;

const TechArsenal = () => {
  const arsenal = sections.map((section) => ({
    title: section.key,
    items: stack.filter((tech) => tech.arsenal === section.key),
  }));
  return (
    <div className="w-full max-w-230">
      <h2 className="text-3xl font-medium mb-4">Technical Stack</h2>
      <div className="grid md:grid-cols-3 gap-4 w-full">
        {arsenal.map((section) => (
          <ul
            key={section.title}
            className="border-border border p-4 rounded-sm bg-blue-950/10 "
          >
            <h3 className="uppercase tracking-tighter text-primary mb-1.5">
              {section.title}
            </h3>

            {section.items.map((tech) => (
              <li
                key={tech.title}
                className="list-disc ml-4 lg:text-base md:text-sm"
              >
                {tech.title}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TechArsenal;
