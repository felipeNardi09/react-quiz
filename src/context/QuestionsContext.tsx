"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

enum IActionType {
  dataReceived = "dataReceived",
  dataFailed = "dataFailed",
  active = "active",
  newAnswer = "newAnswer",
  nextQuestion = "nextQuestion",
  results = "results",
  restart = "restart",
}

interface IAction {
  type: IActionType;
  payload?: any;
}

export interface IQuestion {
  question: string;
  options: [string];
  correctAnswer: number;
  difficulty: string;
  points: number;
}

interface IInitialState {
  currentStatus: string;
  questions: [];
  answer: number | null;
  index: number;
  points: number;
}

interface QuestionsProviderProps {
  children: ReactNode;
}

interface IQuestionsContextValue {
  questions: [IQuestion];
  index: number;
  currentStatus: string;
  answer: number | null;
  dispatch: React.Dispatch<any>;
  numberOfQuestions: number;
  points: number;
  maxPoints: number;
}

const initialState: IInitialState = {
  currentStatus: "loading",
  questions: [],
  index: 0,
  answer: null,
  points: 0,
};

const reducer = function (state: IInitialState, action: IAction) {
  switch (action.type) {
    case IActionType.dataReceived:
      return {
        ...state,
        currentStatus: "start",
        questions: action.payload,
      };
    case IActionType.dataFailed:
      return { ...state, currentStatus: "error" };
    case IActionType.active:
      return { ...state, currentStatus: "active" };
    case IActionType.newAnswer:
      const question: IQuestion = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case IActionType.nextQuestion:
      return { ...state, index: state.index + 1, answer: null };
    case "results":
      return { ...state, currentStatus: "results" };
    case "restart":
      return {
        ...state,
        currentStatus: "start",
        index: 0,
        answer: null,
        points: 0,
      };
    default:
      throw new Error("Perform a known action");
  }
};

const QuestionsContext = createContext<IQuestionsContextValue | null>(null);

function QuestionsProvider({ children }: QuestionsProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, index, currentStatus, answer, points } = state;

  const numberOfQuestions = questions.length;

  const maxPoints = questions.reduce(
    (acc: number, cur: IQuestion) => acc + cur.points,
    0,
  );

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3001/questions");

        const data = await res.json();

        dispatch({ type: IActionType.dataReceived, payload: data });
      } catch (error) {
        dispatch({ type: IActionType.dataFailed });
      }
    }

    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        index,
        currentStatus,
        answer,
        dispatch,
        numberOfQuestions,
        points,
        maxPoints,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }

  return context;
}
export { QuestionsProvider, useQuestions };
