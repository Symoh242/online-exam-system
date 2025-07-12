
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import { semesters } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function ManageSemestersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Manage Semesters</h1>
            <p className="text-muted-foreground">Define and manage academic semesters.</p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Semester
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Semester List</CardTitle>
            <CardDescription>All academic semesters, past and present.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Semester Name</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {semesters.map((semester) => (
                  <TableRow key={semester.id}>
                    <TableCell className="font-medium">{semester.name}</TableCell>
                    <TableCell>{semester.startDate}</TableCell>
                    <TableCell>{semester.endDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          semester.status === 'Active'
                            ? 'default'
                            : semester.status === 'Upcoming'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {semester.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
