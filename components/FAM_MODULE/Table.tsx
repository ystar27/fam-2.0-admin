import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBBadge, MDBDataTable, MDBDataTableV5 } from "mdbreact";
import { columns, rows } from "./data";

export default function TopSearch() {
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
        width: 150,
      },
      ...datatable.columns,
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        ...row,
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
