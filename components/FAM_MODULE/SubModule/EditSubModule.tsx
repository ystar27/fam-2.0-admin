import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../services/axios";
import { notificationsContext } from "../../../pages/_app";

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
  const notification = useContext(notificationsContext);
  const [description, setDescription] = useState(
    activeSubModule.description || ""
  );
  const [date, setSubModuleDate] = useState({
    start: activeSubModule.date?.start,
    end: activeSubModule.date?.end,
  });
  const slideRef = useRef();

  console.log(activeSubModule);

  useEffect(() => {
    if (date.start && date.end) {
      let startDate = new Date(date.start);
      let endDate = new Date(date.end);

      let difference = Math.abs(endDate - startDate);
      let days = difference / (1000 * 3600 * 24);
      setDuration(parseInt(days));
    }
  }, [date.end, date.start]);

  const editSubModule = () => {
    axios
      .patch(`/module/submodule/${activeSubModule._id}`, {
        date,
        description,
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
      })
      .catch((error) => {
        setEditSubModule(false);
        notification.warn({
          message: "Sub Module Error",
          description: "Unable to update module",
        });
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
                type={"text"}
                className={
                  "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                }
                placeholder={"Description"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* <div className={"mb-6"}>
              <input
                required
                type={"number"}
                onChange={(e) => setDuration(e.target.value)}
                className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                placeholder={"15 - days"}
                value={duration}
              />
            </div> */}
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
                  value={date.start}
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
