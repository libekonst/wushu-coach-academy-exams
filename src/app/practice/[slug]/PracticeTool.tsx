"use client";
import { Course, Question } from "../../data/types";
import { shuffleArray } from "./utils/shuffleArray";
import {
  BiCircle,
  BiHappyHeartEyes,
  BiDizzy,
  BiRightArrowCircle,
  BiRightArrow,
  BiRightArrowAlt,
  BiArrowFromLeft,
  BiChevronRight,
  BiErrorAlt,
  BiErrorCircle,
} from "react-icons/bi";
import cn from "classnames";
import { useCallback, useMemo, useState } from "react";

type Props = {
  questions: Question[];
};

type AnswersMap = Record<Question["id"], Question["options"][0]["id"] | null>;

export function PracticeTool({ questions }: Props) {
  const [answers, setAnswers] = useState(() =>
    questions.reduce<AnswersMap>(
      (record, question) => ({ ...record, [question.id]: null }),
      {}
    )
  );

  const selectAnswer = useCallback(
    (questionId: string, answerId: string) =>
      setAnswers((prev) => ({ ...prev, [questionId]: answerId })),
    []
  );

  const [nextStep, setNextStep] = useState<
    { step: "NEXT_QUESTION"; question: Question } | { step: "COMPLETED" }
  >(() => ({ step: "NEXT_QUESTION", question: questions[0] }));

  const handleNext = () => {
    const nextPendingEntry = Object.entries(answers).find(
      ([, answerId]) => !answerId
    );

    if (!nextPendingEntry) {
      setNextStep({ step: "COMPLETED" });
      return;
    }

    const [questionId] = nextPendingEntry;
    const nextQuestion = questions.find(
      (question) => question.id === questionId
    );

    if (!nextQuestion) {
      setNextStep({ step: "COMPLETED" });
      return;
    }

    setNextStep({ step: "NEXT_QUESTION", question: nextQuestion });
  };

  const score = useMemo(() => {
    let total = 0;

    if (nextStep.step !== "COMPLETED") return total;

    questions.forEach((question) => {
      const correctAnswer = question.options.find((option) => option.isCorrect);
      if (!correctAnswer) return;

      const hasRepliedCorrectly = answers[question.id] === correctAnswer.id;
      if (hasRepliedCorrectly) {
        total += 1;
      }
    });

    return total;
  }, [answers, nextStep.step, questions]);

  const asnwerRevealed =
    nextStep.step === "NEXT_QUESTION" && Boolean(answers[nextStep.question.id]);

  if (nextStep.step === "NEXT_QUESTION")
    return (
      <div className="px-2 flex flex-col">
        {/* Remaining questions indicator */}
        <ul className="mb-4 w-fit m-auto flex gap-2 flex-wrap">
          {questions.map(({ id }, i) => (
            <li
              key={id}
              className={cn("h-1 rounded-lg transition-all", {
                "bg-slate-200 w-[5px]": nextStep.question.id !== id,
                "bg-slate-800 w-[10px]": nextStep.question.id === id,
              })}
            />
          ))}
        </ul>
        <QuestionCard
          question={nextStep.question}
          answers={answers}
          setAnswer={selectAnswer}
          key={nextStep.question.id}
        />
        {asnwerRevealed && (
          <button
            onClick={handleNext}
            className="mt-5 mr-2 px-4 py-2 ml-auto bg-slate-100 font-medium text-sky-800 flex justify-center items-center rounded-lg"
          >
            <div>Επόμενο</div>
            <div>
              <BiRightArrowAlt color="currentColor" />
            </div>
          </button>
        )}
      </div>
    );

  if (nextStep.step === "COMPLETED")
    return (
      <div className="px-2 flex flex-col">
        <div className="mb-4 ml-auto text-2xl text-slate-800">
          <span>Score:</span> <span className="text-slate-600">{score}</span>
          <span>/{questions.length}</span>
        </div>

        <ul className="flex flex-col space-y-10">
          {questions.map((question) => (
            <li key={question.id}>
              <QuestionCard
                question={question}
                answers={answers}
                setAnswer={() => null}
              />
            </li>
          ))}
        </ul>
      </div>
    );

  return null;
}

type QuestionCardProps = {
  question: Question;
  answers: AnswersMap;
  setAnswer: (questionId: string, answerId: string) => void;
};
function QuestionCard(props: QuestionCardProps) {
  const { answers, question, setAnswer } = props;

  const selectedOption = answers[question.id];
  const answerRevealed = Boolean(selectedOption);

  return (
    <div>
      <p className="font-bold text-base mb-3">{question.text}</p>
      <ol className="space-y-2">
        {question.options.map((option) => {
          const Icon = () => {
            if (!answerRevealed) return <BiCircle color="currentColor" />;

            if (selectedOption === option.id && option.isCorrect)
              return <BiHappyHeartEyes color="currentColor" />;

            if (selectedOption === option.id && !option.isCorrect)
              return <BiErrorAlt color="currentColor" />;

            if (selectedOption !== option.id && option.isCorrect)
              return <BiChevronRight color="currentColor" />;

            return <BiCircle color="currentColor" />;
          };

          const getDynamicClassName = () => {
            if (!answerRevealed) return "text-slate-800";

            if (option.isCorrect)
              return "text-green-950 border-green-900 bg-green-50 font-medium";

            if (option.id === selectedOption && !option.isCorrect)
              return "text-red-950 border-red-900 bg-red-50";

            return "text-slate-500";
          };

          return (
            <li
              key={option.id}
              className={cn(
                "border rounded-md transition-colors text-sm",
                getDynamicClassName()
              )}
            >
              <button
                onClick={() => {
                  if (answerRevealed) return;

                  setAnswer(question.id, option.id);
                }}
                className={cn(
                  "flex items-center justify-start space-x-2 px-4 py-3 w-full transition-transform",
                  {
                    "translate-x-2": answerRevealed && option.isCorrect,
                    "cursor-default": answerRevealed,
                  }
                )}
              >
                <div>
                  <Icon />
                </div>
                <div className="text-left">{option.text}</div>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
