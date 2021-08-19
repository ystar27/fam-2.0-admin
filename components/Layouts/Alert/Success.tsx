import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Success({ message }: any) {
  return (
    <div
      className={"w-full h-full absolute grid place-items-center"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        className={
          "max-w-lg relative py-10 min-w-min w-full bg-white flex items-center flex-col rounded"
        }
      >
        <div className={"absolute -top-2 -right-2"}>
          <button
            className={"p-3 bg-white"}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <img
          className={"h-20 w-20"}
          src={"/img/fam-module/check.svg"}
          alt={"Success"}
        />
        <h2 className={"text-lg text-gray-700 py-3 font-semibold"}>
          {message}
        </h2>
        <div className={"w-full flex items-center justify-center my-2"}>
          <button
            className={"px-4 py-2 text-white font-semibold rounded"}
            style={{ backgroundColor: "#B569D4" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
