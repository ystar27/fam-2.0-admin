import React, { useState, useEffect, useContext } from "react";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import axios from "../services/axios";
import CreateDailyContent from "../components/DailyContent/CreateDailyContent";

function FamModule() {
  const [contents, setContents] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>({});
  const [activeEditContent, setActiveEditContent] = useState<any>({});

  const deleteContent = (id: string) => {
    // no code here on backend
    setDeleteModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("/daily-content")
      .then((res) => {
        console.log(res);
        setContents(res.data?.data);
      })
      .catch((err) => console.log(err?.response || err.message));
  }, []);

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {isCreateModalOpen && (
        <CreateDailyContent
          setContents={setContents}
          setCreateModalOpen={setCreateModalOpen}
        />
      )}
      {isEditModalOpen && (
        <CreateDailyContent
          setContents={setContents}
          isEdit={true}
          content={activeEditContent}
          setCreateModalOpen={setEditModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <Delete
          message={`Confirm delete for ${activeContent?.title}`}
          setIDelete={setDeleteModalOpen}
          deleteFunc={deleteContent}
        />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}> Daily Contents</h5>
            </div>
          </div>
          <div className={"flex items-center justify-end mb-5"}>
            <div className={"flex items-center"}>
              <button
                onClick={() => setCreateModalOpen(true)}
                className={
                  "bg-white shadow-sm py-2 px-4 font-light flex items-center"
                }
                style={{ color: "#B569D4" }}
              >
                Create Daily Content
              </button>
            </div>
          </div>
          <div
            className={"w-full bg-white rounded mb-32 pb-5"}
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
          >
            <div style={{ overflowX: "auto" }}>
              <div style={{ width: "100%" }}>
                <div className={"grid grid-cols-12 gap-x-10 px-5 py-3"}>
                  <div
                    className={
                      "col-span-1 text-left text-lg font-light font-mono text-gray-800"
                    }
                  >
                    S/N
                  </div>
                  <div className="col-span-2 text-left text-lg font-semibold font-mono text-gray-800">
                    Title
                  </div>
                  <div className="col-span-2 text-left text-lg font-semibold font-mono text-gray-800">
                    Display Date
                  </div>
                  <div className="col-span-2 text-left text-lg font-semibold font-mono text-gray-800">
                    Link
                  </div>
                  <div className="col-span-2 text-left text-lg font-semibold font-mono text-gray-800">
                    Comments Count
                  </div>
                  <div className="col-span-3 text-left text-lg font-semibold font-mono text-gray-800">
                    Action
                  </div>
                </div>
                {contents.map((content: any, index) => (
                  <div
                    className={`grid grid-cols-12 gap-x-10 px-5 bg py-3 ${
                      index % 2 === 0 && "bg-gray-50"
                    }`}
                  >
                    <div
                      className={
                        "col-span-1 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate"
                      }
                    >
                      {index + 1}
                    </div>
                    <div
                      title={content?.title}
                      className="col-span-2 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate"
                    >
                      {content?.title}
                    </div>
                    <div className="col-span-2 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate">
                      {content?.displayDay}
                    </div>
                    <div className="col-span-2 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate">
                      {content?.link}
                    </div>
                    <div className="col-span-2 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate">
                      {content?.comments?.length}
                    </div>
                    <div className="col-span-3 text-left text-lg font-light font-mono text-gray-800 whitespace-nowrap overflow-hidden truncate">
                      <div className={"flex items-center mb-2"}>
                        <button
                          className={
                            "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                          }
                          onClick={() => {
                            setActiveEditContent(content);
                            setEditModalOpen(true);
                          }}
                        >
                          Edit
                        </button>
                        {/* <button
                          className={
                            "rounded py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500"
                          }
                          onClick={() => {
                            setActiveContent(content);
                            deleteContent(content?._id);
                            setDeleteModalOpen(true);
                          }}
                        >
                          Delete
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default FamModule;
