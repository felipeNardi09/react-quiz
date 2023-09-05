import { useQuestions } from "@/context/QuestionsContext";
import Button from "./Button";

export default function NextQuestion() {
  const { numberOfQuestions, index, answer, dispatch } = useQuestions();

  if (answer === null)
    return (
      <Button type="button" disabled={true} onClick={() => null}>
        Next
      </Button>
    );

  if (index < numberOfQuestions - 1)
    return (
      <Button type="button" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </Button>
    );

  if (index === numberOfQuestions - 1)
    return (
      <Button type="button" onClick={() => dispatch({ type: "results" })}>
        Results
      </Button>
    );
}
