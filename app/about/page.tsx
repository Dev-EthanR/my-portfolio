import TechStack from "../components/TechStack";

const page = () => {
  return (
    <div className="flex flex-col mt-9 w-full items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Hi, I'm Ethan Rechichi
      </h1>

      <p className="font-extralight text-[15px] md:text-xl text-left leading-8 w-full md:max-w-170 mb-10 md:mb-20">
        I'm a full-stack developer based in{" "}
        <span className="font-semibold"> Melbourne, Australia</span> building
        web applications with <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">TypeScript</span> and{" "}
        <span className="font-semibold">TailwindCSS</span>.
      </p>
      <div className="border-b-accent border-b w-full mb-8 md:mb-14" />
      <TechStack />
    </div>
  );
};

export default page;
