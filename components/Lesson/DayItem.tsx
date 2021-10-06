import React from "react";

const DayItem = ({ index, lessons, updateDayLessons }: any) => {
  return (
    <div className={"bg-gray-50 w-full rounded-md p-5"}>
      <h4 className={"font-mono font-semibold mb-3"}>Day {index + 1}</h4>
      <div className={"mb-4 w-full"}>
        <select
          name={"issue"}
          onChange={(e) => updateDayLessons(e, index + 1)}
          className={
            "pb-4 pt-2 w-full text-gray-700 bg-transparent border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
          }
        >
          <option value="" className={"hover:bg-purple-400"}>
            Select Lesson
          </option>
          {lessons.map((e: any, i) => (
            <option key={i} value={e._id} className={"hover:bg-purple-400"}>
              {e?.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DayItem;
