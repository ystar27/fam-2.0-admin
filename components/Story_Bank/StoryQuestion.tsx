import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function StoryQuestion({ setCreateStoryIdx }: any) {
  const [noOFQuestion, setNoOfQuestion] = useState(1);
  const [arrQuestions, setArrQuestions] = useState(
    Array.from(Array(noOFQuestion).keys())
  );

  useEffect(() => {
    setArrQuestions(Array.from(Array(noOFQuestion).keys()));
  }, [noOFQuestion]);

  return (
    <div className={"flex relative w-full flex-col mt-10"}>
      {arrQuestions.map((e, i) => (
        <Question
          key={i}
          current={i + 1}
          noOFQuestion={noOFQuestion}
        />
      ))}
      <div className={"absolute bottom-14 -right-4"}>
        {noOFQuestion > 1 && arrQuestions.length > 1 && (
          <button
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
            onClick={() => setNoOfQuestion(noOFQuestion - 1)}
            className={
              "text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center mb-3"
            }
          >
            -
          </button>
        )}
        <button
          style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
          onClick={() => setNoOfQuestion(noOFQuestion + 1)}
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
          onClick={() => setCreateStoryIdx(2)}
          className={
            "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
