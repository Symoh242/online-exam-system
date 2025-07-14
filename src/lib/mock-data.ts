
export const lecturers = [
  {
    id: 'lec001',
    name: 'Dr. Alex Doe',
    email: 'a.doe@university.ac.ke',
    department: 'Computer Science',
    status: 'Active',
  },
  {
    id: 'lec002',
    name: 'Prof. Jane Smith',
    email: 'j.smith@university.ac.ke',
    department: 'Business Administration',
    status: 'Active',
  },
  {
    id: 'lec003',
    name: 'Dr. Sam Wilson',
    email: 's.wilson@university.ac.ke',
    department: 'Electrical Engineering',
    status: 'On Leave',
  },
  {
    id: 'lec004',
    name: 'Dr. Chris Lee',
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
        name: '2024 September-December',
        startDate: '2024-09-01',
        endDate: '2024-12-20',
        status: 'Active'
    },
    {
        id: 'sem02',
        name: '2025 January-April',
        startDate: '2025-01-05',
        endDate: '2025-04-25',
        status: 'Upcoming'
    },
    {
        id: 'sem03',
        name: '2024 May-August',
        startDate: '2024-05-10',
        endDate: '2024-08-15',
        status: 'Completed'
    }
];

export const studentDashboardData = {
  student: {
    name: "John Student",
    id: "No. UN/01/2345/2024",
    year: "YEAR 1 JANUARY 2022",
    balance: "-19,870.00/-",
  },
  transactions: [
    { date: "2024-07-10", item: "Tuition Fee", amount: "-50,000.00", balance: "-19,870.00" },
    { date: "2024-07-01", item: "Fee Payment", amount: "+30,130.00", balance: "130.00" },
  ],
  assignments: [
    { label: "Announcements", count: 1, href: "#" },
    { label: "Units On Offer", count: 2, href: "#" },
    { label: "Special Exam Application Form", count: 1, href: "#" },
    { label: "Suppl. Exam Application Form", count: 1, href: "#" },
    { label: "Missing Mark Form", count: 1, href: "#" },
  ],
  results: [
    { unitCode: "COMP 101", unitName: "INTRODUCTION TO COMPUTING", grade: "D" },
    { unitCode: "MATH 121", unitName: "CALCULUS I", grade: "F" },
    { unitCode: "HIST 101", unitName: "WORLD HISTORY", grade: "F" },
    { unitCode: "ENGL 110", unitName: "ENGLISH COMPOSITION", grade: "A" },
    { unitCode: "SCI 201", unitName: "APPLIED PHYSICS", grade: "B" },
    { unitCode: "COMP 210", unitName: "DATA STRUCTURES", grade: "F" },
    { unitCode: "COMP 350", unitName: "ALGORITHMS", grade: "C" },
    { unitCode: "BUSN 300", unitName: "INTRODUCTION TO MARKETING", grade: "B" },
  ]
};
