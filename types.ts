export enum ContentType {
  LESSON = 'LESSON',
  EXERCISE = 'EXERCISE'
}

export type Difficulty = 'green' | 'orange' | 'red';

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  promptContext: string; // Specific instruction for Gemini to generate this topic
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface GeneratedContent {
  markdown: string;
  loading: boolean;
  error?: string;
}