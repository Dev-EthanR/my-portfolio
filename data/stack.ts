type StackBase = {
  title: string;
  arsenal: "frontend" | "backend" | "tools";
  aboutOnly?: boolean;
};

export type Stack =
  | (StackBase & { src: string })
  | (StackBase & { aboutOnly: true });

export const stack: Stack[] = [
  // frontend
  { title: "HTML", src: "/badges/html.png", arsenal: "frontend" },
  { title: "CSS", src: "/badges/css.png", arsenal: "frontend" },
  { title: "JavaScript", src: "/badges/javascript.webp", arsenal: "frontend" },
  { title: "TypeScript", src: "/badges/typescript.png", arsenal: "frontend" },
  { title: "React", src: "/badges/react.svg", arsenal: "frontend" },
  { title: "Next.js", src: "/badges/nextjs.webp", arsenal: "frontend" },
  { title: "TailwindCSS", src: "/badges/tailwindcss.png", arsenal: "frontend" },
  { title: "SASS", src: "/badges/sass.png", arsenal: "frontend" },
  { title: "Bootstrap", src: "/badges/bootstrap.png", arsenal: "frontend" },

  // backend
  { title: "Node.js", src: "/badges/nodejs.png", arsenal: "backend" },
  { title: "Express.js", src: "/badges/express.png", arsenal: "backend" },
  { title: "PostgreSQL", src: "/badges/postgresql.png", arsenal: "backend" },
  { title: "SQL Server", src: "/badges/sqlserver.webp", arsenal: "backend" },
  { title: "Prisma", src: "/badges/prisma.jpg", arsenal: "backend" },
  { title: "C#", src: "/badges/csharp.avif", arsenal: "backend" },
  { title: "Python", src: "/badges/python.png", arsenal: "backend" },
  { title: "Socket.io", arsenal: "backend", aboutOnly: true },

  // tools
  { title: "Git", src: "/badges/git.svg", arsenal: "tools" },
  { title: "Vercel", src: "/badges/vercel.svg", arsenal: "tools" },
  { title: "Vitest", src: "/badges/vitest.webp", arsenal: "tools" },
  { title: "Stripe", arsenal: "tools", aboutOnly: true },
  { title: "OpenAI API", arsenal: "tools", aboutOnly: true },
  { title: "Zod", arsenal: "tools", aboutOnly: true },
  { title: "Tanstack Query", arsenal: "tools", aboutOnly: true },
  { title: "Next Auth", arsenal: "tools", aboutOnly: true },
];
