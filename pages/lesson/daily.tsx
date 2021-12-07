import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import DayItem from "../../components/Lesson/DayItem";
import InputedLessonItem from "../../components/Lesson/InputedLessonItem";
import axios from "../../services/axios";
import { notificationsContext } from "../_app";

const initialData = {
  issue: "",
  module: {},
  subModule: {},
  lessons: [],
};

const initialDailyLesson = {
  module: "",
  subModule: "",
  issue: "",
  lessons: [],
};

const Daily = ({ modules, issues }: any) => {
  const [subModule, setSubModule] = useState([]);
  const [issue, setIssue] = useState(issues);
  const [inputedLessons, setInputedLessons] = useState([]);
  const [data, setData] = useState(initialData);
  const [dailyLessons, setDailyLesson] = useState(initialDailyLesson);
  const notification = useContext(notificationsContext);
  const [displaySelectIssue, setDisplaySelectIssue] = useState(false);

  useEffect(() => {
    getDailyLesson();
  }, [data.subModule, data.issue]);

  useEffect(() => {
    issueLesson();
  }, [data.issue]);

  useEffect(() => {
    if (dailyLessons.module.length > 0 && dailyLessons.subModule.length > 0) {
      setDisplaySelectIssue(true);
    }
  }, [
    dailyLessons.module,
    dailyLessons.subModule,
    data.module,
    data.subModule,
  ]);

  const issueLesson = async () => {
    if (data.issue) {
      const lessons = await axios.get(`lesson/issue/${data.issue}`);
      setData({ ...data, lessons: lessons.data.data });
    }
  };

  const getDailyLesson = async () => {
    if (data.subModule && data.issue) {
      const dl = await axios.get(`lesson/daily/issue/submodule`, {
        params: {
          issueId: data.issue,
          subModule: data.subModule._id,
        },
      });

      if (dl.data.data.length > 0) {
        setDailyLesson({
          ...dl.data.data[0],
          module: data.module._id,
          subModule: data.subModule._id,
        });

        let res = _.sortBy(dl.data.data[0].lessons, "day");

        setInputedLessons(res);
      } else {
        setInputedLessons([]);
      }
    } else {
      setInputedLessons([]);
    }
  };

  const onSelectChange = (e: any) => {
    if (e.target.value !== "" && e.target.name === "module") {
      let selectedMdl: any = modules.filter(
        (module: { _id: any }) => module._id == e.target.value
      );
      setData({ ...data, [e.target.name]: selectedMdl[0] });
      setDailyLesson({ ...dailyLessons, [e.target.name]: selectedMdl[0]._id });
      setSubModule(selectedMdl[0]?.subModule);
    } else if (e.target.value !== "" && e.target.name === "subModule") {
      let selectedSubMdl: any = subModule.filter(
        (submodule: { _id: any }) => submodule._id == e.target.value
      );
      setDailyLesson({
        ...dailyLessons,
        [e.target.name]: selectedSubMdl[0]._id,
      });
      setData({ ...data, [e.target.name]: selectedSubMdl[0] });
    } else {
      setDailyLesson({ ...dailyLessons, [e.target.name]: e.target.value });
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const updateDayLessons = (e, day) => {
    if (dailyLessons.lessons.filter((lesson) => lesson.day == day).length > 0) {
      let lesson = dailyLessons.lessons.filter((e) => e.day !== day);
      setDailyLesson({
        ...dailyLessons,
        lessons: [...lesson, { day, lesson: e.target.value || " " }],
      });
    } else {
      setDailyLesson({
        ...dailyLessons,
        lessons: [
          ...dailyLessons.lessons,
          { day, lesson: e.target.value || " " },
        ],
      });
    }
  };

  const submitLessons = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/lesson/daily", dailyLessons);
      getDailyLesson();
      notification.success({
        message: "Successful",
        description: "Daily lesson saved",
      });
    } catch (error) {
      notification.warn({
        message: "Request not sent",
        description: "Check network connection",
      });
    }
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}>Daily Lesson</h5>
            </div>
          </div>
          <div>
            <div
              className={"w-full bg-white rounded py-6 mb-16 px-6"}
              style={{
                border: "0.5px solid #E0E0E0",
                boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                className={"grid grid-cols-3 gap-5 md:gap-10 justify-between"}
              >
                <div className={"mb-4 w-full"}>
                  <select
                    name={"module"}
                    onChange={onSelectChange}
                    className={
                      "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                    }
                  >
                    <option value={""} className={"hover:bg-purple-400"}>
                      Select Module
                    </option>
                    {modules.map((module: any, i: number) => (
                      <option key={i} value={module._id}>
                        {module.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={"mb-4 w-full"}>
                  <select
                    name={"subModule"}
                    onChange={onSelectChange}
                    className={
                      "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                    }
                  >
                    <option value={""} className={"hover:bg-purple-400"}>
                      Select Sub-Module
                    </option>
                    {subModule.map((e: any, i) => (
                      <option key={i} value={e._id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                {displaySelectIssue && (
                  <div className={"mb-4 w-full"}>
                    <select
                      name={"issue"}
                      onChange={onSelectChange}
                      className={
                        "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                      }
                    >
                      <option value={""} className={"hover:bg-purple-400"}>
                        Select Issue
                      </option>
                      {issue.map((e: any, idx: number) => (
                        <option
                          key={idx}
                          value={e._id}
                          className={"hover:bg-purple-400"}
                        >
                          {e.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
            <form onSubmit={submitLessons}>
              <div>
                {inputedLessons.length > 0 && (
                  <div
                    className={"w-full bg-white rounded py-6 mb-20 px-6 "}
                    style={{
                      border: "0.5px solid #E0E0E0",
                      boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <h3
                      className={
                        "mb-5 text-lg text-gray-600 font-semibold font-mono"
                      }
                    >
                      Available Daily Lessons
                    </h3>
                    <div className={"grid grid-cols-3 gap-5 md:gap-8"}>
                      {inputedLessons.map((e: any, i: number) => (
                        <InputedLessonItem
                          key={i}
                          item={e}
                          index={i}
                          lessons={data.lessons}
                          updateDayLessons={updateDayLessons}
                        />
                      ))}
                    </div>
                    <div className={"flex justify-end mt-8"}>
                      <button
                        className={
                          "px-10 py-2 rounded-md text-white font-semibold"
                        }
                        style={{ backgroundColor: "#b569d4" }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
            {data.subModule && data.subModule?.duration && (
              <form onSubmit={submitLessons}>
                <div>
                  <div
                    className={"w-full bg-white rounded py-6 mb-32 px-6"}
                    style={{
                      border: "0.5px solid #E0E0E0",
                      boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <h3
                      className={
                        "mb-5 text-lg text-gray-600 font-semibold font-mono"
                      }
                    >
                      Unset Daily Lessons
                    </h3>
                    <div className={"grid grid-cols-3 gap-5 md:gap-8"}>
                      {Array.from(Array(data.subModule?.duration).keys()).map(
                        (e, i) => (
                          <DayItem
                            key={i}
                            index={i}
                            lessons={data.lessons}
                            updateDayLessons={updateDayLessons}
                          />
                        )
                      )}
                    </div>
                    <div className={"flex justify-end mt-8"}>
                      <button
                        type={"submit"}
                        className={
                          "px-10 py-2 rounded-md text-white font-semibold"
                        }
                        style={{ backgroundColor: "#b569d4" }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export async function getServerSideProps() {
  const modules = await axios.get("/module");
  const issues = await axios.get("/issue");

  return {
    props: {
      modules: modules.data.data,
      issues: issues.data.data,
    },
  };
}

export default Daily;
