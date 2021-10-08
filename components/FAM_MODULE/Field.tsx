import React from "react";

const Field = ({ onChange, value, idx, isValidated }: any) => {
  return (
    <div className={"mb-5"}>
      <input
        type={"text"}
        className={`pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none  ${
          isValidated && !value
            ? "border-red-700 focus:border-red-600"
            : "focus:border-purple-500"
        } text-lg`}
        value={value}
        placeholder={"Field"}
        onChange={(e) => onChange(idx, e)}
      />
      {isValidated && !value && (
        <small className="text-red-600">Please enter a field name</small>
      )}
    </div>
  );
};

export default Field;
