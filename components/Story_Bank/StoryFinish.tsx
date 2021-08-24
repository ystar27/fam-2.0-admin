export default function StoryFinish() {
  return (
    <div className={"flex w-full flex-col mt-10"}>
      <div
        className={
          "rounded-md relative bg-gray-50 mb-8 text-center py-14 px-5 md:px-10"
        }
      >
        <h3 className={'text-lg text-gray-600 font-extralight mb-3'}>You are almost done !</h3>
        <h2 style={{color: "#B569D4"}} className={'text-lg font-normal md:text-xl mb-4'}>If you have verified all your entries, go ahead to submit</h2>
        <button
          style={{ backgroundColor: "#B569D4" }}
          className={
            "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Submit Story
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: "#EFE3F5", color: "#B569D4" }}
          className={
            "px-5 py-2 mr-4 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Back
        </button>
        <button
          style={{ backgroundColor: "#B569D4" }}
          className={
            "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
