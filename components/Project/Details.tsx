import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CreateCoach({ activeProject, setDetails }: any) {
  let date = new Date(activeProject.createdAt);

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
          <div className={"py-10 px-5"}>
            <h3 style={{ color: "#B569D4" }}>Project Information</h3>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Project Name</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.projectName || "Project Name"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Problem to address</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.problemToSolve ||
                    "Problem to solve"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Project Category</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.projectCategory || "Category"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Will you work with partners</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.willYouWorkWithPartners ||
                    "Will you work with partners"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Reason for project</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.reasonForSolvingProblem ||
                    "Reason for project"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Solution to problem</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.explainSolutionToProblem ||
                    "Solution to problem"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Project implementation</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.projectImplementation ||
                    "Project implementation"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Project implementation location</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject.ideaDetails.projectImplementationLocation ||
                    "Project implementation location"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>User Full Name</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {`${activeProject.user?.firstName} ${activeProject.user?.lastName} ` ||
                    "Full Name"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Email</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject?.user?.personalInfo?.email ||
                    activeProject?.user?.email ||
                    "Email"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Phone Number</h3>
              </div>
              <div className={"col-span-3"}>
                <h3>
                  {activeProject?.user?.personalInfo?.phoneNumber ||
                    activeProject?.user?.phoneNumber ||
                    "Phone Number"}
                </h3>
              </div>
            </div>
            <div
              className={
                "grid grid-cols-4 gap-5 py-4 rounded bg-gray-50 px-3 mb-4"
              }
            >
              <div className="font-mono font-semibold text-gray-500">
                <h3>Day Submitted</h3>
              </div>
              <div>
                <h3>{date.toDateString() || "Date"}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
