import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./data";

export default function Table({ registeredUsers }: any) {
  const [datatable, setDatatable] = useState({
    rows: registeredUsers,
    columns,
  });

  useEffect(() => {
    setDatatable({ ...datatable, rows: registeredUsers });
  }, [registeredUsers]);

  return (
    <div
      className={"w-full bg-white rounded py-6"}
      style={{
        border: "0.5px solid #E0E0E0",
        boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
      }}
    >
      <MDBDataTable
        hover
        entriesOptions={[30, 50, 100, 200]}
        entries={30}
        pagesAmount={10}
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
