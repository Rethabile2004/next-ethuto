import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  User,
  Bell,
  LogOut,
} from "lucide-react";

export type StudentLink = {
  title: string;
  href: string;
  icon: React.ComponentType<any>;
};

export const studentLinks: StudentLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Grades",
    href: "/grades",
    icon: FileText,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];