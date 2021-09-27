import React, { useState } from "react";
import Question from "./Question";

export default function StoryQuestion({
  setCreateStoryIdx,
  initialQuestion,
  questions,
  setQuestions,
}: any) {
  const [error, setError] = useState(false);

  const validateForm = () => {
    return questions.every((question) => {
      if (question.theory) return true;
      else
        return (
          !!question.question &&
          question.options.every((option) => !!option.answer && !!option.label)
        );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setQuestions(questions);
      setCreateStoryIdx(2);
    } else setError(true);
  };

  const handleQCChange = (questionIdx, e) => {
    setQuestions(
      questions.map((question, questIdx) =>
        questIdx === questionIdx
          ? { ...question, [e.target.name]: e.target.value }
          : question
      )
    );
  };

  const handleOptionChange = (i, questionIdx, e) => {
    setQuestions(
      questions.map((question, questIdx) =>
        questIdx === questionIdx
          ? {
              ...question,
              options: question.options.map((option, idx) =>
                idx === i
                  ? {
                      ...option,
                      [e.target.name]: e.target.value,
                    }
                  : option
              ),
            }
          : question
      )
    );
  };

  return (
    <div className={"flex relative w-full flex-col mt-10"}>
      <form onSubmit={handleSubmit}>
        {questions.map((question, i) => (
          <Question
            key={i}
            index={i}
            error={error}
            current={i + 1}
            question={question}
            value={questions[i]}
            questions={questions}
            setQuestions={setQuestions}
            handleOptionChange={handleOptionChange}
            handleQCChange={handleQCChange}
          />
        ))}

        <div className={"absolute bottom-14 -right-4"}>
          {questions.length > 1 && (
            <button
              type="button"
              style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
              onClick={() => {
                questions.splice(-1);
                setQuestions([...questions]);
              }}
              className={
                "text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center mb-3"
              }
            >
              -
            </button>
          )}
          <button
            type="button"
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              setError(false);
              setQuestions([...questions, initialQuestion]);
            }}
            className={
              "text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center"
            }
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "#EFE3F5", color: "#B569D4" }}
            onClick={() => setCreateStoryIdx(0)}
            className={
              "px-5 py-2 mr-4 text-lg rounded text-white font-semibold focus:outline-none"
            }
          >
            Back
          </button>
          <button
            style={{ backgroundColor: "#B569D4" }}
            type={"submit"}
            className={
              "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
            }
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
