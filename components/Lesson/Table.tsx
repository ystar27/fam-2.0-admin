import React, { useState } from "react";
import { MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Table = ({ lessons, setIDelete, setEditLesson, setActiveLesson, setCreateLesson }: any) => {
  const [datatable, setDatatable] = useState({
    rows: lessons,
    columns,
  });

  const badgesData = {
    columns: [...datatable.columns],
    rows: [
      ...lessons.map((row, idx) => ({
        ...row,
        no: idx + 1,
        actions: (
          <div className={"flex items-center justify-start"}>
            <button
              className={"rounded py-1 mr-2 px-4 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
              onClick={() => {
                setActiveLesson(row);
                setEditLesson(true);
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
                setActiveLesson(row);
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

  return (
    <div
      className={"w-full bg-white rounded py-6 mb-32"}
      style={{
        border: "0.5px solid #E0E0E0",
        boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className={"flex justify-end px-6"}>
        <button
          onClick={() => setCreateLesson(true)}
          className={"py-1 px-3 text-base text-white rounded-md w-52"}
          style={{ backgroundColor: "#b569d4" }}
        >
          Create Lesson
        </button>
      </div>
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
};

export default Table;
