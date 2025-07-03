
"use client";

import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { mockCourses, mockAnnouncements, mockAssignments } from "@/lib/mock-data";
import { ArrowRight, BookOpen, ClipboardCheck, AlertTriangle, Megaphone } from "lucide-react";
import Link from "next/link";


export default function DashboardPage() {
  const overdueAssignments = mockAssignments.filter(a => a.isOverdue).length;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 md:p-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome Back, Mathew!</h1>
              <p className="text-muted-foreground">Here’s your dashboard for today.</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                <BookOpen className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockCourses.length}</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Assignments</CardTitle>
                <ClipboardCheck className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockAssignments.filter(a => !a.isOverdue).length}</div>
                <p className="text-xs text-muted-foreground">{mockAssignments.length} total assignments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Overdue Assignments</CardTitle>
                <AlertTriangle className="w-4 h-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">{overdueAssignments}</div>
                <p className="text-xs text-muted-foreground">Action required</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Courses</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/courses">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCourses.slice(0, 4).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                      <div>
                        <p className="font-semibold">{course.name}</p>
                        <p className="text-sm text-muted-foreground">Period {course.period} - {course.teacher}</p>
                      </div>
                      <Badge variant="outline" className="text-lg">{course.grade}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary"/>Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockAnnouncements.map((ann) => (
                    <div key={ann.id}>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-semibold">{ann.title}</h4>
                        <p className="text-xs text-muted-foreground">{ann.date}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{ann.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
