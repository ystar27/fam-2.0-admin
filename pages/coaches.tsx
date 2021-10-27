import React, { useState, useEffect, useContext } from "react";
import Table from "../components/Coaches/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import CreateCoach from "../components/Coaches/CreateCoach";
import EditCoach from "../components/Coaches/EditCoach";
import { notificationsContext } from "./_app";
import axios from "../services/axios";

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [createCoach, setCreateCoach] = useState(false);
  const [editCoach, setEditCoach] = useState(false);
  const notification = useContext(notificationsContext);
  const [activeCoach, setActiveCoach] = useState({});
  const [iDelete, setIDelete] = useState(false);

  useEffect(() => {
    axios
      .get("/coach")
      .then((res) => {
        setCoaches(res.data.data);
      })
      .catch((error) => {
        notification.info({
          message: "Network error",
          description: "Check network connectivity",
        });
      });
  }, []);

  const deleteCoach = async () => {
    try {
      if (activeCoach && activeCoach._id) {
        await axios.delete(`/coach/${activeCoach._id}`);
        const dCoaches = coaches.filter((e) => e._id !== activeCoach._id);
        setCoaches(dCoaches);
        setIDelete(false);
        setActiveCoach({});
        notification.success({
          message: "Successful",
          description: "Coach deleted successful",
        });
      }
    } catch (error) {
      notification.info({
        message: "Network error",
        description: "Check network connectivity",
      });
    }
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete && (
        <Delete
          deleteFunc={deleteCoach}
          setIDelete={setIDelete}
          message="Remove coach"
        />
      )}
      {editCoach && (
        <EditCoach
          coaches={coaches}
          setCoaches={setCoaches}
          activeCoach={activeCoach}
          setActiveCoach={setActiveCoach}
          setEditCoach={setEditCoach}
        />
      )}
      {createCoach && (
        <CreateCoach
          coaches={coaches}
          setCoaches={setCoaches}
          setCreateCoach={setCreateCoach}
        />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}> Mentors</h5>
            </div>
          </div>
          <div>
            <Table
              setCreateCoach={setCreateCoach}
              setActiveCoach={setActiveCoach}
              setEditCoach={setEditCoach}
              setIDelete={setIDelete}
              coaches={coaches}
            />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}
