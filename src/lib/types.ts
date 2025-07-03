
export interface User {
  name: string;
  id: string;
  avatarUrl?: string;
}

export interface Department {
  id: string;
  name: string;
  headOfDepartment: string;
  status: string;
  facultyCode: number;
  budgetUtilization: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface AdminTask {
  id: string;
  title: string;
  department: string;
  dueDate: string;
  requiresAction: boolean;
}
