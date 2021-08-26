import React, { useState } from "react";
import Table from "../components/Mentors/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import Success from "../components/Layouts/Alert/Success";
import Error from "../components/Layouts/Alert/Error";
import AddMentor from "../components/Mentors/AddMentor";
import Edit from "../components/Mentors/EditMentor/Edit";

export default function StoryBank() {
  const [addMentor, setAddMentor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [iDelete, setIDelete] = useState({
    delete: false,
    approveDelete: false,
  });

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete.delete && (
        <Delete setIDelete={setIDelete} message="Approve delete" />
      )}
      {addMentor && <AddMentor setAddMentor={setAddMentor} />}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}> FAM Module</h5>
            </div>
          </div>
          <div>
            {edit ? (
              <Edit setEdit={setEdit} />
            ) : (
              <Table
                setAddMentor={setAddMentor}
                setIDelete={setIDelete}
                iDelete={iDelete}
                setEdit={setEdit}
              />
            )}
          </div>
        </div>
      </Dashboard>
    </div>
  );
}
