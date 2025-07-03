
"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface ExamTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

export function ExamTimer({ duration, onTimeUp }: ExamTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const isWarning = timeLeft < 60;

  return (
    <div className={`flex items-center gap-2 font-mono p-2 rounded-lg border ${isWarning ? 'text-destructive border-destructive bg-destructive/10' : 'text-foreground'}`}>
      <Clock className="w-5 h-5" />
      <span className="text-lg font-semibold tracking-wider">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}
