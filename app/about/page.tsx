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
        I am a full stack developer based in Melbourne, Australia. I build
        complete web applications from the ground up, designing the database
        schema, building the API, wiring up authentication, and shipping a
        responsive frontend that actually works.
      </p>
      <p className="text-sm lg:text-lg text-[#e0bfb5] max-w-210 mb-12">
        I started in electrical, moved into IT, and taught myself web
        development through building real projects. That path gave me a
        practical mindset. I care about things working correctly, not just
        looking right. Right now I&apos;m working as a Software Developer at
        Interpack while building a portfolio of full-stack applications to
        transition fully into web development.
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
