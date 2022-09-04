import React, { useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Field from "./Field";
import axios from "../../services/axios";
import { notificationsContext } from "../../pages/_app";

export default function CreateModule({
  module,
  setModule,
  setCreateModule,
  setSuccessAlert,
  setMessage,
}: any) {
  const [fields, setFields] = useState([""]);
  const [moduleName, setModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [isValidated, setValidated] = useState(false);
  const slideRef = useRef();
  const notification = useContext(notificationsContext);
  const [date, setSubModuleDate] = useState({
    start: "",
    end: "",
  });

  const onChange = (idx, e) => {
    setFields(fields.map((value, id) => (idx === id ? e.target.value : value)));
  };

  const CreateModule = () => {

    if (!moduleName || !fields || !description || !date.start || !date.end) {

      notification.warn({
        message: "Module Creation Error",
        description: "Please fill all fields!",
      });

    } else {

      let today = new Date();
			let unixToday = today.getTime();
      let unixModuleStartDate = new Date(date.start).getTime();
			let unixModuleEndDate = new Date(date.end).getTime();
      let month = today.getMonth() < 9 ? `0${today.getMonth()+1}` : `${today.getMonth()+1}`;
      let todayDate = `${today.getFullYear()}-${month}-${today.getDate()}`;


      if (unixModuleStartDate < unixToday || unixModuleEndDate < unixToday || unixModuleEndDate < unixModuleStartDate) {
        notification.warn({
          message: "Module Creation Error",
          description: "Selected Date range is not valid",
        });     
      }
      else {
        axios
          .post("/module", { name: moduleName, field: fields, description, date: date })
          .then((res) => {
            setMessage("Module created successfully");
            setCreateModule(false);
            setSuccessAlert(true);
            setModule([res.data.data, ...module]);
          });
      }
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              CreateModule();
            }}
          >
            <div className={"flex flex-col"}>
              <div className={"mb-6"}>
                <input
                  type={"text"}
                  onChange={(e) => setModuleName(e.target.value)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                  placeholder={"Module Name"}
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
              <div className={"flex flex-col last:mb-14 relative"}>
                {fields.map((e, idx) => (
                  <Field
                    value={fields[idx]}
                    onChange={onChange}
                    isValidated={isValidated}
                    idx={idx}
                    key={idx}
                  />
                ))}
                <div className={"absolute bottom-0 -right-4"}>
                  <button
                    type="button"
                    onClick={() => setFields([...fields, ""])}
                    style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
                    className={
                      "text-gray-600 bg-white text-2xl font-semibold rounded-full w-10 h-10 grid place-items-center mb-3"
                    }
                  >
                    +
                  </button>
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
                  Submit Module
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
