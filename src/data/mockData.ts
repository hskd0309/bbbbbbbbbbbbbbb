// Mock data for dashboard charts and components

export const studentData = {
  briScore: 28, // Lower BRI = Higher Risk (this student is high risk)
  attendance: 85,
  avgMarks: 78,
  assignmentsOnTime: 92,
  sentiment: "positive",
  dataSharing: true, // Privacy consent for sharing data with advisors
  
  briHistory: [
    { month: 'Jan', score: 35 },
    { month: 'Feb', score: 32 },
    { month: 'Mar', score: 30 },
    { month: 'Apr', score: 28 },
    { month: 'May', score: 25 },
    { month: 'Jun', score: 28 }
  ],
  
  attendanceData: [
    { name: 'Present', value: 85, fill: '#22c55e' },
    { name: 'Absent', value: 15, fill: '#ef4444' }
  ],
  
  subjectMarks: [
    { subject: 'Mathematics', marks: 85 },
    { subject: 'Physics', marks: 78 },
    { subject: 'Chemistry', marks: 82 },
    { subject: 'English', marks: 75 },
    { subject: 'Computer Science', marks: 88 }
  ],
  
  assignments: [
    {
      id: '1',
      subject: 'Mathematics',
      title: 'Calculus Assignment',
      dueDate: '2024-09-15',
      status: 'pending',
      isOverdue: false
    },
    {
      id: '2',
      subject: 'Physics',
      title: 'Lab Report',
      dueDate: '2024-09-14',
      status: 'pending',
      isOverdue: false
    },
    {
      id: '3',
      subject: 'Computer Science',
      title: 'Algorithm Implementation',
      dueDate: '2024-09-16',
      status: 'completed',
      isOverdue: false
    }
  ]
};

export const classData = {
  'CSE-K': {
    avgBri: 32, // Lower BRI = Higher Risk
    highRiskCount: 8,
    avgAttendance: 82,
    totalStudents: 40,
    complaintsCount: 3,
    
    briTrend: [
      { week: 'Week 1', score: 38 },
      { week: 'Week 2', score: 35 },
      { week: 'Week 3', score: 32 },
      { week: 'Week 4', score: 28 },
      { week: 'Week 5', score: 32 }
    ],
    
    riskDistribution: [
      { risk: 'Low', count: 20, fill: '#22c55e' },
      { risk: 'Medium', count: 12, fill: '#f59e0b' },
      { risk: 'High', count: 8, fill: '#ef4444' }
    ],
    
    students: Array.from({ length: 40 }, (_, i) => {
      // Generate BRI score first
      const briScore = Math.floor(Math.random() * 80) + 10; // 10-90 range
      
      // Determine risk level based on BRI score (inverted logic)
      let riskLevel;
      if (briScore >= 70) riskLevel = 'low';    // High BRI = Low Risk
      else if (briScore >= 40) riskLevel = 'medium'; // Medium BRI = Medium Risk  
      else riskLevel = 'high';                  // Low BRI = High Risk
      
      return {
        id: `anon-${i + 1}`,
        briScore,
        trend: Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 10),
        riskLevel,
        dataSharing: i % 7 !== 0 // Some students (every 7th) deny data sharing
      };
    })
  },
  
  'CSE-D': {
    avgBri: 25, // Lower BRI = Higher Risk
    highRiskCount: 5,
    avgAttendance: 88,
    totalStudents: 38,
    complaintsCount: 1,
    
    briTrend: [
      { week: 'Week 1', score: 32 },
      { week: 'Week 2', score: 28 },
      { week: 'Week 3', score: 25 },
      { week: 'Week 4', score: 22 },
      { week: 'Week 5', score: 25 }
    ],
    
    riskDistribution: [
      { risk: 'Low', count: 25, fill: '#22c55e' },
      { risk: 'Medium', count: 8, fill: '#f59e0b' },
      { risk: 'High', count: 5, fill: '#ef4444' }
    ],
    
    students: Array.from({ length: 38 }, (_, i) => {
      // Generate BRI score first
      const briScore = Math.floor(Math.random() * 80) + 10; // 10-90 range
      
      // Determine risk level based on BRI score (inverted logic)
      let riskLevel;
      if (briScore >= 70) riskLevel = 'low';    // High BRI = Low Risk
      else if (briScore >= 40) riskLevel = 'medium'; // Medium BRI = Medium Risk
      else riskLevel = 'high';                  // Low BRI = High Risk
      
      return {
        id: `anon-${i + 41}`,
        briScore,
        trend: Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 10),
        riskLevel,
        dataSharing: i % 5 !== 0 // Some students (every 5th) deny data sharing
      };
    })
  }
};

