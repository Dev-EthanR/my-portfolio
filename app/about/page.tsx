import TechStack from "../components/TechStack";

const page = () => {
  return (
    <div className="flex flex-col items-center mt-9">
      <h1 className="text-5xl font-bold mb-6">Hi, I'm Ethan Rechichi</h1>
      <p className="font-extralight text-xl text-left leading-8 max-w-170 mb-20">
        I'm a 21 year old full-stack developer based in{" "}
        <span className="font-semibold">Melbourne, Australia</span> building web
        applications with <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">TypeScript</span> and{" "}
        <span className="font-semibold">TailwindCSS</span>.
      </p>
      <div className="border-b-accent border-b w-full mb-14" />
      <TechStack />
    </div>
  );
};

export default page;
