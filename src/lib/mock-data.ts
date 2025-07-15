
export const lecturers = [
  {
    id: 'lec001',
    name: 'Dr. Judith Mwikali',
    email: 'a.doe@university.ac.ke',
    department: 'Computer Science',
    status: 'Active',
  },
  {
    id: 'lec002',
    name: 'Prof. Dorcas Moraa',
    email: 'j.smith@university.ac.ke',
    department: 'Business Administration',
    status: 'Active',
  },
  {
    id: 'lec003',
    name: 'Dr. Arkan Issak,
    email: 's.wilson@university.ac.ke',
    department: 'Electrical Engineering',
    status: 'On Leave',
  },
  {
    id: 'lec004',
    name: 'Dr.Khalid Ibrahim',
    email: 'c.lee@university.ac.ke',
    department: 'Computer Science',
    status: 'Active',
  },
];

export const programs = [
    {
        id: 'prog01',
        name: 'BSc. Computer Science',
        department: 'Computer Science',
        duration: 4,
        status: 'Active'
    },
    {
        id: 'prog02',
        name: 'Bachelor of Commerce',
        department: 'Business Administration',
        duration: 4,
        status: 'Active'
    },
    {
        id: 'prog03',
        name: 'BSc. Electrical Engineering',
        department: 'Electrical Engineering',
        duration: 5,
        status: 'Active'
    },
    {
        id: 'prog04',
        name: 'Diploma in IT',
        department: 'Computer Science',
        duration: 2,
        status: 'Archived'
    }
]

export const semesters = [
    {
        id: 'sem01',
        name: '2025 January-April',
        startDate: '2024-09-01',
        endDate: '2024-12-20',
        status: 'Completed'
    },
    {
        id: 'sem02',
        name: '2025 May-August',
        startDate: '2025-01-05',
        endDate: '2025-04-25',
        status: 'Active'
    },
    {
        id: 'sem03',
        name: '2025 September-December',
        startDate: '2025-05-10',
        endDate: '2025-08-15',
        status: 'upcoming'
    }
];

export const studentDashboardData = {
  student: {
    name: "Paul student",
    id: "No. UN/01/2345/2024",
    year: "YEAR 1 JANUARY 2022",
    balance: "0.00",
  },
  transactions: [
    { date: "2024-07-10", item: "Tuition Fee", amount: "0.00", balance: "0.00" },
    { date: "2024-07-01", item: "Fee Payment", amount: "0.00", balance: "0.00" },
  ],
  assignments: [
    { label: "Announcements", count: 1, href: "#" },
    { label: "Units On Offer", count: 2, href: "#" },
    { label: "Special Exam Application Form", count: 1, href: "#" },
    { label: "Missing Mark Form", count: 1, href: "#" },
  ],
  results: [
    { unitCode: "COMP 101", unitName: "INTRODUCTION TO COMPUTING", grade: " " },
    { unitCode: "MATH 121", unitName: "CALCULUS I", grade: " " },
    { unitCode: "HIST 101", unitName: "WORLD HISTORY", grade: " " },
    { unitCode: "ENGL 110", unitName: "ENGLISH COMPOSITION", grade: " " },
    { unitCode: "SCI 201", unitName: "APPLIED PHYSICS", grade: " " },
    { unitCode: "COMP 210", unitName: "DATA STRUCTURES", grade: " " },
    { unitCode: "COMP 350", unitName: "ALGORITHMS", grade: " " },
    { unitCode: "BUSN 300", unitName: "INTRODUCTION TO MARKETING", grade: " " },
  ]
};
