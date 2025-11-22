export interface NavLink {
  id: string;
  label: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface Tech {
  name: string;
  icon: string;
  category: string;
  level: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
  status: string;
  github?: string;
  demo?: string;
  background?: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
}
