import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Error({ setCreateModule }: any) {
  return (
    <div
      className={"w-full h-full absolute"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        className={
          "max-w-lg min-w-min w-full right-0 md:right-10 absolute top-40 bg-white flex flex-col"
        }
      >
        <div className={"p-5 flex items-center justify-between bg-gray-50"}>
          <h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
            Create New Module
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setCreateModule(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <div className={"flex flex-col"}>
            <div className={"mb-6"}>
              <input
                type={"text"}
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
                placeholder={"Module Name"}
              />
            </div>
            <div className={"mb-6"}>
              <input
                type={"text"}
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
                placeholder={"Duration"}
              />
            </div>
            <div className={"mb-6"}>
              <select
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
              >
                <option className={'hover:bg-purple-400'}>Module Status</option>
                <option className={'hover:bg-purple-400'}>Private</option>
                <option className={'hover:bg-purple-400'}>Public</option>
              </select>
            </div>
            <div className={"mb-6"}>
              <button
                className={
                  "w-full text-white p-3 px-5 rounded text-lg font-semibold"
                }
                style={{ backgroundColor: "#B569D4" }}
              >
                Submit Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
