import React, { useState } from "react";
import Table from "../components/FAM_MODULE/Table";
import CreateModule from "../components/FAM_MODULE/CreateModule";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import Success from "../components/Layouts/Alert/Success";
import Error from "../components/Layouts/Alert/Error";

export default function FAM_MODULE() {
  const [createModule, setCreateModule] = useState(false);
  const [iDelete, setIDelete] = useState({
    delete: false,
    approveDelete: false,
  });

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete.delete && <Delete setIDelete={setIDelete} message="Approve delete" />}
      {createModule && <CreateModule setCreateModule={setCreateModule} />}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}> FAM Module</h5>
            </div>
          </div>
          <div className={"w-full bg-white rounded py-6 mb-32"}>
            <Table
              setCreateModule={setCreateModule}
              setIDelete={setIDelete}
              iDelete={iDelete}
            />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}
