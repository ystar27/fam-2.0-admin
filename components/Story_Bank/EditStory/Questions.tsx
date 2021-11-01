import QuestionItem from "./QuestionItem";

const initialQuestion = {
  question: "",
  options: [
    {
      label: "",
      answer: "",
    },
    {
      label: "",
      answer: "",
    },
    {
      label: "",
      answer: "",
    },
    {
      label: "",
      answer: "",
    },
  ],
  correct: "",
  theory: "",
};

export default function Questions({
  activeStory,
  setActiveStory,
  saveEdit,
}: any) {
  const handleOptionChange = (i, questionIdx, e) => {
    setActiveStory({
      ...activeStory,
      questions: activeStory.questions.map((question, questIdx) =>
        questIdx === questionIdx
          ? {
              ...question,
              options: question.options.map((option, idx) =>
                option._id === i
                  ? {
                      ...option,
                      [e.target.name]: e.target.value,
                    }
                  : option
              ),
            }
          : question
      ),
    });
  };

  const updateQA = (questionIdx, e) => {
    setActiveStory({
      ...activeStory,
      questions: activeStory.questions.map((question, questIdx) =>
        questIdx === questionIdx
          ? { ...question, [e.target.name]: e.target.value }
          : question
      ),
    });
  };

  return (
    <div>
      <div className={"bg-white w-full py-20 px-5 md:px-10"}>
        <div>
          {activeStory.questions.map((e, i) => (
            <QuestionItem
              key={i}
              item={e}
              index={i}
              saveEdit={saveEdit}
              updateQA={updateQA}
              handleOptionChange={handleOptionChange}
            />
          ))}
        </div>
        {/* <div className={"grid grid-cols-2 gap-5"}>
          <button
            className={
              "px-4 py-3 w-full bg-gray-50 text-lg rounded text-gray-600 font-mono font-semibold focus:outline-none"
            }
            onClick={() => {
              setActiveStory({
                ...activeStory,
                questions: activeStory.questions.filter(
                  (e, i) => i + 1 !== activeStory.questions.length
                ),
              });
            }}
          >
            Remove Question -
          </button>
          <button
            className={
              "px-4 py-3 w-full bg-gray-50 text-lg rounded text-gray-600 font-mono font-semibold focus:outline-none"
            }
            onClick={() => {
              setActiveStory({
                ...activeStory,
                questions: [...activeStory.questions, initialQuestion],
              });
            }}
          >
            Add Question +
          </button>
        </div> */}
      </div>
    </div>
  );
}
