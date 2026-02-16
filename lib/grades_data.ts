// Sample grades data array
export const gradesData = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    submissionId: "sub-001",
    score: 95.5,
    feedback: "Excellent work! Your analysis was thorough and well-structured. Great attention to detail.",
    gradedAt: new Date("2024-02-10T10:30:00Z"),
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    submissionId: "sub-002",
    score: 87.0,
    feedback: "Good effort. The main concepts are clear, but consider expanding on the implementation details.",
    gradedAt: new Date("2024-02-11T14:15:00Z"),
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    submissionId: "sub-003",
    score: 92.3,
    feedback: "Very strong submission. Your code is clean and well-documented. Minor improvements in error handling suggested.",
    gradedAt: new Date("2024-02-12T09:45:00Z"),
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    submissionId: "sub-004",
    score: null,
    feedback: null,
    gradedAt: new Date("2024-02-13T16:20:00Z"),
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    submissionId: "sub-005",
    score: 78.5,
    feedback: "Meets the requirements but lacks depth in some areas. Review the feedback comments on your code.",
    gradedAt: new Date("2024-02-14T11:00:00Z"),
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
    submissionId: "sub-006",
    score: 100.0,
    feedback: "Outstanding! Perfect execution with innovative solutions. This is exemplary work.",
    gradedAt: new Date("2024-02-15T13:30:00Z"),
  },
  {
    id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
    submissionId: "sub-007",
    score: 85.0,
    feedback: "Solid work overall. Good understanding of core concepts. Consider optimizing your algorithms.",
    gradedAt: new Date("2024-02-16T08:00:00Z"),
  },
  {
    id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
    submissionId: "sub-008",
    score: null,
    feedback: null,
    gradedAt: new Date("2024-02-16T10:00:00Z"),
  },
];

// Type definition matching your Prisma model
export type Grade = {
  id: string;
  submissionId: string;
  score: number | null;
  feedback: string | null;
  gradedAt: Date;
};