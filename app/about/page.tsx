import TechArsenal from "./components/TechArsenal";

const page = () => {
  return (
    <div className="flex flex-col items-start mx-4 relative ">
      <p className="text-sm font-medium border-l-2 pl-2 border-primary text-primary-bright w-fit mb-4 uppercase tracking-wider">
        About Me
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Builder, Problem Solver
        <span className="text-primary-bright block text-6xl md:text-6xl">
          Full Stack
        </span>
      </h1>

      <p className="text-lg font-light text-[#e0bfb5] max-w-210 mb-6">
        Ethan Rechichi is a designer-engineer hybrid focused on building digital
        tools that bridge the gap between complex technical architecture and
        intuitive user experience. Based in the intersection of logic and
        aesthetics, he treats code like raw ore—refining it into high-
        performance applications.
      </p>
      <p className="text-lg font-light text-[#e0bfb5] max-w-210 mb-6">
        With a background in both architectural visualization and software
        engineering, Ethan approaches every project with a &quot;measure twice,
        cut once&quot; philosophy. He specializes in creating scalable systems
        that don&apos;t just work, but feel effortless to use.
      </p>
      <TechArsenal />
    </div>
  );
};

export default page;
