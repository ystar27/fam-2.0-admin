export default function Question({ current, noOFQuestion }: any) {
  return (
    <div className={"rounded-md bg-gray-50 mb-8 relative py-14 px-5 md:px-10"}>
      <form>
        <div className={"mb-5"}>
          <h3 className={"text-lg font-semibold"}>Question {current}</h3>
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
          <h3 className={"text-lg font-semibold"}>
            Question {current} Options
          </h3>
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
          <h3 className={"text-lg font-semibold"}>Challenge {current}</h3>
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
      <div className={"absolute bottom-14 -right-4"}>
        {noOFQuestion > 1 && current !== noOFQuestion && (
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
