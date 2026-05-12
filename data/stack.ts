interface Stack {
  title: string;
  src: string;
  arsenal: "frontend" | "backend" | "tools";
}

export const stack: Stack[] = [
  { title: "HTML", src: "/badges/html.png", arsenal: "frontend" },
  { title: "CSS", src: "/badges/css.png", arsenal: "frontend" },
  { title: "JavaScript", src: "/badges/javascript.webp", arsenal: "frontend" },
  { title: "TypeScript", src: "/badges/typescript.png", arsenal: "frontend" },
  { title: "React", src: "/badges/react.svg", arsenal: "frontend" },
  { title: "Next.js", src: "/badges/nextjs.webp", arsenal: "frontend" },
  { title: "Node.js", src: "/badges/nodejs.png", arsenal: "backend" },
  { title: "SASS", src: "/badges/sass.png", arsenal: "frontend" },
  { title: "Bootstrap", src: "/badges/bootstrap.png", arsenal: "frontend" },
  { title: "TailwindCSS", src: "/badges/tailwindcss.png", arsenal: "frontend" },
  { title: "Prisma", src: "/badges/prisma.jpg", arsenal: "backend" },
  { title: "Git", src: "/badges/git.svg", arsenal: "tools" },
  { title: "Vercel", src: "/badges/vercel.svg", arsenal: "tools" },
  { title: "C#", src: "/badges/csharp.avif", arsenal: "backend" },
  { title: "Python", src: "/badges/python.png", arsenal: "backend" },
];
