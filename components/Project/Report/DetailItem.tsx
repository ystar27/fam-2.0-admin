import React from "react";

const DetailItem = ({ title, detail }: any) => {
  return (
    <div className={"grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"}>
      <div className="font-mono font-semibold text-gray-500">
        <h3>{title || ""}</h3>
      </div>
      <div className={"col-span-3"}>
        <h3>{detail || ""}</h3>
      </div>
    </div>
  );
};

export default DetailItem;
