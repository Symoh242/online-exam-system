import type { Course, Announcement, Assignment } from "@/lib/types";

export const mockCourses: Course[] = [
  { id: '1', name: 'Advanced Calculus', teacher: 'Mrs. Davis', grade: 'A-', period: 1, progress: 92 },
  { id: '2', name: 'AP Physics', teacher: 'Mr. Smith', grade: 'B+', period: 2, progress: 88 },
  { id: '3', name: 'Modern World History', teacher: 'Mr. Jones', grade: 'A', period: 4, progress: 95 },
  { id: '4', name: 'English Literature', teacher: 'Ms. Williams', grade: 'A-', period: 5, progress: 91 },
  { id: '5', name: 'Studio Art', teacher: 'Mr. Garcia', grade: 'B', period: 6, progress: 85 },
];

export const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'Spirit Week Next Week!', content: 'Get ready for a week of fun-filled activities and dress-up days.', date: '2 days ago', author: 'Principal Miller' },
  { id: '2', title: 'Parent-Teacher Conferences', content: 'Sign-ups are now open for parent-teacher conferences on Nov 15th.', date: '4 days ago', author: 'Main Office' },
];

export const mockAssignments: Assignment[] = [
    { id: '1', title: 'Chapter 5 Problem Set', course: 'AP Physics', dueDate: 'Tomorrow', isOverdue: false },
    { id: '2', title: 'The Great Gatsby Essay', course: 'English Literature', dueDate: '3 days', isOverdue: false },
    { id: '3', title: 'Historical Analysis Paper', course: 'Modern World History', dueDate: '1 day ago', isOverdue: true },
];
