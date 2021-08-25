import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StoryFinish from "./StoryFinish";
import StoryInfo from "./StoryInfo";
import StoryQuestion from "./StoryQuestion";

export default function CreateStory({ setAction }: any) {
  const [createStoryIdx, setCreateStoryIdx] = useState(0);

  const createDisplay = () => {
    if (createStoryIdx == 0)
      return <StoryInfo setCreateStoryIdx={setCreateStoryIdx} />;
    else if (createStoryIdx == 1)
      return <StoryQuestion setCreateStoryIdx={setCreateStoryIdx} />;
    else
      return (
        <StoryFinish
          setAction={setAction}
          setCreateStoryIdx={setCreateStoryIdx}
        />
      );
  };

  const done = () => (
    <div
      className={"p-0.5 rounded-full"}
      style={{ backgroundColor: "#B569D4" }}
    >
      <div
        style={{ backgroundColor: "#B569D4" }}
        className={"rounded-full p-1 text-xs text-white border border-white"}
      >
        <img
          className={"h-3 w-3"}
          src={"/img/story-bank/check.svg"}
          alt={"checked"}
        />
      </div>
    </div>
  );

  return (
    <div>
      <div className={"flex items-center justify-end mb-3"}>
        <button
          onClick={() => setAction(1)}
          className={"py-2 px-4 font-light flex items-center"}
          style={{ color: "#B569D4" }}
        >
          <FontAwesomeIcon className={"h-4 mr-2"} icon={faArrowLeft} /> Back
        </button>
      </div>
      <div
        className={"w-full bg-white rounded py-6 mb-32"}
        style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
      >
        <div className={"p-5 px-8"}>
          <div
            className={
              "w-full mb-5 uppercase text-sm text-gray-600 grid grid-cols-3"
            }
          >
            <h5>Fill out Story Information</h5>
            <div className={"flex justify-center items-center"}>
              <h5>Fill out Story Questions</h5>
            </div>
            <div className={"flex justify-end items-center"}>
              <h5>Finished</h5>
            </div>
          </div>
          <div
            className={
              "flex w-full px-5 items-center justify-between text-sm text-gray-600"
            }
          >
            <div className="flex flex-1 items-center">
              <div className={"flex flex-col items-center justify-center"}>
                {createStoryIdx > 0 ? (
                  done()
                ) : (
                  <h5
                    className={
                      "p-1 px-2 rounded-full bg-gray-200 text-xs text-white"
                    }
                  >
                    1
                  </h5>
                )}
              </div>
              <div className="h-0.5 flex-1 bg-gray-300"></div>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              {createStoryIdx > 1 ? (
                done()
              ) : (
                <h5
                  className={
                    "p-1 px-2 rounded-full bg-gray-200 text-xs text-white"
                  }
                >
                  2
                </h5>
              )}
            </div>
            <div className="flex flex-1 items-center">
              <div className="h-0.5 flex-1 bg-gray-300"></div>
              <div className={"flex flex-col items-center justify-center"}>
                <h5
                  className={
                    "p-1 px-2 rounded-full bg-gray-200 text-xs text-white"
                  }
                >
                  3
                </h5>
              </div>
            </div>
          </div>
          <div>{createDisplay()}</div>
        </div>
      </div>
    </div>
  );
}
