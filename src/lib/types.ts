
export interface ExamOption {
  id: string;
  text: string;
}

export interface ExamQuestion {
  id: string;
  text: string;
  topic: string;
  options: ExamOption[];
  correctAnswerId: string;
}

export interface Exam {
  title: string;
  timeLimit: number; // in seconds
  questions: ExamQuestion[];
}

export type Answers = Record<string, string>; // { [questionId]: answerId }

export interface ExamResult {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  strengths: string[];
  weaknesses: string[];
  answers: Answers;
}
