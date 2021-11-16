import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DetailItem from "./Report/DetailItem";
import moment from "moment";

export default function ProjectReportDetails({
  activeProject,
  setDetails,
}: any) {
  const [report, setReport] = useState(true);
  console.log(activeProject);

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        style={{ maxHeight: "75vh" }}
        className={`max-w-4xl rounded-md overflow-hidden slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
      >
        <div className={"p-5 flex items-center justify-between bg-gray-50"}>
          <h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
            Project Idea Details
          </h2>
          <button className={"p-2 bg-white"} onClick={() => setDetails(false)}>
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"overflow-y-auto overflow-x-hidden"}>
          <div className={"py-10 px-5 flex"}>
            <div
              onClick={() => setReport(true)}
              className={"mr-4 cursor-pointer"}
              style={{ borderBottom: report ? "1.5px solid #B569D4" : "" }}
            >
              <h3 style={{ color: "#B569D4" }} className={"font-semibold"}>
                Report
              </h3>
            </div>
            <div
              onClick={() => setReport(false)}
              className={"cursor-pointer"}
              style={{ borderBottom: !report ? "1.5px solid #B569D4" : "" }}
            >
              <h3 style={{ color: "#B569D4" }} className={"font-semibold"}>
                Idea
              </h3>
            </div>
          </div>
          <div className={"px-5"}>
            {report ? (
              <div>
                <DetailItem
                  title={"Project Name"}
                  detail={activeProject?.idea?.projectName}
                />
                <DetailItem
                  title={"Location"}
                  detail={activeProject?.location}
                />
                <DetailItem
                  title={"Implementation"}
                  detail={activeProject?.howImplemented}
                />
                <DetailItem
                  title={"Number Impacted"}
                  detail={activeProject?.peopleImpacted}
                />
                <DetailItem
                  title={"Personal Achievement"}
                  detail={activeProject?.projectSelfImprovement}
                />
                <DetailItem
                  title={"Challenges"}
                  detail={activeProject?.challenges}
                />
                <DetailItem title={"Lessons"} detail={activeProject?.lessons} />
                <DetailItem
                  title={"Amount Spent"}
                  detail={activeProject?.amountSpent}
                />
                <DetailItem
                  title={"Date Completed"}
                  detail={
                    // moment(activeProject?.date).format("MMM Do YYYY") ||
                    moment(activeProject.createdAt).format("MMM Do YYYY")
                  }
                />
              </div>
            ) : (
              <div>
                <DetailItem
                  title={"Project Name"}
                  detail={activeProject?.idea?.projectName}
                />
                <DetailItem
                  title={"Category"}
                  detail={activeProject?.idea?.projectCategory}
                />
                <DetailItem
                  title={"Problem to solve"}
                  detail={activeProject?.idea?.problemToAddress}
                />
                <DetailItem
                  title={"Solution"}
                  detail={activeProject?.idea?.solution}
                />
                <DetailItem
                  title={"Expectations"}
                  detail={activeProject?.idea?.expectFromProject}
                />
                <DetailItem
                  title={"Benefits"}
                  detail={activeProject?.idea?.benefitFromProject}
                />
                <DetailItem
                  title={"Reason for Problem"}
                  detail={activeProject?.idea?.reasonForProblem}
                />
                <DetailItem
                  title={"Publicity"}
                  detail={activeProject?.idea?.publicizeProject}
                />
                <DetailItem
                  title={"Partners"}
                  detail={activeProject?.idea?.partners}
                />
                <DetailItem
                  title={"Created At"}
                  detail={moment(activeProject?.idea?.createdAt).format(
                    "MMM Do YYYY"
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
