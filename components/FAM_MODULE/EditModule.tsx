import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Field from "./Field";
import axios from "../../services/axios";

export default function EditModule({
  module,
  setModule,
  setEditModule,
  setSuccessAlert,
  setMessage,
  message,
  moduleId,
}: any) {
  const [moduleName, setModuleName] = useState(message);
  const [description, setDescription] = useState("");
  const [currentMdl, setCurrentMdl] = useState({});
  const slideRef = useRef();

  useEffect(() => {
    setCurrentMdl(module.filter((e) => e._id == moduleId)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UpdateModule = () => {
    axios.patch(`/module/${moduleId}`, { ...currentMdl }).then((res) => {
      setMessage("Module updated");
      setEditModule(false);
      setSuccessAlert(true);
      let updated = module.map((e) => {
        if (e._id == res.data.data._id) {
          return res.data.data;
        } else {
          return e;
        }
      });
      setModule(updated);
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
            Edit Module
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setEditModule(false)}
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
                value={currentMdl?.name}
                onChange={(e) =>
                  setCurrentMdl({ ...currentMdl, name: e.target.value })
                }
              />
            </div>
            <div className={"mb-6"}>
              <textarea
                placeholder={"Description"}
                rows={1}
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
                value={currentMdl?.description}
                onChange={(e) =>
                  setCurrentMdl({ ...currentMdl, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className={"mb-6"}>
              <button
                className={
                  "w-full text-white p-3 px-5 rounded text-lg font-semibold"
                }
                style={{ backgroundColor: "#B569D4" }}
                onClick={() => UpdateModule()}
              >
                Update Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
