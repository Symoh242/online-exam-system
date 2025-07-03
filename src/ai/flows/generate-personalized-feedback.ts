// src/ai/flows/generate-personalized-feedback.ts
'use server';

/**
 * @fileOverview Generates personalized feedback for a student based on their exam performance.
 *
 * - generatePersonalizedFeedback - A function that generates personalized feedback.
 * - PersonalizedFeedbackInput - The input type for the generatePersonalizedFeedback function.
 * - PersonalizedFeedbackOutput - The return type for the generatePersonalizedFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FeedbackToneSchema = z.enum(['positive', 'negative']);

const PersonalizedFeedbackInputSchema = z.object({
  examName: z.string().describe('The name of the exam.'),
  studentName: z.string().describe('The name of the student.'),
  score: z.number().describe('The student\'s score on the exam.'),
  maxScore: z.number().describe('The maximum possible score on the exam.'),
  strengths: z.string().describe('A summary of the student\'s strengths.'),
  weaknesses: z.string().describe('A summary of the student\'s weaknesses.'),
});
export type PersonalizedFeedbackInput = z.infer<typeof PersonalizedFeedbackInputSchema>;

const PersonalizedFeedbackOutputSchema = z.object({
  feedback: z.string().describe('The personalized feedback for the student.'),
});
export type PersonalizedFeedbackOutput = z.infer<typeof PersonalizedFeedbackOutputSchema>;

const decideFeedbackTone = ai.defineTool({
  name: 'decideFeedbackTone',
  description: 'Decides whether the feedback should have a positive or negative tone based on the student\'s performance.',
  inputSchema: z.object({
    score: z.number().describe('The student\'s score on the exam.'),
    maxScore: z.number().describe('The maximum possible score on the exam.'),
  }),
  outputSchema: FeedbackToneSchema,
}, async (input) => {
  const scorePercentage = input.score / input.maxScore;
  if (scorePercentage >= 0.7) {
    return 'positive';
  } else {
    return 'negative';
  }
});

const personalizedFeedbackPrompt = ai.definePrompt({
  name: 'personalizedFeedbackPrompt',
  input: {schema: PersonalizedFeedbackInputSchema},
  output: {schema: PersonalizedFeedbackOutputSchema},
  tools: [decideFeedbackTone],
  system: `You are an AI assistant designed to provide personalized feedback to students based on their exam performance.

  Given the student's performance, strengths, and weaknesses, generate a short, encouraging feedback message.
  The feedback should be tailored to the student's name and the specific exam.

  Based on the student's score, decide whether the tone should be positive or negative using the decideFeedbackTone tool.
  If the tone is positive, focus on encouraging the student and highlighting their achievements.
  If the tone is negative, focus on providing constructive criticism and suggesting areas for improvement.
  `,
  prompt: `Exam Name: {{examName}}
Student Name: {{studentName}}
Score: {{score}} / {{maxScore}}
Strengths: {{strengths}}
Weaknesses: {{weaknesses}}

Personalized Feedback:`,}
);

const generatePersonalizedFeedbackFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedFeedbackFlow',
    inputSchema: PersonalizedFeedbackInputSchema,
    outputSchema: PersonalizedFeedbackOutputSchema,
  },
  async input => {
    const {output} = await personalizedFeedbackPrompt(input);
    return output!;
  }
);

export async function generatePersonalizedFeedback(input: PersonalizedFeedbackInput): Promise<PersonalizedFeedbackOutput> {
  return generatePersonalizedFeedbackFlow(input);
}

export type {FeedbackToneSchema};
