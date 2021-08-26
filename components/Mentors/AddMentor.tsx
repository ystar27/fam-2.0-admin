import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRef } from "react";

export default function AddMentor({ setAddMentor }: any) {
  const [open, setOpen] = useState(false);
  const slideRef = useRef();

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        ref={slideRef}
        className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
      >
        <div className={"p-5 flex items-center justify-between bg-gray-50"}>
          <h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
            Add New Mentor
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setAddMentor(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <div className={"flex flex-col"}>
            <div className="flex justify-center mb-5">
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
            <div className={"mb-6"}>
              <input
                type={"text"}
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
                placeholder={"Full Name"}
              />
            </div>
            <div className={"mb-6"}>
              <select
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
              >
                <option className={"hover:bg-purple-400"}>Course</option>
              </select>
            </div>
            <div className={"mb-6"}>
              <button
                className={
                  "w-full text-white p-3 px-5 rounded text-lg font-semibold"
                }
                style={{ backgroundColor: "#B569D4" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
