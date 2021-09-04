import React from "react";



const Field = ({onChange, value, idx}: any) => {
  return (
    <div className={"mb-5"}>
      <input
        type={"text"}
        className={
          "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
        }
        value={value}
        placeholder={"Field"}
        onChange={(e) => onChange(idx, e)}
      />
    </div>
  );
};

export default Field;