export const complaints = [
  {
    id: '1',
    text: 'Too much workload in mathematics course',
    timestamp: '2024-09-08 14:30',
    class: 'CSE-K',
    sentiment: 'negative'
  },
  {
    id: '2',
    text: 'Lab equipment needs maintenance',
    timestamp: '2024-09-07 16:45',
    class: 'CSE-D',
    sentiment: 'neutral'
  },
  {
    id: '3',
    text: 'Cafeteria food quality has improved',
    timestamp: '2024-09-06 12:20',
    class: 'CSE-K',
    sentiment: 'positive'
  }
];

export const counsellorReferrals = [
  {
    id: 'ref-001',
    studentId: 'HASHED-STU-001',
    realName: 'John Doe',
    briScore: 45,
    riskFactors: ['High assignment stress', 'Low attendance', 'Social isolation'],
    referredBy: 'Dr. Smith',
    referredDate: '2024-09-05',
    status: 'active',
    notes: 'Student showing signs of academic stress and social withdrawal'
  },
  {
    id: 'ref-002',
    studentId: 'HASHED-STU-002',
    realName: 'Jane Smith',
    briScore: 38,
    riskFactors: ['Other issues', 'Academic pressure', 'Social isolation'],
    referredBy: 'Dr. Johnson',
    referredDate: '2024-09-03',
    status: 'in-progress',
    notes: 'Multiple sessions completed, showing improvement'
  }
];

export const adminHighRiskStudents = [
  {
    id: 'HASHED-ADM-001',
    briScore: 35,
    class: 'CSE-K',
    lastUpdated: '2024-09-09'
  },
  {
    id: 'HASHED-ADM-002',
    briScore: 42,
    class: 'CSE-D',
    lastUpdated: '2024-09-08'
  },
  {
    id: 'HASHED-ADM-003',
    briScore: 38,
    class: 'CSE-K',
    lastUpdated: '2024-09-07'
  },
  {
    id: 'HASHED-ADM-004',
    briScore: 41,
    class: 'CSE-D',
    lastUpdated: '2024-09-06'
  },
  {
    id: 'HASHED-ADM-005',
    briScore: 36,
    class: 'CSE-K',
    lastUpdated: '2024-09-05'
  },
  {
    id: 'HASHED-ADM-006',
    briScore: 44,
    class: 'CSE-D',
    lastUpdated: '2024-09-04'
  }
];

export const chatMessages = [
  {
    id: '1',
    sender: 'Anon-001',
    message: 'Anyone struggling with the calculus assignment?',
    timestamp: '2024-09-09 10:30',
    sentiment: 'neutral'
  },
  {
    id: '2',
    sender: 'Anon-002',
    message: 'Yes, the integration problems are really challenging',
    timestamp: '2024-09-09 10:32',
    sentiment: 'negative'
  },
  {
    id: '3',
    sender: 'Anon-003',
    message: 'I found some helpful resources online, happy to share',
    timestamp: '2024-09-09 10:35',
    sentiment: 'positive'
  },
  {
    id: '4',
    sender: 'Anon-001',
    message: 'That would be great, thanks!',
    timestamp: '2024-09-09 10:36',
    sentiment: 'positive'
  }
];