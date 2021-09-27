import OptionField from "../OptionField";

export default function QuestionItem({
  item,
  index,
  saveEdit,
  updateQA,
  handleOptionChange,
}: any) {
  const { correct, question, theory, _id } = item;

  return (
    <div className={"rounded-md bg-gray-50 mb-8 relative py-14 px-5 md:px-10"}>
      <form>
        <div className={"mb-5"}>
          <h3 className={"text-lg font-semibold"}>Question </h3>
          <div className={""}>
            <input
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
              }
              type={"text"}
              placeholder={"Question"}
              name={"question"}
              onChange={(e) => updateQA(index, e)}
              value={question}
            />
          </div>
        </div>
        <div className={"mb-3"}>
          <h3 className={"text-lg font-semibold"}>Question Options</h3>
          {item.options.map((option, i) => (
            <OptionField
              key={i}
              index={option._id}
              error={false}
              option={option}
              questionIdx={index}
              onChange={handleOptionChange}
            />
          ))}
        </div>
        <div>
          <h3 className={"text-lg font-semibold"}>Answer </h3>
          <div className={"mt-3"}>
            <textarea
              onChange={(e) => updateQA(index, e)}
              placeholder={"eg. Label A"}
              name={"correct"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              value={correct}
            ></textarea>
          </div>
        </div>
        <div>
          <h3 className={"text-lg font-semibold"}>Theory </h3>
          <div className={"mt-3"}>
            <textarea
              onChange={(e) => updateQA(index, e)}
              placeholder={"eg. Label A"}
              name={"theory"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              value={theory}
            ></textarea>
          </div>
        </div>
      </form>
      <div className={"mt-5 flex items-center justify-end"}>
        {/* <button
          style={{ backgroundColor: "#EB5757" }}
          className={
            "px-4 mr-3 py-1 text-lg rounded text-white focus:outline-none"
          }
        >
          Delete
        </button> */}
        <button
          style={{ backgroundColor: "#B569D4" }}
          className={"px-4 py-1 text-lg rounded text-white focus:outline-none"}
          onClick={() => saveEdit()}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
