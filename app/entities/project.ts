interface ProjectFeature {
  title: string;
  description: string;
}

interface ProjectImprovement {
  title: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
  type: "desktop" | "mobile" | "card" | "feature";
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
