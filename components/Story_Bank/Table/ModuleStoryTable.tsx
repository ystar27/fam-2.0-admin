import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { moduleStoryTableColumns } from "./data";

const ModuleStoryTable = ({
  rows,
  setActiveStory,
  setEditStory,
  setDeleteStory,
}: any) => {
  const [datatable, setDatatable] = React.useState({
    columns: moduleStoryTableColumns,
    rows,
  });

  useEffect(() => {
    let rowAction = rows.map((row, order) => {
      return {
        ...row,
        image: (
          <div className={"overflow-hidden w-10 h-10 rounded-full"}>
            <img
              src={row.image || "/img/story-bank/photo_size.svg"}
              alt={"story image"}
            />
          </div>
        ),
        action: (
          <div className={"flex items-center mb-2"}>
            <button
              onClick={() => {
                setActiveStory(row);
                setEditStory(true);
              }}
              className={
                "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500 focus:outline-none"
              }
            >
              Edit
            </button>
            <button
              className={
                "rounded py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500 focus:outline-none"
              }
              onClick={() => {
                setActiveStory(row);
                setDeleteStory(true);
              }}
            >
              Delete
            </button>
          </div>
        ),
      };
    });
    setDatatable({ ...datatable, rows: rowAction });
  }, [rows, setDeleteStory, setEditStory, setActiveStory]);

  return (
    <MDBDataTable
      entriesOptions={[10, 20, 30, 50]}
      entries={10}
      pagesAmount={4}
      striped
      bordered
      small
      scrollX
      data={datatable}
      searching={true}
    />
  );
};

export default ModuleStoryTable;
