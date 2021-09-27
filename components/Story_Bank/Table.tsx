import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBBadge, MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Table({ setAction, iDelete, setIDelete }: any) {
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
          className={"w-min px-3 text-sm rounded-xl"}
        >
          Active
        </p>
      );
    else if (status == "inactive")
      return (
        <p
          style={{ color: "#A4A6B3", backgroundColor: "#F6F6F6" }}
          className={"w-min px-3 text-sm rounded-xl"}
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
          className={"w-min px-3 text-sm rounded-xl"}
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
        width: 50,
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
        badge: <h5 className={"pl-5"}>{order + 1}</h5>,
        ...row,
        image: (
          <div className={"h-12 w-12 rounded-full overflow-hidden"}>
            <img className={"w-full"} src={row.image} alt={"profile.img"} />
          </div>
        ),
        status: statusUI(row.status),
        actions: (
          <div className={"flex items-center justify-around"}>
            <button
              className={"rounded py-2 px-4 flex items-center"}
              style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
              onClick={() => setAction(3)}
            >
              <FontAwesomeIcon
                icon={faEdit}
                className={"h-3 w-3 mr-1"}
                style={{}}
              />
              Edit
            </button>
            <button
              className={"rounded py-2 px-4 flex items-center"}
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.12)",
                color: "#DC3545",
              }}
              onClick={() => setIDelete({ delete: true })}
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
          {/* <Link href={"/storybank/new"} passHref> */}
          <a
            href={"/storybank/new"}
            style={{ backgroundColor: "#B569D4" }}
            className={"py-2 text-base font-semibold text-white px-3 rounded"}
          >
            <p>Create Story</p>
          </a>
          {/* </Link> */}
        </>,
        document.querySelector("[data-test=datatable-search]")
      );
    }
  }, 2);

  return (
    <div
      className={"w-full bg-white rounded py-6 mb-32"}
      style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
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
