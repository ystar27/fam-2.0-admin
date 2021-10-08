import React from "react";

interface Props {}

const OptionField = ({
  error,
  index,
  onChange,
  questionIdx,
  option: { label, answer },
}: any) => {
  return (
    <div className={"grid mt-5 grid-cols-10 gap-5"}>
      <div>
        <input
          className={
            "w-full focus:outline-none text-lg border-b border-dashed border-gray-300 text-gray-700 bg-gray-50 pb-4"
          }
          type={"text"}
          value={label}
          name="label"
          onChange={(e) => onChange(index, questionIdx, e)}
          placeholder={"Label"}
        />
        {!label && error && (
          <small className="block text-red-600">Field is required</small>
        )}
      </div>
      <div className={"col-span-9 flex flex-col"}>
        <div className={""}>
          <input
            className={
              "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
            }
            name="answer"
            value={answer}
            onChange={(e) => onChange(index, questionIdx, e)}
            type={"text"}
            placeholder={"Answer"}
          />
          {!answer && error && (
            <small className="block text-red-600">Field is required</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionField;
