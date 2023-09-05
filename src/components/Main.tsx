"use client";
import { useEffect, useReducer } from "react";
import { useQuestions } from "@/context/QuestionsContext";
import RestartQuiz from "./RestartQuiz";
import StartQuiz from "./StartQuiz";
import Loading from "./Loading";
import Error from "./Error";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Results from "./Results";
import ScoreTracker from "./ScoreTracker";

export default function Main() {
  const { currentStatus } = useQuestions();

  return (
    <main className="flex h-4/6 items-center justify-center text-2xl">
      {currentStatus === "loading" && <Loading />}
      {currentStatus === "error" && <Error />}
      {currentStatus === "start" && <StartQuiz />}
      {currentStatus === "active" && (
        <div className="flex flex-col items-center">
          <ScoreTracker />
          <Question />
          <NextQuestion />
        </div>
      )}
      {currentStatus === "results" && <Results />}
    </main>
  );
}
