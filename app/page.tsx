import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import RecommendedProject from "./components/RecommendedProject";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between lg:mb-8 ">
        <Hero />
        <RecommendedProject />
      </div>
      <TechStack />
      <FeaturedProjects />
    </div>
  );
}
