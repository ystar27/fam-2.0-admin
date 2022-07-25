import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../../pages/_app";
import axios from "../../../services/axios";

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();

  var mmChars = mm.split("");
  var ddChars = dd.split("");

  return (
    yyyy +
    "-" +
    (mmChars[1] ? mm : "0" + mmChars[0]) +
    "-" +
    (ddChars[1] ? dd : "0" + ddChars[0])
  );
}

export default function CreateSubModule({
  subModules,
  setSubModules,
  setCreateSubModule,
  setSuccessAlert,
  setMessage,
  moduleId,
}: any) {
  const [subModuleName, setSubModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [isValidated, setValidated] = useState(false);
  const [duration, setDuration] = useState();
  const notification = useContext(notificationsContext);
  const slideRef = useRef();
  const [date, setSubModuleDate] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    if (date.start && date.end) {
      let startDate = new Date(date.start);
      let endDate = new Date(date.end);

      let difference = Math.abs(endDate - startDate);
      let days = difference / (1000 * 3600 * 24);
      setDuration(parseInt(days));
    }
  }, [date.end, date.start]);

  const CreateSubModule = () => {
    if (subModuleName && date.start && date.end) {
      axios
        .post(`/module/submodule/${moduleId}`, {
          name: subModuleName,
          duration: Number(duration) + 1,
          description: description || "",
          date: date,
        })
        .then((res) => {
          setMessage("Sub Module created successfully");
          setCreateSubModule(false);
          setSuccessAlert(true);
          subModules.length > 0
            ? setSubModules([res.data.data, ...subModules])
            : setSubModules([res.data.data]);
        })
        .catch((error) => {
          setCreateSubModule(false);
          notification.warn({
            message: "Sub Module Error",
            description: "Unable to create sub-module",
          });
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
                <textarea
                  placeholder={"Description"}
                  rows={1}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className={"grid grid-cols-2 gap-5"}>
                <div className={"mb-6"}>
                  <label
                    htmlFor={"start"}
                    className={"text-xs font-mono text-gray-700"}
                  >
                    Start date
                  </label>
                  <input
                    name={"start"}
                    type={"date"}
                    onChange={(e) =>
                      setSubModuleDate({ ...date, start: e.target.value })
                    }
                    className="pb-4 pt-2 w-full font-mono text-gray-500 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                    placeholder={"15 - days"}
                  />
                </div>
                <div className={"mb-6"}>
                  <label htmlFor={"end"} className={"text-xs text-gray-700"}>
                    End date
                  </label>
                  <input
                    name={"end"}
                    type={"date"}
                    value={date.end}
                    onChange={(e) =>
                      setSubModuleDate({ ...date, end: e.target.value })
                    }
                    className="pb-4 pt-2 w-full font-mono text-gray-500 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                    placeholder={"15 - days"}
                  />
                </div>
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
