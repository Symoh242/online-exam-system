import type { Course, Announcement, Assignment } from "@/lib/types";

export const mockCourses: Course[] = [
  { id: '1', name: 'Quantum Computing', teacher: 'Dr. Evelyn Reed', grade: 'A-', period: 1, progress: 92 },
  { id: '2', name: 'Artificial Intelligence', teacher: 'Prof. Anya Sharma', grade: 'B+', period: 2, progress: 88 },
  { id: '3', name: 'Biotechnology & Ethics', teacher: 'Dr. Kenji Tanaka', grade: 'A', period: 4, progress: 95 },
  { id: '4', name: 'Astrophysics', teacher: 'Dr. Lena Petrova', grade: 'A-', period: 5, progress: 91 },
  { id: '5', name: 'Robotics Engineering', teacher: 'Mr. Omar Abdullah', grade: 'B', period: 6, progress: 85 },
];

export const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'Annual Tech & Science Fair', content: 'Submissions for the annual fair are due next Friday. Showcase your innovative projects!', date: '2 days ago', author: 'Science Dept.' },
  { id: '2', title: 'Guest Lecture: AI in Healthcare', content: 'Join us for a special guest lecture this Wednesday in the main auditorium.', date: '4 days ago', author: 'Main Office' },
];

export const mockAssignments: Assignment[] = [
    { id: '1', title: 'Quantum Gate Simulation', course: 'Quantum Computing', dueDate: 'Tomorrow', isOverdue: false },
    { id: '2', title: 'Build a Neural Network', course: 'Artificial Intelligence', dueDate: '3 days', isOverdue: false },
    { id: '3', title: 'CRISPR Case Study', course: 'Biotechnology & Ethics', dueDate: '1 day ago', isOverdue: true },
];
