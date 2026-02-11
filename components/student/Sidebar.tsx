"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { studentLinks } from "@/lib/student-nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function StudentSidebar() {
  const pathname = usePathname();

  const NavItems = () => (
    <nav className="flex flex-col gap-2 px-2">
      {studentLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Button
            key={link.href}
            asChild
            variant="ghost"
            className={cn(
              "justify-start gap-3 w-full",
              isActive ? "bg-slate-100 text-red-600" : "text-slate-600"
            )}
          >
            <Link href={link.href}>
              <link.icon className="h-5 w-5" />
              {link.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );

  return (
    <>
      <header className="lg:hidden fixed top-0 w-full h-16 border-b bg-white flex items-center justify-between px-4 z-40">
        <div className="font-bold text-xl">{pathname.split('/')[1]}</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <div className="mb-8 font-bold text-xl px-2">Menu</div>
            <NavItems />
          </SheetContent>
        </Sheet>
      </header>

      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 border-r bg-white p-4">
        <div className="mb-10 px-2 font-bold text-2xl">CUT</div>
        <div className="flex-1">
          <NavItems />
        </div>
        <Button variant="ghost" className="justify-start gap-3 text-slate-500 mt-auto">
          <LogOut className="h-5 w-5" /> Logout
        </Button>
      </aside>
    </>
  );
}