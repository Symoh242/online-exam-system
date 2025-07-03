
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import type { Exam, Answers, ExamResult } from "@/lib/types";

interface ExamContextType {
  exam: Exam | null;
  answers: Answers;
  result: ExamResult | null;
  setExam: (exam: Exam | null) => void;
  setAnswer: (questionId: string, answerId: string) => void;
  setResult: (result: ExamResult | null) => void;
  clearExam: () => void;
  isLoading: boolean;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export function ExamProvider({ children }: { children: ReactNode }) {
  const [exam, setExamState] = useState<Exam | null>(null);
  const [answers, setAnswersState] = useState<Answers>({});
  const [result, setResultState] = useState<ExamResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedExam = localStorage.getItem("exam");
      const storedAnswers = localStorage.getItem("answers");
      const storedResult = localStorage.getItem("result");
      if (storedExam) setExamState(JSON.parse(storedExam));
      if (storedAnswers) setAnswersState(JSON.parse(storedAnswers));
      if (storedResult) setResultState(JSON.parse(storedResult));
    } catch (error) {
      console.error("Failed to load state from localStorage", error);
    }
    setIsLoading(false);
  }, []);

  const setExam = useCallback((examData: Exam | null) => {
    setExamState(examData);
    if (examData) {
      localStorage.setItem("exam", JSON.stringify(examData));
    } else {
      localStorage.removeItem("exam");
    }
  }, []);

  const setAnswer = useCallback((questionId: string, answerId: string) => {
    setAnswersState((prev) => {
      const newAnswers = { ...prev, [questionId]: answerId };
      localStorage.setItem("answers", JSON.stringify(newAnswers));
      return newAnswers;
    });
  }, []);

  const setResult = useCallback((resultData: ExamResult | null) => {
    setResultState(resultData);
    if (resultData) {
      localStorage.setItem("result", JSON.stringify(resultData));
    } else {
      localStorage.removeItem("result");
    }
  }, []);

  const clearExam = useCallback(() => {
    setExam(null);
    setAnswersState({});
    setResult(null);
    localStorage.removeItem("exam");
    localStorage.removeItem("answers");
    localStorage.removeItem("result");
    localStorage.removeItem("examStartTime");
  }, [setExam, setResult]);

  const value = { exam, answers, result, setExam, setAnswer, setResult, clearExam, isLoading };

  return (
    <ExamContext.Provider value={value}>
      {children}
    </ExamContext.Provider>
  );
}

export const useExam = (): ExamContextType => {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
};
