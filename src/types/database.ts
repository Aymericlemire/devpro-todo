export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  features: string[];
  project_url: string | null;
  stats: Record<string, string>;
  created_at: string;
  updated_at: string;
}