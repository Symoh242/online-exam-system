
export interface User {
  name: string;
  id: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  name: string;
  teacher: string;
  grade: string;
  period: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  isOverdue: boolean;
}
