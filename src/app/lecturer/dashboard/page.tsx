
import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { User, FileText, PenSquare } from "lucide-react";

export default function LecturerDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 p-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter">Lecturer Dashboard</h1>
            <p className="text-muted-foreground">Manage students, units, and exams.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Manage Students</CardTitle>
                    <User className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+50</div>
                    <p className="text-xs text-muted-foreground">new students enrolled</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Manage Units</CardTitle>
                    <FileText className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">units assigned this semester</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Manage Exams</CardTitle>
                    <PenSquare className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+10</div>
                    <p className="text-xs text-muted-foreground">exams created</p>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
