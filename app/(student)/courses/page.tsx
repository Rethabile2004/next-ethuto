"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PageTitle from "@/components/global/PageTitle"

const courses = [
  {
    id: "uuid-1",
    title: "Introduction to Quantum Physics",
    description: "Dive into the weird world of particles and waves. Not for the faint-hearted.",
    instructorId: "inst-001",
    departmentId: "phys-101",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "uuid-2",
    title: "Advanced Machine Learning",
    description: "Build models that actually work, or at least pretend to.",
    instructorId: "inst-002",
    departmentId: "cs-201",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "uuid-3",
    title: "History of Ancient Civilizations",
    description: "Learn why empires fall—spoiler: bad decisions.",
    instructorId: "inst-003",
    departmentId: "hist-301",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "uuid-4",
    title: "Organic Chemistry Basics",
    description: "Bonds, reactions, and why everything smells funny.",
    instructorId: "inst-004",
    departmentId: "chem-401",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const colors = [
  "bg-red-100 hover:bg-red-200",
  "bg-blue-100 hover:bg-blue-200",
  "bg-green-100 hover:bg-green-200",
  "bg-yellow-100 hover:bg-yellow-200",
  "bg-purple-100 hover:bg-purple-200",
]

export default function CoursesPage() {
  return (
    <>
      <PageTitle
        title="Courses"
      />
      <div className="max-w-4xl py-12 px-4 bg-white min-h-screen font-sans">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const colorClass = colors[index % colors.length] // Cycle colors

            return (

              <Card
                key={course.id}
                className={`transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer ${colorClass}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {course.description || "No description available."}
                  </CardDescription>
                  <div className="text-xs text-slate-500">
                    Instructor: {course.instructorId}
                  </div>
                  <div className="text-xs text-slate-500">
                    Department: {course.departmentId || "Not specified"}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Created: {course.createdAt.toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {courses.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No courses available. Add some data, lazy.</p>
        )}
      </div>
    </>
  )
}