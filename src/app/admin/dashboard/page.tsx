
import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage lecturers, programs, and semesters.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/admin/lecturers">
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Manage Lecturers</CardTitle>
                      <Users className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                      <div className="text-2xl font-bold">+5</div>
                      <p className="text-xs text-muted-foreground">new lecturers added this month</p>
                  </CardContent>
                   <div className="p-6 pt-0 text-sm font-medium text-primary hover:underline flex items-center">
                    View Lecturers <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
              </Card>
            </Link>
            <Link href="/admin/programs">
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Manage Programs</CardTitle>
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                      <div className="text-2xl font-bold">+2</div>
                      <p className="text-xs text-muted-foreground">new programs introduced</p>
                  </CardContent>
                  <div className="p-6 pt-0 text-sm font-medium text-primary hover:underline flex items-center">
                    View Programs <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
              </Card>
            </Link>
             <Link href="/admin/semesters">
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Manage Semesters</CardTitle>
                      <Building className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">semesters currently active</p>
                  </CardContent>
                   <div className="p-6 pt-0 text-sm font-medium text-primary hover:underline flex items-center">
                    View Semesters <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
              </Card>
            </Link>
        </div>
      </main>
    </div>
  );
}
