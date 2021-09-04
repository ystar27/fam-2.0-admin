import React, { useState } from "react";
import Table from "../components/FAM_MODULE/Table";
import CreateModule from "../components/FAM_MODULE/CreateModule";
import EditModule from "../components/FAM_MODULE/EditModule";
import ViewModuleField from "../components/FAM_MODULE/ViewModuleField";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import Success from "../components/Layouts/Alert/Success";
import Error from "../components/Layouts/Alert/Error";
import axios from "../services/axios";

function FAM_MODULE({ modules }: any) {
  const [successAlert, setSuccessAlert] = useState(false);
  const [createModule, setCreateModule] = useState(false);
  const [editModule, setEditModule] = useState(false);
  const [viewModuleField, setViewModuleField] = useState(false);
  const [moduleId, setModuleId] = useState(null);
  const [mdl, setmdl] = useState(modules);
  const [message, setMessage] = useState("");
  const [iDelete, setIDelete] = useState({
    delete: false,
    approveDelete: false,
  });

  const DeleteModule = () => {
    axios.delete(`/module/${moduleId}`).then((res) => {
      setIDelete({ delete: false });
      setMessage("Deleted Successfully");
      setSuccessAlert(true);
    });
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {iDelete.delete && (
        <Delete
          DeleteFunc={DeleteModule}
          setIDelete={setIDelete}
          message="Approve delete"
        />
      )}
      {createModule && (
        <CreateModule
          setMessage={setMessage}
          setmdl={setmdl}
          mdl={mdl}
          setSuccessAlert={setSuccessAlert}
          setCreateModule={setCreateModule}
        />
      )}
      {editModule && (
        <EditModule
          setMessage={setMessage}
          message={message}
          moduleId={moduleId}
          setmdl={setmdl}
          mdl={mdl}
          setSuccessAlert={setSuccessAlert}
          setEditModule={setEditModule}
        />
      )}
      {viewModuleField && (
        <ViewModuleField
          moduleId={moduleId}
          setMessage={setMessage}
          setViewModuleField={setViewModuleField}
        />
      )}
      {successAlert && (
        <Success message={message} setSuccessAlert={setSuccessAlert} />
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
          <div
            className={"w-full bg-white rounded py-6 mb-32"}
            style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
          >
            <Table
              setCreateModule={setCreateModule}
              setViewModuleField={setViewModuleField}
              setIDelete={setIDelete}
              iDelete={iDelete}
              modules={mdl}
              setModuleId={setModuleId}
              DeleteModule={DeleteModule}
              setEditModule={setEditModule}
              setMessage={setMessage}
            />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("/module");

  const modules = res.data.data.map((e: any) => ({
    id: e._id,
    name: e.name,
    status: e.status.active,
  }));

  return { props: { modules } };
}

export default FAM_MODULE;
