export interface Technologies {
  core: string[];
  libraries?: string[];
  tools?: string[];
}

export interface ProjectRepository {
  frontend?: string;
  backend?: string;
}

export interface ProjectType {
  id: number;
  image: string;
  name: string;
  webSite: string;
  description?: string;
  projectRepository: string | ProjectRepository;
  technologies: {
    frontend: Technologies;
    backend?: Technologies;
  };
}
