import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { values } from "lodash";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  displayDay: Yup.date().required("Display day is required"),
  link: Yup.string().url("Enter a valid url"),
});

const FormMain = () => {
  const dateRef: any = useRef();
  const formik = useFormikContext<any>();

  const formatDate = (date: any) => {
    const newDate = new Date(date);
    console.log(newDate);
    return moment(newDate).format("YYYY-MM-DD");
  };

  useEffect(() => {
    if (formik.values.displayDay) {
      console.log(formatDate(formik.values.displayDay));
      dateRef.current.value = formatDate(formik.values.displayDay);
    }
  }, [formik.values.displayDay]);

  return (
    <>
      <div className={"mb-6"}>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
          className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
          placeholder={"Content Title"}
        />
        {formik.errors.title && (
          <small className="text-red-600">{formik.errors.title}</small>
        )}
      </div>
      <div className={"mb-6"}>
        <textarea
          placeholder={"Description"}
          rows={2}
          name="description"
          className={
            "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
          }
          onChange={formik.handleChange}
          defaultValue={formik.values.description}
        ></textarea>
        {formik.errors.description && (
          <small className="text-red-600">{formik.errors.description}</small>
        )}
      </div>
      <div className={"mb-6"}>
        <label
          htmlFor={"displayDay"}
          className={"text-xs font-mono text-gray-700"}
        >
          Display Day
        </label>
        <input
          name={"displayDay"}
          id="displayDay"
          type="date"
          ref={dateRef}
          onChange={formik.handleChange}
          className="pb-4 pt-2 w-full font-mono text-gray-500 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
        />
        {formik.errors.displayDay && (
          <small className="text-red-600">{formik.errors.displayDay}</small>
        )}
      </div>
      <div className="mb-6">
        <input
          type="text"
          name={"link"}
          id="link"
          onChange={formik.handleChange}
          className="pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
          placeholder={"Link"}
        />
        {formik.errors.link && (
          <small className="text-red-600">{formik.errors.link}</small>
        )}
      </div>
    </>
  );
};

export default function CreateDailyContent({
  setCreateModalOpen,
  setContents,
  setSuccessAlert,
  isEdit,
  content,
}: any) {
  const [isSubmitting, setSubmitting] = useState(false);
  const notification: any = useContext(notificationsContext);
  const slideRef: any = useRef();

  const CreateSubModule = (values: any) => {
    setSubmitting(true);
    axios
      .post("/daily-content", values)
      .then((res) => {
        setContents((prev: any[]) => [...prev, res.data?.data]);
        setCreateModalOpen(false);
      })
      .catch((err) => {
        console.log(err?.response || err.message);
        setSubmitting(false);
        notification.warn({
          message: "Sub Module Error",
          description: "Unable to create Daily Content",
        });
      });
  };

  const editContent = (values: any) => {
    setSubmitting(true);
    axios
      .patch(`/daily-content/${content._id}`, values)
      .then((res) => {
        setContents((prev: any[]) =>
          prev.map((cnt: any) =>
            cnt?._id === content._id ? res.data?.data : cnt
          )
        );
        setCreateModalOpen(false);
      })
      .catch((err) => {
        console.log(err?.response || err.message);
        setSubmitting(false);
        notification.warn({
          message: "Sub Module Error",
          description: "Unable to create Daily Content",
        });
      });
  };

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <div
        ref={slideRef}
        className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
      >
        <div className={"p-5 flex items-center justify-between bg-gray-50"}>
          <h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
            {isEdit ? "Edit" : "Create"} Daily Content
          </h2>
          <button
            className={"p-2 bg-white"}
            onClick={() => setCreateModalOpen(false)}
          >
            <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
          </button>
        </div>
        <div className={"p-5 py-10 bg-white"}>
          <Formik
            initialValues={{
              title: content?.title || "",
              description: content?.description || "",
              displayDay: content?.displayDay || "",
              link: content?.link || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              isEdit ? editContent(values) : CreateSubModule(values);
            }}
          >
            <Form className={"flex flex-col"}>
              <FormMain />
              <div className={"mb-6"}>
                <button
                  className={
                    "w-full text-white p-2 px-5 rounded text-lg font-semibold"
                  }
                  style={{ backgroundColor: "#B569D4" }}
                  type="submit"
                >
                  {isSubmitting && (
                    <i className="fa fa-spin mr-3 fa-spinner "></i>
                  )}
                  Submit Daily Content
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
