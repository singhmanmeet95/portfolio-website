export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Next.js / Frontend' | 'Backend & Systems';
  year: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  architectureDetails: {
    frontend?: string;
    backend?: string;
    database?: string;
    security?: string;
    performance?: string;
  };
  sampleCodeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    iconUrl?: string;
    tag?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  badges: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string[];
  festType: string;
}

export interface CodingProfile {
  platform: 'LeetCode' | 'GitHub';
  username: string;
  url: string;
  peakRating?: number | string;
  ratingTier?: string;
  stats: { label: string; value: string | number }[];
  highlight: string;
}
