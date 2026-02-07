import StudentSidebar from "@/components/student/Sidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <StudentSidebar />
      <main className="flex-1 lg:pl-64">
        <div className="pt-20 lg:pt-8 px-4 sm:px-8 pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}