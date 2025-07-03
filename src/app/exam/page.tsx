
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useExam } from "@/context/ExamContext";
import { Header } from "@/components/Header";
import { ExamTimer } from "@/components/ExamTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";
import type { ExamResult } from "@/lib/types";

export default function ExamPage() {
  const router = useRouter();
  const { exam, answers, setAnswer, setResult, clearExam, isLoading } = useExam();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && !exam) {
      router.replace("/");
    }
  }, [exam, isLoading, router]);

  const handleSubmit = () => {
    if (!exam) return;
    setIsSubmitting(true);
    
    let correct = 0;
    const strengths = new Set<string>();
    const weaknesses = new Set<string>();

    exam.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswerId) {
        correct++;
        strengths.add(q.topic);
      } else {
        weaknesses.add(q.topic);
      }
    });

    const startTime = parseInt(localStorage.getItem("examStartTime") || Date.now().toString());
    const timeTaken = Math.round((Date.now() - startTime) / 1000);

    const result: ExamResult = {
      score: correct,
      correctAnswers: correct,
      incorrectAnswers: exam.questions.length - correct,
      totalQuestions: exam.questions.length,
      timeTaken: timeTaken,
      answers,
      strengths: Array.from(strengths),
      weaknesses: Array.from(weaknesses),
    };

    setResult(result);
    router.push("/results");
  };

  if (isLoading || !exam) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <div className="sticky top-[81px] bg-background/80 backdrop-blur-sm z-10 border-b">
        <div className="container mx-auto p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold text-center sm:text-left">{exam.title}</h1>
          <div className="flex items-center gap-4">
            <ExamTimer duration={exam.timeLimit} onTimeUp={handleSubmit} />
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Exam
            </Button>
          </div>
        </div>
      </div>
      <main className="flex-1 container mx-auto p-4 sm:p-6 md:p-8">
        <div className="space-y-6">
          {exam.questions.map((question, index) => (
            <Card key={question.id} className="shadow-sm transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{`Question ${index + 1}`}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">{question.text}</p>
                <RadioGroup
                  value={answers[question.id] || ""}
                  onValueChange={(value) => setAnswer(question.id, value)}
                  className="space-y-2"
                >
                  {question.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md border has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                      <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                      <Label htmlFor={`${question.id}-${option.id}`} className="font-normal text-base cursor-pointer flex-1">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
