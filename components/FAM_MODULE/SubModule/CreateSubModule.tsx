import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../services/axios";

export default function CreateSubModule({
  subModules,
  setSubModules,
  setCreateSubModule,
  setSuccessAlert,
  setMessage,
  moduleId,
}: any) {
  const [subModuleName, setSubModuleName] = useState("");
  const [isValidated, setValidated] = useState(false);
  const [duration, setDuration] = useState();
  const slideRef = useRef();

  const CreateSubModule = () => {
    if (duration && subModuleName) {
      axios
        .post(`/module/submodule/${moduleId}`, {
          name: subModuleName,
          duration: Number(duration),
        })
        .then((res) => {
          setMessage("Module created successfully");
          setCreateSubModule(false);
          setSuccessAlert(true);
          subModules.length > 0
            ? setSubModules([res.data.data, ...subModules])
            : setSubModules([res.data.data]);
        });
    } else {
      setValidated(true);
    }
  };

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
            Create Sub Module
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setCreateSubModule(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              CreateSubModule();
            }}
          >
            <div className={"flex flex-col"}>
              <div className={"mb-6"}>
                <input
                  type={"text"}
                  onChange={(e) => setSubModuleName(e.target.value)}
                  className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  placeholder={"Sub-Module Name"}
                />
              </div>
              <div className={"mb-6"}>
                <input
                  type={"number"}
                  onChange={(e) => setDuration(e.target.value)}
                  className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  placeholder={"15 - days"}
                />
              </div>
              <div className={"mb-6"}>
                <button
                  className={
                    "w-full text-white p-2 px-5 rounded text-lg font-semibold"
                  }
                  style={{ backgroundColor: "#B569D4" }}
                  type="submit"
                >
                  Submit Sub-Module
                </button>
                {isValidated && (
                  <small className="text-red-600">Please fill all input</small>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
