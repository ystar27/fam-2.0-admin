import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBBadge, MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Table({ setCreateModule, iDelete, setIDelete }: any) {
  const [input, setInput] = useState("");
  const [datatable, setDatatable] = useState({
    rows,
    columns,
  });

  const statusUI = (status) => {
    if (status == "active")
      return (
        <p
          style={{
            color: "#20C997",
            backgroundColor: "rgba(115, 240, 203, 0.25)",
          }}
          className={"w-min px-2 text-sm rounded-xl"}
        >
          Active
        </p>
      );
    else if (status == "inactive")
      return (
        <p
          style={{ color: "#A4A6B3", backgroundColor: "#F6F6F6" }}
          className={"w-min px-2 text-sm rounded-xl"}
        >
          Inactive
        </p>
      );
    else
      return (
        <p
          style={{
            color: "#FF9F43",
            backgroundColor: "rgba(255, 187, 121, 0.25)",
          }}
          className={"w-min px-2 text-sm rounded-xl"}
        >
          pending
        </p>
      );
  };

  const badgesData = {
    columns: [
      {
        label: "S/N",
        field: "badge",
        sort: "asc",
        width: 150,
      },
      ...datatable.columns,
      {
        label: "ACTIONS",
        field: "actions",
        width: 200,
      },
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        badge: (
          <MDBBadge
            pill
            color="primary"
            className="p-1 px-2"
            key={order}
            searchvalue={order}
          >
            {order + 1}
          </MDBBadge>
        ),
        ...row,
        status: statusUI(row.status),
        actions: (
          <div className={"flex items-center justify-around"}>
            <button
              className={"rounded py-1 px-2 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                className={"h-3 w-3 mr-1"}
                style={{}}
              />
              Edit
            </button>
            <button
              className={"rounded py-1 px-2 flex items-center"}
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.12)",
                color: "#DC3545",
              }}
              onClick={() => setIDelete({delete: true})}
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
