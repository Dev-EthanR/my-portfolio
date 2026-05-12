interface ProjectFeature {
  title: string;
  description: string;
}

interface ProjectImprovement {
  title: string;
  description: string;
}

type Size = "desktop" | "mobile" | "card" | "feature";
interface Image {
  src: string;
  alt: string;
  type: Size;
}
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  concept: string;
  displayTechnologies: string[];
  technologies: string[];
  features: ProjectFeature[];
  futureImprovements: ProjectImprovement[];
  thumbnail: Omit<Image, "type">;
  gallery: Image[];
  live: string;
  github: string;
}
