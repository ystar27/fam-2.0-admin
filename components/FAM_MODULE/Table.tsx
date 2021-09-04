import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBBadge, MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Table({
  setCreateModule,
  setViewModuleField,
  setIDelete,
  modules,
  setModuleId,
  DeleteModule,
  setEditModule,
  setMessage,
}: any) {
  const [input, setInput] = useState("");
  const [datatable, setDatatable] = useState({
    rows: modules,
    columns,
  });

  const statusUI = (status) => {
    if (status == true)
      return (
        <p
          style={{
            color: "#20C997",
            backgroundColor: "rgba(115, 240, 203, 0.25)",
          }}
          className={"w-min px-3 text-sm rounded-xl"}
        >
          Active
        </p>
      );
    else
      return (
        <p
          style={{
            color: "#FF9F43",
            backgroundColor: "rgba(255, 187, 121, 0.25)",
          }}
          className={"w-min px-3 text-sm rounded-xl"}
        >
          Pending
        </p>
      );
  };

  const badgesData = {
    columns: [
      {
        label: "S/N",
        field: "badge",
        sort: "asc",
        width: 50,
      },
      ...datatable.columns,
      {
        label: "ACTIONS",
        field: "actions",
        width: 250,
      },
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        badge: <h5 className={"pl-5"}>{order + 1}</h5>,
        ...row,
        status: statusUI(row.status),
        actions: (
          <div className={"flex items-center justify-around"}>
            <button
              className={"rounded py-1 px-4 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
              onClick={() => {
                setMessage(row.name);
                setModuleId(row.id);
                setEditModule(true);
              }}
            >
              <FontAwesomeIcon icon={faEdit} className={"h-3 w-3 mr-1"} />
              Edit
            </button>
            <button
              className={"rounded py-1 px-4 flex items-center"}
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.12)",
                color: "#DC3545",
              }}
              onClick={() => {
                setModuleId(row.id);
                setIDelete({ delete: true });
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} className={"h-3 w-3 mr-1"} />
              Delete
            </button>
            <button
              onClick={() => {
                setModuleId(row.id);
                setViewModuleField(true);
              }}
              className={
                "px-2 py-1 flex items-center text-lg font-bold rounded bg-gray-200 hover:bg-gray-400 text-gray-900 text-center"
              }
            >
              <FontAwesomeIcon icon={faEye} className={"h-3 w-3 mr-1"} />
              <span className={"font-normal"}>Fields</span>
            </button>
          </div>
        ),
      })),
    ],
  };

  setTimeout(() => {
    if (typeof window !== "undefined") {
      ReactDOM.render(
        <>
          <div
            data-test="datatable-input"
            className="mdb-datatable-filter flex-row"
          >
            <input
              type="text"
              className="focus:outline-none focus:border-gray-500 mr-2"
              placeholder="Search here..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <button
            style={{ backgroundColor: "#B569D4" }}
            onClick={() => setCreateModule(true)}
            className={"py-2 text-base font-semibold text-white px-3 rounded"}
          >
            Create Module
          </button>
        </>,
        document.querySelector("[data-test=datatable-search]")
      );
    }
  }, 2);

  return (
    <MDBDataTable
      hover
      entriesOptions={[10, 20, 30, 50]}
      entries={10}
      pagesAmount={4}
      striped
      bordered
      small
      scrollX
      data={badgesData}
      searching={true}
    />
  );
}
