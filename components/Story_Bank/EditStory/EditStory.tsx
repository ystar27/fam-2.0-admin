import React, { useState, useEffect, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../../pages/_app";
import axios from "../../../services/axios";
import Questions from "./Questions";
import Profile from "./Profile";

export const ModuleContext = createContext();
export default function EditStory({
  saveEdit,
  setStoryImg,
  activeStory,
  setEditStory,
  setActiveStory,
}: any) {
  const [idx, setIdx] = useState(0);
  const [modules, setModules] = useState([]);
  const notification = useContext(notificationsContext);

  useEffect(() => {
    axios
      .get("/module")
      .then((res) => {
        setModules(res.data.data);
      })
      .catch((error) => {
        notification.warn({
          message: "Unable to get module",
          description: "Check network connection",
        });
      });
  }, []);

  return (
    <ModuleContext.Provider value={{ modules: modules }}>
      <div className={"my-14"}>
        <div className={"flex items-center justify-between"}>
          <div>
            <button
              onClick={() => {
                setActiveStory({});
                setEditStory(false);
              }}
              className={"py-2 px-4 font-light flex items-center"}
              style={{ color: "#B569D4" }}
            >
              <FontAwesomeIcon className={"h-4 mr-2"} icon={faArrowLeft} />
              Back
            </button>
          </div>
          <div>
            <button
              className={"py-2 px-4 font-light text-base rounded mr-4"}
              style={{ color: "#EB5757", border: "0.779841px solid #EB5757" }}
            >
              Delete Story
            </button>
            <button
              className={"py-2 px-4 font-light text-base rounded text-white"}
              style={{ backgroundColor: "#B569D4" }}
              onClick={() => saveEdit()}
            >
              Save
            </button>
          </div>
        </div>

        <div>
          <div className={"flex items-center justify-start"}>
            <button
              className={"w-32 py-2"}
              onClick={() => setIdx(0)}
              style={
                idx == 0
                  ? {
                      color: "#B569D4",
                      background: "#fff",
                      borderTop: "3px solid #B569D4",
                    }
                  : {}
              }
            >
              Edit
            </button>
            <button
              className={"w-32 py-2"}
              onClick={() => setIdx(1)}
              style={
                idx == 1
                  ? {
                      color: "#B569D4",
                      background: "#fff",
                      borderTop: "3px solid #B569D4",
                    }
                  : {}
              }
            >
              Questions
            </button>
          </div>
          {idx < 1 ? (
            <Profile
              setStoryImg={setStoryImg}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              setIdx={setIdx}
            />
          ) : (
            <Questions
              saveEdit={saveEdit}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
            />
          )}
        </div>
      </div>
    </ModuleContext.Provider>
  );
}
