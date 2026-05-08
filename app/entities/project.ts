interface ProjectFeature {
  title: string;
  description: string;
}

interface ProjectImprovement {
  title: string;
  description: string;
}

interface Image {
  src: string;
  alt: string;
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
  thumbnail: Image;
  gallery: Image[];
  live: string;
  github: string;
}
