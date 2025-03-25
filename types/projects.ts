export type StackCategory = {
  core: string[];
  libraries?: string[];
  tools?: string[];
  utilities?: string[];
  security?: string[];
  cloud?: string[];
};

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
    frontend: StackCategory;
    backend?: StackCategory;
  };
}
