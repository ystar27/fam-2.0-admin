import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import moment from "moment";
import axiosInstance from "../../services/axios";
import EditDetails from "./EditDetails";

export default function DetailsModal({
  setCreateModalOpen,
  chapter,
  setChapter,
  setChapters,
}: any) {
  const [isListActionSubmitting, setListActionSubmitting] = useState(false);
  const [isTopActionSubmitting, setTopActionSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isApproveActionSubmitting, setApproveActionSubmitting] =
    useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const notification: any = useContext(notificationsContext);
  const slideRef: any = useRef();

  const deleteChapter = async () => {
    setDeleting(true);
    try {
      const res = await axiosInstance.delete(`/chapter/${chapter?._id}`);
      setChapters((prev: any) => ({
        loading: false,
        data: prev.data.filter((chap: any) => chapter._id !== chap._id),
      }));
      notification.success({ message: "FAM chapter deleted successfully" });
      setDeleting(false);
    } catch (error: any) {
      setDeleting(false);
      notification.error({
        message: error.response ? error.response.data.message : error.message,
      });
      console.log("error______", error.response || error.message);
    }
  };

  const addToList = async () => {
    setListActionSubmitting(true);
    try {
      const res = await axiosInstance.post(`/chapter/${chapter?._id}/list`);
      setChapters((prev: any) => ({
        loading: false,
        data: prev.data.map((chap: any) =>
          chapter._id === chap._id ? res.data.data : chap
        ),
      }));
      setChapter(res.data.data);
      notification.success({ message: "FAM chpter listed successfully" });
      setListActionSubmitting(false);
    } catch (error: any) {
      setListActionSubmitting(false);
      notification.error({
        message: error.response ? error.response.data.message : error.message,
      });
      console.log("error______", error.response || error.message);
    }
  };

  const removeFromList = async () => {
    setListActionSubmitting(true);
    try {
      const res = await axiosInstance.post(`/chapter/${chapter?._id}/delist`);
      setChapters((prev: any) => ({
        loading: false,
        data: prev.data.map((chap: any) =>
          chapter._id === chap._id ? res.data.data : chap
        ),
      }));
      setChapter(res.data.data);
      notification.success({ message: "FAM chpter delisted successfully" });
      setListActionSubmitting(false);
    } catch (error: any) {
      setListActionSubmitting(false);
      notification.error({
        message: error.response ? error.response.data.message : error.message,
      });
      console.log("error______", error.response || error.message);
    }
  };

  const toggleTop = async () => {
    setTopActionSubmitting(true);
    try {
      const res = await axiosInstance.post(
        `/chapter/toggle/${chapter?._id}/top`
      );
      setChapters((prev: any) => ({
        loading: false,
        data: prev.data.map((chap: any) =>
          chapter._id === chap._id ? res.data.data : chap
        ),
      }));
      setChapter(res.data.data);
      notification.success({ message: "FAM chapter top status toggled" });
      setTopActionSubmitting(false);
    } catch (error: any) {
      setTopActionSubmitting(false);
      notification.error({
        message: error.response ? error.response.data.message : error.message,
      });
      console.log("error______", error.response || error.message);
    }
  };

  const toggleApprove = async () => {
    setApproveActionSubmitting(true);
    try {
      const res = await axiosInstance.post(
        `/chapter/toggle/${chapter?._id}/approve`
      );
      setChapters((prev: any) => ({
        loading: false,
        data: prev.data.map((chap: any) =>
          chapter._id === chap._id ? res.data.data : chap
        ),
      }));
      setChapter(res.data.data);
      notification.success({ message: "FAM chapter approve status toggled" });
      setApproveActionSubmitting(false);
    } catch (error: any) {
      setApproveActionSubmitting(false);
      notification.error({
        message: error.response ? error.response.data.message : error.message,
      });
      console.log("error______", error.response || error.message);
    }
  };

  return (
    <div
      className={"w-full h-full absolute overflow-hidden overflow-y-auto"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        ref={slideRef}
        style={{ maxWidth: "53rem" }}
        className={`slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-20 bg-white flex flex-col`}
      >
        <div
          className={"p-5 py-3 flex items-center justify-between bg-gray-50"}
        >
          <h2
            className={"text-lg text-center font-semibold"}
            style={{ color: "#B569D4" }}
          >
            FAM Chapters Details
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setCreateModalOpen(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <div className="flex items-center">
            <h4
              className={`${
                activeTab === 1
                  ? "border-b border-primary text-primary"
                  : "text-gray-700"
              } text-lg font-medium max-w-max cursor-pointer`}
              onClick={() => setActiveTab(1)}
            >
              Details
            </h4>
            <h4
              className={`${
                activeTab === 2
                  ? "border-b border-primary text-primary"
                  : "text-gray-700"
              } text-lg font-medium max-w-max cursor-pointer ml-5`}
              onClick={() => setActiveTab(2)}
            >
              Edit
            </h4>
          </div>
          {activeTab === 1 ? (
            <>
              <div className="mb-8 flex justify-end items-center">
                {chapter.approved ? (
                  <>
                    {chapter.top ? (
                      <button
                        className={
                          "rounded mr-5 py-1 px-4 flex items-center bg-yellow-100 hover:bg-yellow-200 duration-150 text-yellow-500"
                        }
                        onClick={toggleTop}
                      >
                        {isTopActionSubmitting ? (
                          <i className="fa fa-spin fa-spinner mr-3"></i>
                        ) : (
                          <i className="fa fa-times mr-2"></i>
                        )}
                        Remove from Top
                      </button>
                    ) : (
                      <button
                        className={
                          "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                        }
                        onClick={toggleTop}
                      >
                        {isTopActionSubmitting ? (
                          <i className="fa fa-spin fa-spinner mr-3"></i>
                        ) : (
                          <i className="fa fa-check mr-2"></i>
                        )}
                        Add to top
                      </button>
                    )}
                    {chapter.status === "LISTED" ? (
                      <button
                        className={
                          "rounded mr-5 py-1 px-4 flex items-center bg-yellow-100 hover:bg-yellow-200 duration-150 text-yellow-500"
                        }
                        onClick={removeFromList}
                      >
                        {isListActionSubmitting ? (
                          <i className="fa fa-spin fa-spinner mr-3"></i>
                        ) : (
                          <i className="fa fa-times mr-2"></i>
                        )}
                        Delist
                      </button>
                    ) : (
                      <button
                        className={
                          "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                        }
                        onClick={addToList}
                      >
                        {isListActionSubmitting ? (
                          <i className="fa fa-spin fa-spinner mr-3"></i>
                        ) : (
                          <i className="fa fa-check mr-2"></i>
                        )}
                        List
                      </button>
                    )}
                    <button
                      className={
                        "rounded mr-5 py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500"
                      }
                      onClick={toggleApprove}
                    >
                      {isApproveActionSubmitting ? (
                        <i className="fa fa-spin fa-spinner mr-3"></i>
                      ) : (
                        <i className="fa fa-times mr-2"></i>
                      )}
                      Disapprove
                    </button>
                  </>
                ) : (
                  <button
                    className={
                      "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                    }
                    onClick={toggleApprove}
                  >
                    {isApproveActionSubmitting ? (
                      <i className="fa fa-spin fa-spinner mr-3"></i>
                    ) : (
                      <i className="fa fa-check mr-2"></i>
                    )}
                    Approve
                  </button>
                )}
                <button
                  className={
                    "rounded mr-5 py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500"
                  }
                  onClick={deleteChapter}
                >
                  {isDeleting ? (
                    <i className="fa fa-spin fa-spinner mr-3"></i>
                  ) : (
                    <i className="fa fa-trash mr-2"></i>
                  )}
                  Delete
                </button>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Name:</h3>
                <h3>
                  {chapter.firstName} {chapter.lastName}
                </h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Professional:</h3>
                <h3>{chapter.profession}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Age Range:</h3>
                <h3>{chapter.ageRange}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Status:</h3>
                <h3>{chapter.status}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400 capitalize">Top:</h3>
                <h3>{chapter.top ? "Yes" : "No"}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Description:</h3>
                <h3>{chapter.description}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">Main or Admin Description:</h3>
                <h3>{chapter?.display?.description}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Have you completed the female And more Self-esteem module
                  before? If yes, mention the year and module name:
                </h3>
                <h3>{chapter.famCompleted}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Have you coordinated, worked with or mentored females before?
                  If yes, share a brief detail below:
                </h3>
                <h3>{chapter.coordination}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Have you mentored or worked with girls or females before on
                  personal development?
                </h3>
                <h3>{chapter.famCompleted}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Are you committed to supporting females build Self-esteem,
                  develop their potentials and reach for the highest levels in
                  life?
                </h3>
                <h3>{chapter.femaleCommitted}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Why do you want to start a FAM Chapter in your area/campus?
                </h3>
                <h3>{chapter.reasonForChapter}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Are you committing to doing the work of building and growing a
                  vibrant and supportive community of females?:
                </h3>
                <h3>{chapter.workCommitted}</h3>
              </div>
              <div className="grid grid-cols-2 items-center px-5 gap-5 bg-gray-50 py-3 mb-3">
                <h3 className="text-gray-400">
                  Are you sure you can meet the requirement of getting approved
                  and accredited within 3 months’ time frame?:
                </h3>
                <h3>{chapter.meetDeadline}</h3>
              </div>
              <div className="px-5 bg-gray-50 py-2 pb-6 mb-1">
                <h3 className="text-gray-400">Pioneers</h3>
                {chapter.pioneers.map((pioneer: any) => (
                  <div className="grid grid-cols-3 gap-5 mt-3">
                    <div className="bg-white px-5 py-2 border border-gray-200 rounded">
                      {pioneer.name}
                    </div>
                    <div className="bg-white px-5 py-2 border border-gray-200 rounded">
                      {pioneer.phone}
                    </div>
                    <div className="bg-white px-5 py-2 border border-gray-200 rounded">
                      {pioneer.email}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <EditDetails
              setActiveTab={setActiveTab}
              setChapters={setChapters}
              chapter={chapter}
              setChapter={setChapter}
            />
          )}
        </div>
      </div>
    </div>
  );
}
