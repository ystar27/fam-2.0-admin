import React, { useState, useEffect } from "react";
import axios from "../../../services/axios";

const SubModuleTable = ({
  setSubModule,
  setActiveModule,
  setSubModules,
  setEditSubModule,
  setActiveSubModule,
  setSuccessAlert,
  setMessage,
  setDeleteSubModule,
  activeSubModule,
  moduleId,
  subModules,
  activeModule,
  deleteSubModule,
  editSubMdl
}: any) => {

  return (
    <>
      <div
        className={"w-full bg-white rounded py-6 mb-32"}
        style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%" }}>
            <tr className={"text-left text-lg font-light font-mono"}>
              <th className={"pl-5"}>S/N</th>
              <th>Sub-Modules</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
            {subModules.map((e: any, i) => (
              <tr key={i}>
                <td className={"pl-5"}>{i + 1}</td>
                <td className={""}>{e.name}</td>
                <td>{e.duration} days</td>
                <td>
                  <div className={"flex items-center mb-2"}>
                    <button
                      className={"rounded mr-5 py-1 px-4 flex items-center"}
                      style={{
                        backgroundColor: "#CBFEEF",
                        color: "#20C997",
                      }}
                      onClick={() => editSubMdl(e, i)}
                    >
                      Edit
                    </button>
                    <button
                      className={"rounded py-1 px-4 flex items-center"}
                      onClick={() => {
                        setMessage(`Confirm delete for ${activeModule.name}`);
                        setActiveSubModule(e);
                        setDeleteSubModule(!deleteSubModule);
                      }}
                      style={{
                        backgroundColor: "rgba(220, 53, 69, 0.12)",
                        color: "#DC3545",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default SubModuleTable;
