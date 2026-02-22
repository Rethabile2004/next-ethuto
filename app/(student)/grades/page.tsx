"use client";

import { useState } from "react";
import PageTitle from '@/components/global/PageTitle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, Search, Filter, TrendingUp } from "lucide-react";
import { gradesData, type Grade } from "@/lib/grades_data";

export default function GradesPage() {
  const [grades, setGrades] = useState<Grade[]>(gradesData);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "graded" | "pending">("all");

  // Calculate statistics
  const gradedSubmissions = grades.filter((g) => g.score !== null);
  const averageScore =
    gradedSubmissions.length > 0
      ? gradedSubmissions.reduce((acc, g) => acc + (g.score || 0), 0) / gradedSubmissions.length
      : 0;

  // Filter grades based on search and status
  const filteredGrades = grades.filter((grade) => {
    const matchesSearch = grade.submissionId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "graded" && grade.score !== null) ||
      (filterStatus === "pending" && grade.score === null);
    return matchesSearch && matchesFilter;
  });

  const getScoreBadge = (score: number | null) => {
    if (score === null) {
      return <Badge variant="secondary">Pending</Badge>;
    }
    if (score >= 90) {
      return <Badge className="bg-green-500 hover:bg-green-600">A</Badge>;
    }
    if (score >= 80) {
      return <Badge className="bg-blue-500 hover:bg-blue-600">B</Badge>;
    }
    if (score >= 70) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">C</Badge>;
    }
    if (score >= 60) {
      return <Badge className="bg-orange-500 hover:bg-orange-600">D</Badge>;
    }
    return <Badge className="bg-red-500 hover:bg-red-600">F</Badge>;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <PageTitle
          title="Grades"
        />
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{grades.length}</div>
            <p className="text-xs text-muted-foreground">
              {gradedSubmissions.length} graded, {grades.length - gradedSubmissions.length} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {averageScore.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Across {gradedSubmissions.length} graded submissions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highest Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {gradedSubmissions.length > 0
                ? Math.max(...gradedSubmissions.map((g) => g.score || 0)).toFixed(1)
                : "N/A"}%
            </div>
            <p className="text-xs text-muted-foreground">
              Your best performance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
          <CardDescription>
            A complete list of your assignment submissions and grades
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by submission ID..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select
                value={filterStatus}
                onValueChange={(value: "all" | "graded" | "pending") =>
                  setFilterStatus(value)
                }
              >
                <SelectTrigger className="w-37.5">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="graded">Graded</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Submission ID</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGrades.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No submissions found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredGrades.map((grade) => (
                    <TableRow key={grade.id}>
                      <TableCell className="font-medium">
                        {grade.submissionId}
                      </TableCell>
                      <TableCell>
                        {grade.score !== null ? (
                          <span className="font-semibold">{grade.score.toFixed(1)}%</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>{getScoreBadge(grade.score)}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(grade.gradedAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedGrade(grade)}
                          disabled={grade.score === null}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Grade Details Dialog */}
      <Dialog open={selectedGrade !== null} onOpenChange={() => setSelectedGrade(null)}>
        <DialogContent className="sm:max-w-150">
          <DialogHeader>
            <DialogTitle>Grade Details</DialogTitle>
            <DialogDescription>
              Submission ID: {selectedGrade?.submissionId}
            </DialogDescription>
          </DialogHeader>
          {selectedGrade && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Score</p>
                  <p className="text-3xl font-bold">
                    {selectedGrade.score?.toFixed(1)}%
                  </p>
                </div>
                <div>{getScoreBadge(selectedGrade.score)}</div>
              </div>

              <div className="rounded-lg border p-4">
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Graded At
                </p>
                <p className="text-sm">{formatDate(selectedGrade.gradedAt)}</p>
              </div>

              {selectedGrade.feedback && (
                <div className="rounded-lg border p-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    Feedback
                  </p>
                  <p className="text-sm leading-relaxed">{selectedGrade.feedback}</p>
                </div>
              )}

              <Button
                className="w-full"
                onClick={() => setSelectedGrade(null)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
