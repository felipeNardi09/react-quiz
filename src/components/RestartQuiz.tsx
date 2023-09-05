import { useQuestions } from "@/context/QuestionsContext";
import Button from "./Button";

export default function RestartQuiz() {
  const { dispatch } = useQuestions();

  return (
    <Button type="button" onClick={() => dispatch({ type: "restart" })}>
      Restart
    </Button>
  );
}
