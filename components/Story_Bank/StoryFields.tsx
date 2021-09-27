import React, { useContext, useState } from "react";
import { ModuleContext } from "./CreateStory";
import { useFormikContext } from "formik";

function StoryFields({ setInfoModule, infoModule, setStoryImg }: any) {
  const formikContext = useFormikContext();
  const { handleChange, values, errors, touched }: any = formikContext;
  const { modules }: any = useContext(ModuleContext);
  const [subModule, setSubModule] = useState([]);
  const [duration, setDuration] = useState(0);
  const [previewImg, setPreviewImg] = useState("");

  const onModuleChange = (e) => {
    setInfoModule({ ...infoModule, module: e.target.value });
    let selectedMdl: any = modules.filter(
      (module: { _id: any }) => module._id == e.target.value
    );
    setSubModule(selectedMdl[0]?.subModule);
  };

  const onSubModuleChange = (e, moduleId) => {
    if (e.target.value) {
      setInfoModule({ ...infoModule, subModule: e.target.value });
      const mdl = modules.filter((module) => module._id == moduleId);
      const subMdl = mdl[0]?.subModule.filter(
        (subMdl) => subMdl._id == e.target.value
      );
      setDuration(subMdl[0]?.duration || 0);
    }
  };

  const uploadImg = (e) => {
    let file = e.target.files[0];
    setStoryImg(file);
    // render image
    const objectUrl = URL.createObjectURL(file);
    setPreviewImg(objectUrl);
  };

  const onDurationChange = (e) => {
    setInfoModule({ ...infoModule, duration: e.target.value });
  };

  return (
    <>
      <div className={"flex w-full flex-col mt-10"}>
        <div
          className={"rounded-md bg-gray-50 mb-8 grid gap-10 grid-cols-5 py-14"}
        >
          <div className="flex justify-center px-4">
            <div
              className={
                "grid relative place-items-center rounded-full bg-white w-28 h-28"
              }
              style={{
                border: "0.5px solid #E0E0E0",
                boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
              }}
            >
              {previewImg ? (
                <div className={"overflow-hidden w-28 h-28 rounded-full"}>
                  <img className={"w-full"} src={previewImg} alt={"photo"} />
                </div>
              ) : (
                <img
                  className={""}
                  src={"/img/story-bank/photo_size.svg"}
                  alt={"photo"}
                />
              )}
              <input
                accept="image/png, image/gif, image/jpeg"
                onChange={uploadImg}
                type="file"
                className="hidden"
                name="image"
                id="image"
              />
              <label
                htmlFor="image"
                className={
                  "w-max rounded-full bg-white grid place-items-center p-2 absolute top-0 right-0"
                }
                style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  className={"w-6"}
                  src={"/img/story-bank/photo_camera.svg"}
                  alt={"photo"}
                />
              </label>
            </div>
          </div>
          <div className="col-span-4 px-5">
            <div className={"grid grid-cols-3 gap-8"}>
              <div>
                <select
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
                  }
                  onChange={onModuleChange}
                  name={"module"}
                >
                  <option>Module</option>
                  {modules.map((module, i) => (
                    <option key={i} value={module._id}>
                      {module.name}
                    </option>
                  ))}
                </select>
                {touched.module && errors.module && (
                  <small className="text-red-700">{errors.module}</small>
                )}
              </div>
              <div>
                <select
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
                  }
                  onChange={(e) => onSubModuleChange(e, subModule[0]?.module)}
                  name={"subModule"}
                >
                  <option value={""}>Sub Module</option>
                  {subModule.map((e, i) => (
                    <option key={i} value={e._id}>
                      {e.name}
                    </option>
                  ))}
                </select>
                {touched.subModule && errors.subModule && (
                  <small className="text-red-700">{errors.subModule}</small>
                )}
              </div>
              <div>
                <select
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
                  }
                  name={"duration"}
                  onChange={onDurationChange}
                >
                  <option value={0}>Duration</option>
                  {Array.from(Array(duration), (e, i) => {
                    return (
                      <option value={i + 1} key={i}>
                        Day {i + 1}
                      </option>
                    );
                  })}
                </select>
                {touched.duration && errors.duration && (
                  <small className="text-red-700">{errors.duration}</small>
                )}
              </div>
            </div>
            <div className={"mt-5"}>
              <input
                name={"title"}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
                }
                type={"text"}
                placeholder={"Title"}
                onChange={handleChange}
                value={values.title}
              />
              {touched.title && errors.title && (
                <small className="text-red-700">{errors.title}</small>
              )}
            </div>
            <div className={"mt-5"}>
              <textarea
                name={"subTitle"}
                placeholder={"Sub Title"}
                rows={2}
                onChange={handleChange}
                value={values.subTitle}
                className={
                  "w-full focus:outline-none text-lg pb-0 border-b border-gray-300 text-gray-700 bg-gray-50"
                }
              ></textarea>
              {touched.subTitle && errors.subTitle && (
                <small className="text-red-700">{errors.subTitle}</small>
              )}
            </div>
            <div className={"mt-5"}>
              <textarea
                name={"quote"}
                placeholder={"Quote"}
                rows={2}
                onChange={handleChange}
                value={values.quote}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
              ></textarea>
              {touched.quote && errors.quote && (
                <small className="text-red-700">{errors.quote}</small>
              )}
            </div>
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>Profile</h3>
          <div className={"mt-5"}>
            <input
              name={"profileTitle"}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
              }
              type={"text"}
              placeholder={"Title"}
              onChange={handleChange}
              value={values.profileTitle}
            />
            {touched.profileTitle && errors.profileTitle && (
              <small className="text-red-700">{errors.profileTitle}</small>
            )}
          </div>
          <div className={"mt-5"}>
            <textarea
              name={"profileSubTitle"}
              placeholder={"Sub Title"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              onChange={handleChange}
              value={values.profileSubTitle}
            ></textarea>
            {touched.profileSubTitle && errors.profileSubTitle && (
              <small className="text-red-700">{errors.profileSubTitle}</small>
            )}
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Experience
          </h3>

          <div className={"mt-5"}>
            <input
              name={"experienceTitle"}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
              }
              type={"text"}
              placeholder={"Title"}
              onChange={handleChange}
              value={values.experienceTitle}
            />
            {touched.experienceTitle && errors.experienceTitle && (
              <small className="text-red-700">{errors.experienceTitle}</small>
            )}
          </div>
          <div className={"mt-5"}>
            <textarea
              name={"experienceDescription"}
              placeholder={"Description"}
              onChange={handleChange}
              value={values.experienceDescription}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
            ></textarea>
            {touched.experienceDescription && errors.experienceDescription && (
              <small className="text-red-700">
                {errors.experienceDescription}
              </small>
            )}
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Success Story
          </h3>
          <div className={"mt-5"}>
            <input
              name={"successStoryTitle"}
              onChange={handleChange}
              value={values.successStoryTitle}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-3"
              }
              type={"text"}
              placeholder={"Title"}
            />
            {touched.successStoryTitle && errors.successStoryTitle && (
              <small className="text-red-700">{errors.successStoryTitle}</small>
            )}
          </div>
          <div className={"mt-5"}>
            <textarea
              name={"successStoryDescription"}
              placeholder={"Description"}
              onChange={handleChange}
              value={values.successStoryDescription}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
            ></textarea>
            {touched.successStoryDescription &&
              errors.successStoryDescription && (
                <small className="text-red-700">
                  {errors.successStoryDescription}
                </small>
              )}
          </div>
        </div>
        <div>
          <button
            type={"submit"}
            style={{ backgroundColor: "#B569D4" }}
            className={
              "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default StoryFields;
