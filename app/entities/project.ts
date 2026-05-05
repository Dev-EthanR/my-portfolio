export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  displayTechnologies: string[];
  technologies: string[];
  features: string[];
  futureImprovements: string[];
  image: string;
  gallery: string[];
  live: string;
  github: string;
}
