import { useQuestions } from "@/context/QuestionsContext";

export default function ScoreTracker() {
  const { points, maxPoints } = useQuestions();

  const totalPoints = "";

  return (
    <div>
      <h1>
        Points: <span className="text-purple-500">{points}</span>/{maxPoints}
      </h1>
    </div>
  );
}
