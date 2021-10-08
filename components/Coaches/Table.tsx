import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Table({
  setActiveCoach,
  setCreateCoach,
  setIDelete,
  setEditCoach,
  coaches,
}: any) {
  const [datatable, setDatatable] = useState({
    rows: coaches,
    columns,
  });

  const badgesData = {
    columns: [...datatable.columns,],
    rows: [
      ...coaches.map((row, idx) => ({
        ...row,
        no: idx + 1,
        name: (
          <div className={"flex items-center"}>
            <img
              className={"rounded-full h-12 w-12 object-cover mr-4 bg-gray-500"}
              src={row.image || "/img/dashboard/user.svg"}
              alt={"profile.img"}
            />
            <p className={"text-base font-medium"}>{row.name}</p>
          </div>
        ),
        issue: row.issue.title,
        actions: (
          <div className={"flex items-center justify-start"}>
            <button
              className={"rounded py-1 mr-2 px-4 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
              onClick={() => {
                setActiveCoach(row);
                setEditCoach(true);
              }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                className={"h-3 w-3 mr-1"}
                style={{}}
              />
              Edit
            </button>
            <button
              className={"rounded py-1 mr-2 px-4 flex items-center"}
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.12)",
                color: "#DC3545",
              }}
              onClick={() => {
                setActiveCoach(row);
                setIDelete(true);
              }}
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
          <button
            style={{ backgroundColor: "#B569D4" }}
            onClick={() => setCreateCoach(true)}
            className={"py-2 text-base font-semibold text-white px-3 rounded"}
          >
            Create Coach
          </button>
        </>,
        document.querySelector("[data-test=datatable-search]")
      );
    }
  }, 2);

  return (
    <div
      className={"w-full bg-white rounded py-6 mb-32"}
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
        searching={true}
      />
    </div>
  );
}
