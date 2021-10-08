import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";
import Utils from "../../services/utils";
import { useState } from "react";
import { useRef } from "react";

const initialLessonState = {
  title: "",
  content: "",
  task: "",
  issue: "",
  coach: "",
};

export default function CreateLesson({
  lessons,
  setLessons,
  setCreateLesson,
}: any) {
  const [data, setData] = useState(initialLessonState);
  const [issues, setIssues] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [error, setError] = useState(false);
  const notification = useContext(notificationsContext);
  const slideRef = useRef();

  useEffect(() => {
    axios
      .get("/issue")
      .then((res) => {
        setIssues(res.data.data);
      })
      .catch((error) => {
        notification.warn({
          message: "Network error",
          description: "Check network connection",
        });
      });
  }, []);

  const onChange = async (e) => {
    try {
      if (e.target.name == "issue" && e.target.value !== "") {
        let res = await axios.get(`/coach/${e.target.value}/issue`);
        setCoaches(res.data.data);
      }
      setData({ ...data, [e.target.name]: e.target.value });
    } catch (error) {
      notification.warn({
        message: "Network error",
        description: "Check network connection",
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      if (data.coach && data.content && data.issue && data.title) {
        let createdLesson = await axios.post("/lesson", data);
        setLessons([createdLesson.data.data, ...lessons]);
        setCreateLesson(false);
        notification.success({
          message: "Successful",
          description: "Lesson created successfully",
        });
      } else {
        setError(true);
      }
    } catch (error) {
      notification.warn({
        message: "Request not sent",
        description: "Check network connection",
      });
    }
  };

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <form onSubmit={onSubmit}>
        <div
          ref={slideRef}
          className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
        >
          <div className={"p-5 flex items-center justify-between bg-gray-50"}>
            <h2
              className={"text-lg font-semibold"}
              style={{ color: "#B569D4" }}
            >
              Create New Lesson
            </h2>
            <button
              className={"p-2 bg-white"}
              onClick={() => setCreateLesson(false)}
            >
              <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
            </button>
          </div>
          <div className={"p-5 py-10 bg-white"}>
            <div className={"flex flex-col"}>
              <div className={"mb-4"}>
                <input
                  type={"text"}
                  name={"title"}
                  value={data.title}
                  placeholder={"Title"}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                />
                {error && !data.title && (
                  <small className="block text-red-600 mt-1">
                    Title is required
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <textarea
                  name={"content"}
                  value={data.content}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                  placeholder={"Content"}
                  rows={1}
                ></textarea>
                {error && !data.content && (
                  <small className="block text-red-600 mt-1">
                    Lesson content is required
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <textarea
                  name={"task"}
                  value={data.task}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                  placeholder={"Task"}
                  rows={1}
                ></textarea>
              </div>
              <div className={"mb-4"}>
                <select
                  name={"issue"}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                >
                  <option className={"hover:bg-purple-400"}>
                    Select Issue
                  </option>
                  {issues.map((e, idx) => (
                    <option
                      key={idx}
                      value={e._id}
                      className={"hover:bg-purple-400"}
                    >
                      {e.title}
                    </option>
                  ))}
                </select>
                {error && !data.issue && (
                  <small className="block text-red-600 mt-1">
                    Select lesson related issue
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <select
                  name={"coach"}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                >
                  <option className={"hover:bg-purple-400"}>
                    Select Coach
                  </option>
                  {coaches.map((e, idx) => (
                    <option
                      key={idx}
                      value={e._id}
                      className={"hover:bg-purple-400"}
                    >
                      {e.name}
                    </option>
                  ))}
                </select>
                {error && !data.coach && (
                  <small className="block text-red-600 mt-1">
                    Select coach
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <button
                  type={"submit"}
                  className={
                    "w-full text-white p-3 px-5 rounded text-lg font-semibold"
                  }
                  style={{ backgroundColor: "#B569D4" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
