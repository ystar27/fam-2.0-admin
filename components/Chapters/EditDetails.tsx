import { Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import axios from "../../services/axios";
import { notificationsContext } from "../../pages/_app";

type Props = {
  chapter: any;
  setChapters: Function;
  setActiveTab: Function;
  setChapter: Function;
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const EditDetails = ({
  chapter,
  setChapters,
  setActiveTab,
  setChapter,
}: Props) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const notification: any = useContext(notificationsContext);

  return (
    <div className="pt-10">
      <Formik
        initialValues={{
          description: chapter?.display?.description,
          name: chapter?.display?.name || chapter.pioneers[0]?.name,
          email: chapter?.display?.email || chapter.pioneers[0]?.email,
          phone: chapter?.display?.phone || chapter.pioneers[0]?.phone,
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          setSubmitting(true);
          try {
            const res = await axios.patch(`/chapter/${chapter._id}`, values);
            console.log("_____", res);
            setChapters((prev: any) => ({
              loading: false,
              data: prev.data.map((chap: any) =>
                chap._id === chapter._id ? res.data.data : chap
              ),
            }));
            setChapter(res.data.data);
            setSubmitting(false);
            notification.success({
              message: "Chapter Updated successfull",
            });
            setActiveTab(1);
          } catch (error: any) {
            console.log(error?.response || error.message);
            setSubmitting(false);
            notification.warn({
              message: "Sub Module Error",
              description: "Unable to create Daily Content",
            });
          }
        }}
      >
        {({ handleChange, values, errors }) => (
          <Form>
            <div>
              <label
                htmlFor="description"
                className="text-gray-900 pb-1.5 block"
              >
                Upate main description
              </label>
              <textarea
                name="description"
                id="description"
                cols={30}
                rows={5}
                defaultValue={values.description}
                value={values.description}
                onChange={handleChange}
                className="w-full block border border-gray-300 py-2 px-5 rounded-sm outline-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 duration-200"
              ></textarea>
            </div>
            <div className="mt-8">
              <h4 className="text-gray-900 pb-2 block">Upate lead poineer</h4>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    className={`bg-white px-5 py-2 block duration-200 focus:outline-none border focus:ring-1 ${
                      errors.name
                        ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                        : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    } rounded`}
                  />
                  <small className="text-red-600">{errors.name}</small>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    className={`bg-white px-5 py-2 block duration-200 focus:outline-none border focus:ring-1 ${
                      errors.email
                        ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                        : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    } rounded`}
                  />
                  <small className="text-red-600">{errors.email}</small>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="phone"
                    placeholder="Phone"
                    value={values.phone}
                    className={`bg-white px-5 py-2 block duration-200 focus:outline-none border focus:ring-1 ${
                      errors.phone
                        ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                        : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    } rounded`}
                  />
                  <small className="text-red-600">{errors.phone}</small>
                </div>
              </div>
            </div>
            <button className="block w-full max-w-max px-5 py-2 bg-primary text-white mt-7 text-sm hover:opacity-70 duration-200 ml-auto">
              {isSubmitting && (
                <i className="fa fa-spin fa-spinner text-white mr-3"></i>
              )}
              Update Chapter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditDetails;
