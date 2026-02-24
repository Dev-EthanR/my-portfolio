import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <FeaturedProjects />
      <TechStack />
    </div>
  );
}
