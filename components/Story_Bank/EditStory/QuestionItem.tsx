export default function QuestionItem() {
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
            />
          </div>
        </div>
        <div className={"mb-3"}>
          <h3 className={"text-lg font-semibold"}>Question Options</h3>
          <div className={"grid grid-cols-10 gap-5"}>
            <div className={"flex flex-col"}>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-dashed border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Label"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-dashed border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Label"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-dashed border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Label"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-dashed border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Label"}
                />
              </div>
            </div>
            <div className={"col-span-9 flex flex-col"}>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Answer"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Answer"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Answer"}
                />
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Answer"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className={"text-lg font-semibold"}>Challenge </h3>
          <div className={"mt-3"}>
            <textarea
              placeholder={"Theory Question"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
            ></textarea>
          </div>
        </div>
      </form>
      <div className={'mt-5 flex items-center justify-end'}>
        <button
          style={{ backgroundColor: "#EB5757" }}
          className={
            "px-4 mr-3 py-1 text-lg rounded text-white focus:outline-none"
          }
        >
          Delete
        </button>
        <button
          style={{ backgroundColor: "#B569D4" }}
          className={
            "px-4 py-1 text-lg rounded text-white focus:outline-none"
          }
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
