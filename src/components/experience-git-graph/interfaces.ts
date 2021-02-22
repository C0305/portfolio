export interface IExperienceGitGraph {
  experienceHistory: {
    startDate: string;
    endDate: string;
    company: string;
    brief: string;
    achievements: string[];
    type: string;
  }[]
  openOrClose?: boolean;
}

export enum EStoryType {
  employee = 'employee',
  independent = 'independent',
  side = 'side'
}