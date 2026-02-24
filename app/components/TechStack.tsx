import React from "react";
import Badge from "./Badge";

const TechStack = () => {
  const stack = [
    { title: "JavaScript", src: "/badges/javascript.webp" },
    { title: "TypeScript", src: "/badges/typescript.png" },
    { title: "React", src: "/badges/react.svg" },
    { title: "Next.js", src: "/badges/nextjs.webp" },
    { title: "HTML", src: "/badges/html.png" },
    { title: "CSS", src: "/badges/css.png" },
    { title: "Tailwind", src: "/badges/tailwind.png" },
    { title: "SASS", src: "/badges/sass.png" },
    { title: "Bootstrap", src: "/badges/bootstrap.png" },
    { title: "Prisma", src: "/badges/prisma.jpg" },
    { title: "Git", src: "/badges/git.svg" },
    { title: "Vercel", src: "/badges/vercel.svg" },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">My Tech Stack</h2>
      <div className="grid grid-cols-5 gap-5">
        {stack.map((tech) => (
          <Badge key={tech.title} title={tech.title} imageSrc={tech.src} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
