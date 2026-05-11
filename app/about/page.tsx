import Button from "../components/Button";
import Journey from "./components/Journey";
import TechArsenal from "./components/TechArsenal";

const page = () => {
  return (
    <div className="flex flex-col items-start mx-4 relative ">
      <p className="text-sm font-medium border-l-2 pl-2 border-primary text-primary-bright w-fit mb-4 uppercase tracking-wider">
        About Me
      </p>
      <h1 className="text-2xl md:text-5xl font-semibold mb-8">
        Builder, Problem Solver
        <span className="text-primary-bright block text-4xl md:text-6xl">
          Full Stack
        </span>
      </h1>

      <p className="text-sm lg:text-lg font-light text-[#e0bfb5] max-w-210 mb-6">
        Ethan Rechichi is a designer-engineer hybrid focused on building digital
        tools that bridge the gap between complex technical architecture and
        intuitive user experience. Based in the intersection of logic and
        aesthetics, he treats code like raw ore—refining it into high-
        performance applications.
      </p>
      <p className="text-sm lg:text-lg text-[#e0bfb5] max-w-210 mb-12">
        With a background in both architectural visualization and software
        engineering, Ethan approaches every project with a &quot;measure twice,
        cut once&quot; philosophy. He specializes in creating scalable systems
        that don&apos;t just work, but feel effortless to use.
      </p>
      <TechArsenal />
      <Journey />
      <div className="my-12 flex items-center gap-3">
        <p className="text-2xl">Want to work together?</p>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
            fill="#E8E1DF"
          />
        </svg>
        <Button
          variant="primary"
          href="/contact"
          className="uppercase text-white font-medium"
          size="large"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default page;
