import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <Card className="w-full max-w-4xl border-none shadow-xl bg-white">
        <CardContent className="p-10 md:p-16 space-y-10 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/home/logo.png"
              alt="Central University of Technology Logo"
              width={280}
              height={120}
              priority
              className="object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              CUT e-Learning Platform
            </h1>
            <p className="text-3xl font-semibold text-[#003261]">
              Thinking Beyond
            </p>
          </div>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The official online learning environment for Central University of Technology students, lecturers, and administrators. Access course materials, submit assignments, track academic progress, and engage in technology-focused education.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Button
              size="lg"
              className="bg-[#003261] hover:bg-[#002040] text-white px-12 py-7 text-lg font-medium shadow-md"
              asChild
            >
              <a href="/sign-in">Login to Platform</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#003261] text-[#003261] hover:bg-[#003261]/10 px-12 py-7 text-lg font-medium"
              asChild
            >
              <a href="/sign-up">New User / Register</a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 px-12 py-7 text-lg font-medium"
              asChild
            >
              <a href="/dashboard">Guest Access (Testing)</a>
            </Button>
          </div>
          <div className="pt-12 text-sm text-gray-600">
            Central University of Technology, Free State • Bloemfontein & Welkom Campuses
            <br />
            Private Bag X20539, Bloemfontein, 9300, South Africa
          </div>
        </CardContent>
      </Card>
    </div>
  );
}