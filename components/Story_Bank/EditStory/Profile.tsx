export default function Profile() {
  return (
    <div>
      <div className={"bg-white w-full py-20 px-5 md:px-10"}>
        <div
          className={"rounded-md bg-gray-50 mb-8 grid gap-10 grid-cols-5 py-14"}
        >
          <div className="flex justify-center">
            <div
              className={
                "grid relative place-items-center rounded-full bg-white w-36 h-36"
              }
              style={{
                border: "0.5px solid #E0E0E0",
                boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
              }}
            >
              <img
                className={"w-14"}
                src={"/img/story-bank/photo_size.svg"}
                alt={"photo"}
              />
              <div
                className={
                  "w-max rounded-full bg-white grid place-items-center p-2 absolute top-0 right-0"
                }
                style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  className={"w-6"}
                  src={"/img/story-bank/photo_camera.svg"}
                  alt={"photo"}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 px-5">
            <form>
              <div className={"flex items-center justify-between"}>
                <div>
                  <select
                    className={
                      "w-60 focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                    }
                  >
                    <option>Module</option>
                  </select>
                </div>
                <div>
                  <select
                    className={
                      "w-60 focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                    }
                  >
                    <option>Level</option>
                  </select>
                </div>
                <div>
                  <select
                    className={
                      "w-60 focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                    }
                  >
                    <option>Duration</option>
                  </select>
                </div>
              </div>
              <div className={"mt-5"}>
                <input
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                  type={"text"}
                  placeholder={"Title"}
                />
              </div>
              <div className={"mt-5"}>
                <textarea
                  placeholder={"Sub Title"}
                  rows={2}
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                  }
                ></textarea>
              </div>
              <div className={"mt-5"}>
                <textarea
                  placeholder={"Quote"}
                  rows={2}
                  className={
                    "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                  }
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>Profile</h3>
          <form>
            <div className={"mt-5"}>
              <input
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                }
                type={"text"}
                placeholder={"Title"}
              />
            </div>
            <div className={"mt-5"}>
              <textarea
                placeholder={"Sub Title"}
                rows={2}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
              ></textarea>
            </div>
          </form>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Experience
          </h3>
          <form>
            <div className={"mt-5"}>
              <input
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                }
                type={"text"}
                placeholder={"Title"}
              />
            </div>
            <div className={"mt-5"}>
              <textarea
                placeholder={"Description"}
                rows={2}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
              ></textarea>
            </div>
          </form>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Success Story
          </h3>
          <form>
            <div className={"mt-5"}>
              <input
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                }
                type={"text"}
                placeholder={"Title"}
              />
            </div>
            <div className={"mt-5"}>
              <textarea
                placeholder={"Description"}
                rows={2}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
              ></textarea>
            </div>
          </form>
        </div>
        <div className={"flex justify-center mt-5"}>
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
    </div>
  );
}
