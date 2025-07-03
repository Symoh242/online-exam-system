
"use client";

import { Header } from "@/components/Header";
import { JsonUploader } from "@/components/JsonUploader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, FileJson, ListChecks, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              Welcome to Examplify
            </h1>
            <p className="text-lg text-muted-foreground">
              Mathew Ndeto&apos;s online exam management system for his graduation
              presentation. Upload an exam definition file to get started.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                     <FileJson className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                     <p className="font-semibold">Dynamic Exams</p>
                     <p className="text-sm text-muted-foreground">Load exams from JSON files.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                     <ListChecks className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                     <p className="font-semibold">Instant Results</p>
                     <p className="text-sm text-muted-foreground">Get your score and analytics.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                     <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                     <p className="font-semibold">AI Feedback</p>
                     <p className="text-sm text-muted-foreground">Personalized improvement tips.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                     <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                     <p className="font-semibold">JSON Format</p>
                     <p className="text-sm text-muted-foreground">Use our simple exam schema.</p>
                  </div>
               </div>
            </div>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Start an Exam</CardTitle>
              <CardDescription>
                Upload a valid exam JSON file to begin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <JsonUploader />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
