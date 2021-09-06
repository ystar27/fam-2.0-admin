import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../services/axios";

export default function EditSubModule({
  setEditSubModule,
  setSuccessAlert,
  setMessage,
  subModules,
  setSubModules,
  activeSubModule,
}: any) {
  const [subModuleName, setSubModuleName] = useState(activeSubModule.name);
  const [duration, setDuration] = useState(activeSubModule.duration);
  const slideRef = useRef();

  const editSubModule = () => {
    axios
      .patch(`/module/submodule/${activeSubModule._id}`, {
        name: subModuleName,
        duration: Number(duration),
      })
      .then((res) => {
        setMessage("Sub Module updated successfully");
        setEditSubModule(false);
        setSuccessAlert(true);
        let edited = subModules.map((e) => {
          if (e._id == res.data.data._id) {
            return res.data.data;
          } else {
            return e;
          }
        });
        setSubModules(edited);
      });
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
            Edit Sub Module
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setEditSubModule(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <div className={"flex flex-col"}>
            <div className={"mb-6"}>
              <input
                required
                type={"text"}
                onChange={(e) => setSubModuleName(e.target.value)}
                className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                placeholder={"Sub-Module Name"}
                value={subModuleName}
              />
            </div>
            <div className={"mb-6"}>
              <input
                required
                type={"number"}
                onChange={(e) => setDuration(e.target.value)}
                className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                placeholder={"15 - days"}
                value={duration}
              />
            </div>

            <div className={"mb-6"}>
              <button
                className={
                  "w-full text-white p-2 px-5 rounded text-lg font-semibold"
                }
                style={{ backgroundColor: "#B569D4" }}
                onClick={() => editSubModule()}
              >
                Submit Sub-Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
