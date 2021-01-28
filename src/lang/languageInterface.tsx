export interface Menu {
  hello: string;
  Iam: string;
  name: string;
  about: string;
  works: string;
  contact: string;
}

export interface AboutContent {
  header: string;
  about: string;
  content: string[];
}

export interface WorksContent {
  projects: WorksProject[];
}

export interface WorksProject {
  id: string;
  projectTitle: string;
  projectDescription: string;
  link: string;
  content: string[];
}

export interface ContactContent {
  header: string;
  contact: string;
  content: string[];
}
