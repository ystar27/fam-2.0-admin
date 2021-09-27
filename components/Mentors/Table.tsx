import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MDBDataTable } from "mdbreact";
import { columns } from "./data";

export default function Table({ referrals }: any) {
  const [input, setInput] = useState("");
  const [datatable, setDatatable] = useState({
    rows: referrals,
    columns,
  });

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
        entriesOptions={[10, 20, 30]}
        entries={10}
        pagesAmount={4}
        striped
        bordered
        small
        scrollX
        data={datatable}
        searching={true}
      />
    </div>
  );
}
