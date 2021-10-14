import React, { useState, useEffect } from "react";
import Table from "../../components/Project/reportTable";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  deleteProjectIdea,
  getProjectIdeas,
} from "../../services/projectRequest";

function Idea({ project }: any) {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    if (project.length > 0) {
      let res = project.map((p: any, i: number) => {
        let date = new Date(p.createdAt);
        return {
          ...p,
          no: i + 1,
          createdAt: date.toDateString(),
          actions: (
            <div className={"flex items-center justify-start"}>
              <button
                className={"rounded py-1 mr-2 px-4 flex items-center"}
                style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
                onClick={() => {
                  setActiveProject(p);
                  editProject();
                }}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className={"h-3 w-3 mr-1"}
                  style={{}}
                />
                Edit
              </button>
              <button
                className={"rounded py-1 mr-2 px-4 flex items-center"}
                style={{
                  backgroundColor: "rgba(220, 53, 69, 0.12)",
                  color: "#DC3545",
                }}
                onClick={() => {
                  setActiveProject(p);
                  deleteIProject();
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className={"h-3 w-3 mr-1"}
                  style={{}}
                />
                Delete
              </button>
            </div>
          ),
        };
      });
      setProjects(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editProject = () => {
    // updateProject(activeProject._id, activeProject);
    // let updated = projects.map((e) =>
    //   e._id == activeProject._id ? activeProject : e
    // );
    // setProjects(updated);
    // setActiveProject({});
  };

  const deleteIProject = () => {
    deleteProjectIdea(activeProject._id);
    let updated = projects.filter((e) => e._id !== activeProject._id);
    setProjects(updated);
    setActiveProject({});
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
              <h5 className={"ml-2"}> Project</h5>
            </div>
          </div>
          <div>
            <Table projects={projects} />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // const project = await getProjectIdeas();

    return {
      props: {
        project: [],
      },
    };
  } catch (error) {
    return {
      props: {
        project: [],
      },
    };
  }
}

export default Idea;
