
"use client";

import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useExam } from "@/context/ExamContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Exam } from "@/lib/types";
import { UploadCloud, FileJson, Loader2 } from "lucide-react";

export function JsonUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setExam, clearExam } = useExam();
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a JSON file to upload.",
      });
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const data: Exam = JSON.parse(text);

        if (!data.title || !data.timeLimit || !data.questions || !Array.isArray(data.questions)) {
          throw new Error("Invalid exam format.");
        }
        
        clearExam();
        setExam(data);
        localStorage.setItem("examStartTime", Date.now().toString());

        toast({
          title: "Exam loaded successfully!",
          description: `Starting "${data.title}". Good luck!`,
        });
        router.push("/exam");
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Upload failed",
          description: "The file is not a valid exam JSON. Please check the format.",
        });
        setIsUploading(false);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div 
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`w-full p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
        ${dragActive ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
      >
        <input ref={inputRef} type="file" accept=".json" className="hidden" onChange={handleFileChange} />
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <UploadCloud className="w-10 h-10" />
          <p className="font-semibold">Drag & drop or click to upload</p>
          <p className="text-sm">JSON file only</p>
        </div>
      </div>

      {file && (
        <div className="w-full flex items-center justify-between p-3 bg-secondary rounded-lg">
          <div className="flex items-center gap-3">
            <FileJson className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{file.name}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setFile(null)}>Remove</Button>
        </div>
      )}

      <Button onClick={handleSubmit} disabled={!file || isUploading} className="w-full">
        {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {isUploading ? 'Loading Exam...' : 'Start Exam'}
      </Button>
    </div>
  );
}
