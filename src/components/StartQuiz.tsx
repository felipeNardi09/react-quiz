"use client";
import { useQuestions } from "@/context/QuestionsContext";
import Button from "./Button";

export default function StartQuiz() {
  const { dispatch } = useQuestions();

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          dispatch({ type: "active" });
        }}
      >
        Start the Quiz
      </Button>
    </div>
  );
}
