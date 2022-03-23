import React, { useState, useEffect, useContext } from "react";
import { MDBDataTable } from "mdbreact";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import axios from "../services/axios";
import axiosInstance from "../services/axios";
import DetailsModal from "../components/Chapters/DetailsModal";

function Chapters() {
  const [chapters, setChapters] = useState({ data: [], loading: true });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [activeDeleteChapter, setActiveDeleteChapter] = useState<any>("");
  const [activeChapter, setActiveChapter] = useState<any>({});

  const openDeleteModal = (id: string) => {
    setDeleteModalOpen(true);
    setActiveDeleteChapter(id);
  };

  const openViewModal = (chapter: any) => {
    setDetailsModalOpen(true);
    setActiveChapter(chapter);
    console.log(chapter);
  };

  const deleteContent = async () => {
    try {
      const res = await axiosInstance.delete(`/chapter/${activeDeleteChapter}`);
      console.log("res______s", res);
      setDeleteModalOpen(false);
      setChapters((prev) => ({
        loading: false,
        data: prev.data.filter(
          (chapter) => chapter._id === activeDeleteChapter
        ),
      }));
    } catch (error: any) {
      console.log(error.response || error.message);
    }
  };

  useEffect(() => {
    axios
      .get("/chapter/")
      .then((res) => {
        console.log(res);
        setChapters({ data: res.data.data || [], loading: false });
      })
      .catch((err) => console.log(err?.response || err.message));
  }, []);

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {isDeleteModalOpen && (
        <Delete
          message={`Are you sure you want to delete this FAM Chapter?`}
          setIDelete={setDeleteModalOpen}
          deleteFunc={deleteContent}
        />
      )}
      {isDetailsModalOpen && (
        <DetailsModal
          message={`Are you sure you want to delete this FAM Chapter?`}
          chapter={activeChapter}
          setChapters={setChapters}
          setCreateModalOpen={setDetailsModalOpen}
          setChapter={setActiveChapter}
        />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}>FAM Chapters</h5>
            </div>
          </div>
          <div
            className={"w-full bg-white rounded mb-32 py-5"}
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
          >
            <div style={{ overflowX: "auto" }}>
              <MDBDataTable
                entriesOptions={[10, 20, 30, 50]}
                // entries={10}
                pagesAmount={4}
                striped
                bordered
                small
                scrollX
                data={{
                  columns: [
                    {
                      label: "S/N",
                      field: "badge",
                      sort: "asc",
                    },
                    {
                      label: "Full Name",
                      field: "fullName",
                      sort: "asc",
                    },
                    {
                      label: "Age Range",
                      field: "ageRange",
                      sort: "asc",
                    },
                    {
                      label: "Residence",
                      field: "location",
                      sort: "asc",
                    },
                    {
                      label: "Approved",
                      field: "approveText",
                      sort: "asc",
                    },
                    {
                      label: "Status",
                      field: "status",
                      sort: "asc",
                    },
                    {
                      label: "Actions",
                      field: "actions",
                      width: 200
                    },
                  ],
                  rows: chapters.data.map((row: any, order) => ({
                    ...row,
                    badge: order + 1,
                    fullName: (
                      <div>
                        {row.firstName} {row.lastName}
                      </div>
                    ),
                    location: `${row.state}, ${row.country}`,
                    approveText: row.approved ? 'Yes' : 'No',
                    actions: (
                      <div className="flex items-center">
                        <button
                          className={
                            "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                          }
                          onClick={() => openViewModal(row)}
                        >
                          <i className="fa fa-eye mr-2"></i>
                          View
                        </button>
                        <button
                          className={
                            "rounded mr-5 py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500"
                          }
                          onClick={() => {
                            console.log(row);
                            openDeleteModal(row._id);
                          }}
                        >
                          <i className="fa fa-trash mr-2"></i>
                          Delete
                        </button>
                      </div>
                    ),
                  })),
                }}
                searching={true}
              />
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default Chapters;
