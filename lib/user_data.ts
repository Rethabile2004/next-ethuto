// Sample user data matching your Prisma User model
export const userData = {
  id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
  email: "rethabile.siase@student.edu",
  name: "RETHABILE ERIC SIASE",
  roleId: "student-role-id",
  createdAt: new Date("2023-09-01T08:00:00Z"),
  updatedAt: new Date("2024-02-16T10:00:00Z"),
  // Additional profile fields (can be extended based on your needs)
  profile: {
    studentId: "222052986",
    gender: "Male",
    additionalName: "",
    dateOfBirth: "",
    educationLevel: "Not disclosed",
    mailingAddress: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
    jobDepartment: "",
    avatarUrl: "/global/default.png",
  },
};

// Type definition for User with extended profile
export type UserProfile = {
  id: string;
  email: string;
  name: string | null;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  profile: {
    studentId: string;
    gender: string;
    additionalName: string;
    dateOfBirth: string;
    educationLevel: string;
    mailingAddress: string;
    phoneNumber: string;
    company: string;
    jobTitle: string;
    jobDepartment: string;
    avatarUrl: string;
  };
};