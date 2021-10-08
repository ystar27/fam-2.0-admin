import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Field from "./Field";
import axios from "../../services/axios";

export default function AddModuleField({ setViewModuleField, moduleId }: any) {
  const [fields, setFields] = useState([""]);

  useEffect(() => {
    axios.get(`/module/field/${moduleId}`).then((res) => {
      setFields(res.data.data.fields);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
      >
        <div className={"p-5 flex items-center justify-between bg-gray-50"}>
          <h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
            Modules Fields
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setViewModuleField(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <div className={'mb-6'}>
            {fields.map((e, i) => (
              <div key={i} className={"mb-i"}>
                <div
                  className={
                    "pb-4 pt-2 w-full text-gray-500 border-b focus:outline-none text-lg border-purple-500"
                  }
                >
                  {e}
                </div>
              </div>
            ))}
          </div>
          <div className={"flex flex-col relative last:mb-14"}>
            <div className={"mb-6"}>
              <button
                className={
                  "w-full text-white p-2 px-5 rounded text-lg font-semibold"
                }
                style={{ backgroundColor: "#B569D4" }}
                onClick={() => setViewModuleField(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
