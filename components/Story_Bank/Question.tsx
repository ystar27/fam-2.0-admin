import OptionField from "./OptionField";

export default function Question({
  index,
  error,
  current,
  questions,
  handleOptionChange,
  handleQCChange,
  question: { options },
}: any) {
  return (
    <div className={"rounded-md bg-gray-50 mb-8 relative py-14 px-5 md:px-10"}>
      <div className={"mb-5"}>
        <h3 className={"text-lg font-semibold"}>Question {current}</h3>
        <div className={""}>
          <input
            className={
              "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
            }
            name={"question"}
            type={"text"}
            placeholder={"Question"}
            value={questions[index]?.question}
            onChange={(e) => handleQCChange(index, e)}
          />
          {!questions[index].question && error && (
            <small className="block text-red-600">Field is required</small>
          )}
        </div>
      </div>
      <div className={"mb-3"}>
        <h3 className={"text-lg font-semibold"}>Question {current} Options</h3>
        {options.map((option, i) => (
          <OptionField
            key={i}
            index={i}
            error={error}
            option={option}
            questionIdx={index}
            onChange={handleOptionChange}
          />
        ))}
      </div>
      <div className={""}>
        <input
          className={
            "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
          }
          type={"text"}
          name={"correct"}
          placeholder={"Correct label"}
          value={questions[index]?.correct}
          onChange={(e) => handleQCChange(index, e)}
        />
        {!questions[index].correct && error && (
          <small className="block text-red-600">Field is required</small>
        )}
      </div>
      <div className={"mt-3"}>
        <textarea
          rows={2}
          name={"theory"}
          onChange={(e) => handleQCChange(index, e)}
          placeholder={"Theory Question"}
          value={questions[index]?.theory}
          className={
            "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
          }
        ></textarea>
        {!questions[index].theory &&
          !questions[index].question &&
          !questions[index].correct &&
          error && (
            <small className="block text-red-600">Field is required</small>
          )}
      </div>
      <div className={"absolute bottom-14 -right-4"}>
        {current !== questions.length && (
          <button
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
            className={
              "text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center mb-3"
            }
          >
            -
          </button>
        )}
      </div>
    </div>
  );
}
