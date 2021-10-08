import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function ListTable() {
  const [input, setInput] = useState("");
  const [datatable, setDatatable] = useState({
    rows,
    columns,
  });

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
        label: "QUESTION",
        field: "question",
        width: 100,
      },
      {
        label: "ACTIONS",
        field: "actions",
        width: 100,
      },
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        badge: <h5 className={"pl-5"}>{order + 1}</h5>,
        mentor: (
          <div className={"flex items-center"}>
            <img
              className={"rounded-full h-12 w-12 object-cover mr-4"}
              src={row.mentor}
              alt={"profile.img"}
            />
            <p className={"text-base font-medium"}> Katerin Flop</p>
          </div>
        ),
        question: (
          <div className={"flex items-center justify-start"}>
            <button
              className={"rounded py-2 px-4 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                className={"h-3 w-3 mr-1"}
                style={{}}
              />
              View
            </button>
          </div>
        ),
        actions: (
          <div className={"flex items-center justify-center"}>
            <button
              className={"rounded py-2 px-4 flex items-center"}
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.12)",
                color: "#DC3545",
              }}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className={"h-3 w-3 mr-1"}
                style={{}}
              />
              Remove
            </button>
          </div>
        ),
      })),
    ],
  };

  return (
    <div
      className={"w-full bg-white rounded py-6 mb-32 px-5"}
      style={{
        border: "0.5px solid #E0E0E0",
        boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
      }}
    >
      <MDBDataTable
        hover
        entriesOptions={[5, 10, 20]}
        entries={5}
        pagesAmount={4}
        striped
        bordered
        small
        scrollX
        data={badgesData}
        searching={false}
      />
    </div>
  );
}
