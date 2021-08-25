import React, { useState } from "react";
import Table from "../components/Story_Bank/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import Success from "../components/Layouts/Alert/Success";
import Error from "../components/Layouts/Alert/Error";
import CreateStory from "../components/Story_Bank/CreateStory";
import EditStory from "../components/Story_Bank/EditStory/EditStory";

export default function StoryBank() {
  const [action, setAction] = useState(1);
  const [iDelete, setIDelete] = useState({
    delete: false,
    approveDelete: false,
  });

  const displayAction = () => {
    if (action == 1)
      return (
        <Table
          setAction={setAction}
          setIDelete={setIDelete}
          iDelete={iDelete}
        />
      );
    else if (action == 2) return <CreateStory setAction={setAction} />;
    else if (3) return <EditStory />;
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete.delete && (
        <Delete setIDelete={setIDelete} message="Approve delete" />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}> FAM Module</h5>
            </div>
          </div>
          <div>{displayAction()}</div>
        </div>
      </Dashboard>
    </div>
  );
}
