export enum Page {
  HOME = 'home',
  MATERI = 'materi',
  KALKULATOR = 'kalkulator',
  KUIS = 'kuis',
  AI_ASSISTANT = 'ai_assistant',
  TENTANG = 'tentang'
}

export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}