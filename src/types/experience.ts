export interface Project {
  name: string;
  image: string;
  techStack: string[];
  roles: string[];
  deliverables: string[];
  date: string;
  description: string[];
}

export interface ExperienceRecord {
  title: string;
  company: string;
  date: string;
  logo: string;
  previewWork: string;
  summary: string;
  projects: Project[];
}

export type ExperiencesDataMap = Record<string, ExperienceRecord>;
