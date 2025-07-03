
"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { mockCourses } from "@/lib/mock-data";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">Here is a list of all your enrolled courses for the semester.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockCourses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{course.name}</CardTitle>
                  <Badge variant="outline">Period {course.period}</Badge>
                </div>
                <CardDescription>{course.teacher}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium">Current Grade</p>
                    <p className="text-2xl font-bold">{course.grade}</p>
                  </div>
                  <Progress value={course.progress} aria-label={`${course.progress}% progress`} />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/courses/${course.id}`}>
                    Go to Course <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
