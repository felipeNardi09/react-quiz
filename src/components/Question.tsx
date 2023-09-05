import { useQuestions } from "../context/QuestionsContext";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useQuestions();

  return (
    <div className="text-center">
      <h2 className="p-2">Question {index + 1}</h2>
      <p className="p-2">Difficulty: {questions[index].difficulty}</p>
      <h1 className="h-1/6 rounded bg-lime-100 p-4">
        {questions[index].question}
      </h1>
      <Options />
    </div>
  );
}
