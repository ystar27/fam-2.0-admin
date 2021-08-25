import React, { useState } from "react";
import Questions from "./Questions";
import Profile from "./Profile";

export default function EditStory() {
  const [idx, setIdx] = useState(0);

  return (
    <div className={"my-14"}>
      <div className={"flex items-center justify-end"}>
        <button
          className={"py-2 px-4 font-light text-base rounded mr-4"}
          style={{ color: "#EB5757", border: "0.779841px solid #EB5757" }}
        >
          Delete Story
        </button>
        <button
          className={"py-2 px-4 font-light text-base rounded text-white"}
          style={{ backgroundColor: "#B569D4" }}
        >
          Save
        </button>
      </div>

      <div>
        <div className={"flex items-center justify-start"}>
          <button
            className={"w-32 py-2"}
            onClick={() => setIdx(0)}
            style={
              idx == 0
                ? {
                    color: "#B569D4",
                    background: "#fff",
                    borderTop: "3px solid #B569D4",
                  }
                : {}
            }
          >
            Edit
          </button>
          <button
            className={"w-32 py-2"}
            onClick={() => setIdx(1)}
            style={
              idx == 1
                ? {
                    color: "#B569D4",
                    background: "#fff",
                    borderTop: "3px solid #B569D4",
                  }
                : {}
            }
          >
            Questions
          </button>
        </div>
        {idx < 1 ? <Profile /> : <Questions />}
      </div>
    </div>
  );
}
