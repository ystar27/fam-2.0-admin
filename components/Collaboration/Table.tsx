import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBBadge, MDBDataTable } from "mdbreact";
import { columns, rows } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Table({
  setCreateModule,
  setAddModuleField,
  iDelete,
  setIDelete,
}: any) {
  const [input, setInput] = useState("");
  const [datatable, setDatatable] = useState({
    rows,
    columns,
  });

  const statusUI = (status: string) => {
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
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        badge: <h5 className={'pl-5'}>{order + 1}</h5>,
        ...row,
        status: statusUI(row.status),
      })),
    ],
  };

  return (
    <MDBDataTable
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
