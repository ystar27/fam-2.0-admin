export default function StoryQuestion() {
  return (
    <div className={"flex w-full flex-col mt-10"}>
      <div className={"rounded-md relative bg-gray-50 mb-8  py-14 px-5 md:px-10"}>
        <form>
          <div className={"mb-5"}>
            <h3 className={"text-lg font-semibold"}>Question 1</h3>
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
            <h3 className={"text-lg font-semibold"}>Question 1 Options</h3>
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
            <h3 className={"text-lg font-semibold"}>Challenge 1</h3>
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
        <div className={'absolute bottom-14 -right-4'}>
            <button style={{boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)"}} className={'text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center mb-3'}>-</button>
            <button style={{boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)"}} className={'text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center'}>+</button>
        </div>
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
          Next
        </button>
      </div>
    </div>
  );
}
