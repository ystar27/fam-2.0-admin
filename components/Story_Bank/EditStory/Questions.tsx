import QuestionItem from "./QuestionItem";

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
    </div>
  );
}
