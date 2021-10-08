import React, { useState, useContext } from "react";
import axios from "../../services/axios";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import Table from "../../components/Lesson/Table";
import EditLesson from "../../components/Lesson/EditLesson";
import CreateLesson from "../../components/Lesson/CreateLesson";
import { notificationsContext } from "../_app";
import Delete from "../../components/Layouts/Alert/Delete";

const Lesson = ({ data }: any) => {
  const [lessons, setLessons] = useState(data);
  const [iDelete, setIDelete] = useState(false);
  const [editLesson, setEditLesson] = useState(false);
  const [createLesson, setCreateLesson] = useState(false);
  const [activeLesson, setActiveLesson] = useState({});
  const notification = useContext(notificationsContext);

  const deleteLesson = async () => {
    try {
      await axios.delete(`/lesson/${activeLesson?._id}`, data);
      setLessons(lessons.filter((e) => e._id !== activeLesson._id));
      setIDelete(false);
      setActiveLesson({});
    } catch (error) {
      notification.warn({
        message: "Network error",
        description: "Check network connection",
      });
    }
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete && (
        <Delete
          deleteFunc={deleteLesson}
          setIDelete={setIDelete}
          message="Delete lesson"
        />
      )}
      {editLesson && (
        <EditLesson
          lessons={lessons}
          setLessons={setLessons}
          activeLesson={activeLesson}
          setEditLesson={setEditLesson}
          setActiveLesson={setActiveLesson}
        />
      )}
      {createLesson && (
        <CreateLesson
          lessons={lessons}
          setLessons={setLessons}
          setCreateLesson={setCreateLesson}
        />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}>Lesson Bank</h5>
            </div>
          </div>
          <div>
            <Table
              lessons={lessons}
              setIDelete={setIDelete}
              setEditLesson={setEditLesson}
              setActiveLesson={setActiveLesson}
              setCreateLesson={setCreateLesson}
            />
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("/lesson");

  return {
    props: {
      data: res.data.data,
    },
  };
}

export default Lesson;
