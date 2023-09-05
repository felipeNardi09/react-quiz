import { useQuestions } from "@/context/QuestionsContext";
import RestartQuiz from "./RestartQuiz";

export default function Results() {
  const { points, maxPoints } = useQuestions();

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">
        <h1>
          You scored <span className="text-purple-500">{points}</span> points
          out of {maxPoints}
        </h1>
      </div>
      <RestartQuiz />
    </div>
  );
}
