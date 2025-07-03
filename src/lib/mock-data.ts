import type { Department, Announcement, AdminTask } from "@/lib/types";

export const mockDepartments: Department[] = [
  { id: '1', name: 'School of Computing & Informatics', headOfDepartment: 'Prof. Wanjiku Mwangi', status: 'Active', facultyCode: 101, budgetUtilization: 75 },
  { id: '2', name: 'Faculty of Business & Economics', headOfDepartment: 'Dr. David Ochieng', status: 'Active', facultyCode: 205, budgetUtilization: 60 },
  { id: '3', name: 'School of Engineering & Technology', headOfDepartment: 'Eng. Fatuma Ali', status: 'Review', facultyCode: 310, budgetUtilization: 95 },
  { id: '4', name: 'Institute of Health Sciences', headOfDepartment: 'Dr. Amina Hussein', status: 'Active', facultyCode: 402, budgetUtilization: 82 },
  { id: '5', name: 'Centre for Arts & Social Sciences', headOfDepartment: 'Dr. John Okello', status: 'On-Hold', facultyCode: 509, budgetUtilization: 45 },
];

export const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'HELB Application Deadline', content: 'The deadline for the Higher Education Loans Board applications is this Friday. Inform students to apply.', date: '3 days ago', author: 'Finance Office' },
  { id: '2', title: 'KUCCPS 2024 Intake', content: 'The Kenya Universities and Colleges Central Placement Service has released the official 2024 student placement lists.', date: '1 week ago', author: 'Admissions Office' },
];

export const mockAdminTasks: AdminTask[] = [
    { id: '1', title: 'Review FY2024 Budget Submissions', department: 'All Departments', dueDate: 'Tomorrow', requiresAction: false },
    { id: '2', title: 'Approve New Staff Onboarding', department: 'Human Resources', dueDate: '3 days', requiresAction: false },
    { id: '3', title: 'Resolve Student Hostel Wifi Outage', department: 'IT Services', dueDate: 'Yesterday', requiresAction: true },
];
