
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useExam } from "@/context/ExamContext";
import { Header } from "@/components/Header";
import { ResultsChart } from "@/components/ResultsChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { generatePersonalizedFeedback } from "@/ai/flows/generate-personalized-feedback";
import { Loader2, CheckCircle2, XCircle, Clock, MessageSquareQuote, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResultsPage() {
  const router = useRouter();
  const { result, exam, clearExam, isLoading: isContextLoading } = useExam();
  const [feedback, setFeedback] = useState("");
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(true);

  useEffect(() => {
    if (!isContextLoading && !result) {
      router.replace("/");
    }
  }, [result, isContextLoading, router]);

  useEffect(() => {
    if (result && exam) {
      const fetchFeedback = async () => {
        setIsGeneratingFeedback(true);
        try {
          const feedbackInput = {
            examName: exam.title,
            studentName: "Mathew Ndeto",
            score: result.score,
            maxScore: result.totalQuestions,
            strengths: result.strengths.join(", ") || "No specific strengths identified.",
            weaknesses: result.weaknesses.join(", ") || "No specific weaknesses identified.",
          };
          const response = await generatePersonalizedFeedback(feedbackInput);
          setFeedback(response.feedback);
        } catch (error) {
          console.error("Error generating feedback:", error);
          setFeedback("Could not generate personalized feedback at this time.");
        } finally {
          setIsGeneratingFeedback(false);
        }
      };
      fetchFeedback();
    }
  }, [result, exam]);

  const handleTryAgain = () => {
    clearExam();
    router.push("/");
  };

  if (isContextLoading || !result || !exam) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const scorePercentage = Math.round((result.score / result.totalQuestions) * 100);
  const minutes = Math.floor(result.timeTaken / 60);
  const seconds = result.timeTaken % 60;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 md:p-8 bg-secondary/30">
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">Exam Results</h1>
                <p className="text-muted-foreground mt-2 text-lg">Here&apos;s your performance for the &quot;{exam.title}&quot; exam.</p>
            </div>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Your Score</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-7xl font-bold text-primary">{scorePercentage}%</p>
              <p className="text-muted-foreground mt-2 text-xl">{result.score} out of {result.totalQuestions} correct</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                   <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
                   <CheckCircle2 className="w-5 h-5 text-green-500" />
                </CardHeader>
                <CardContent>
                   <p className="text-2xl font-bold">{result.correctAnswers}</p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                   <CardTitle className="text-sm font-medium">Incorrect Answers</CardTitle>
                   <XCircle className="w-5 h-5 text-destructive" />
                </CardHeader>
                <CardContent>
                   <p className="text-2xl font-bold">{result.incorrectAnswers}</p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                   <CardTitle className="text-sm font-medium">Time Taken</CardTitle>
                   <Clock className="w-5 h-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                   <p className="text-2xl font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
                </CardContent>
             </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Breakdown</CardTitle>
                <CardDescription>A visual representation of your results.</CardDescription>
              </CardHeader>
              <CardContent>
                <ResultsChart data={[{ name: 'Correct', value: result.correctAnswers, fill: "hsl(var(--chart-1))" }, { name: 'Incorrect', value: result.incorrectAnswers, fill: "hsl(var(--destructive))" }]} />
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MessageSquareQuote className="w-5 h-5 text-primary"/> AI Generated Feedback</CardTitle>
                    <CardDescription>Personalized tips to help you improve.</CardDescription>
                </CardHeader>
                <CardContent>
                    {isGeneratingFeedback ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    ) : (
                        <blockquote className="border-l-2 pl-4 italic text-lg">
                            {feedback}
                        </blockquote>
                    )}
                </CardContent>
            </Card>
          </div>
          
           <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-primary"/> Topic Analysis</CardTitle>
                <CardDescription>Your identified strengths and areas for improvement.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.strengths.length > 0 ? result.strengths.map(s => <Badge key={s} variant="secondary" className="bg-green-100 text-green-800">{s}</Badge>) : <p className="text-sm text-muted-foreground">None identified.</p>}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Weaknesses</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.weaknesses.length > 0 ? result.weaknesses.map(w => <Badge key={w} variant="secondary" className="bg-red-100 text-red-800">{w}</Badge>) : <p className="text-sm text-muted-foreground">None identified.</p>}
                  </div>
                </div>
              </CardContent>
            </Card>

          <div className="text-center pt-4">
            <Button size="lg" onClick={handleTryAgain}>Take Another Exam</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
