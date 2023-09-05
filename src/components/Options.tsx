import { useQuestions } from "@/context/QuestionsContext";

export default function Options() {
  const { questions, index, answer, dispatch } = useQuestions();

  const hasAnswered = answer !== null;
  return (
    <div className="flex h-5/6 flex-col justify-center">
      {questions[index].options.map((option, i) => (
        <button
          key={i}
          className={`border-t-2 p-2 disabled:cursor-not-allowed ${
            i === answer ? "bg-purple-500" : ""
          } ${
            hasAnswered
              ? i === questions[index].correctAnswer
                ? " bg-lime-400"
                : ""
              : "duration-400 flex w-full justify-center bg-neutral-100  hover:bg-neutral-200"
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
