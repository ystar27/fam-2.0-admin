import { useState } from "react";

export default function Profile({
  activeStory,
  setActiveStory,
  setIdx,
  setStoryImg,
}: any) {
  const {
    experience,
    duration,
    quote,
    image,
    module,
    profile,
    subModule,
    subTitle,
    title,
    successStory,
  } = activeStory;
  const [previewImg, setPreviewImg] = useState("");
  const [previewImgErr, setPreviewImgErr] = useState(false);
  const [displayDuration, setDuration] = useState(subModule.duration);

  const onDurationChange = (e) => {
    setActiveStory({ ...activeStory, duration: e.target.value });
  };

  const uploadImg = (e) => {
    let file = e.target.files[0];

    if (file && file.size < 5500000) {
      setPreviewImgErr(false);
      setStoryImg(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewImg(objectUrl);
    } else if (file.size > 5500000) {
      setPreviewImgErr(true);
    } else {
      setPreviewImgErr(false);
    }
  };

  return (
    <div>
      <div className={"bg-white w-full py-20 px-5 md:px-10"}>
        <div
          className={"rounded-md bg-gray-50 mb-8 grid gap-10 grid-cols-5 py-14"}
        >
          <div className="flex flex-col justify-start px-4">
            <div className="flex justify-center">
              <div
                className={
                  "grid relative place-items-center rounded-full bg-white w-28 h-28"
                }
                style={{
                  border: "0.5px solid #E0E0E0",
                  boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
                }}
              >
                {previewImg || image ? (
                  <div className={"overflow-hidden w-28 h-28 rounded-full"}>
                    <img
                      className={"w-full"}
                      src={previewImg || image}
                      alt={"photo"}
                    />
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
            {previewImgErr && (
              <small className="block text-red-600 text-center">
                Image size should be less than 5mb
              </small>
            )}
          </div>
          <div className="col-span-4 px-5">
            <div className={"grid grid-cols-3 gap-8"}>
              <div>
                <select
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                >
                  <option value={module?._id}>{module?.name}</option>
                </select>
              </div>
              <div>
                <select
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                >
                  <option value={subModule?._id}>{subModule?.name}</option>
                </select>
              </div>
              <div>
                <select
                  onChange={onDurationChange}
                  className={
                    "w-full focus:outline-none text-base border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                  }
                >
                  <option value={duration}>Day {duration}</option>
                  {Array.from(Array(displayDuration), (e, i) => {
                    return (
                      <option value={i + 1} key={i}>
                        Day {i + 1}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className={"mt-5"}>
              <input
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
                }
                type={"text"}
                placeholder={"Title"}
                value={title}
                onChange={(e) =>
                  setActiveStory({
                    ...activeStory,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className={"mt-5"}>
              <textarea
                placeholder={"Sub Title"}
                rows={2}
                value={subTitle}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
                onChange={(e) =>
                  setActiveStory({
                    ...activeStory,
                    subTitle: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className={"mt-5"}>
              <textarea
                placeholder={"Quote"}
                rows={2}
                className={
                  "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
                }
                value={quote}
                onChange={(e) =>
                  setActiveStory({
                    ...activeStory,
                    quote: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>Profile</h3>
          <div className={"mt-5"}>
            <input
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
              }
              type={"text"}
              placeholder={"Title"}
              value={profile?.title}
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  profile: { ...profile, title: e.target.value },
                })
              }
            />
          </div>
          <div className={"mt-5"}>
            <textarea
              placeholder={"Sub Title"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  profile: { ...profile, subTitle: e.target.value },
                })
              }
              value={profile?.subTitle}
            ></textarea>
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Experience
          </h3>
          <div className={"mt-5"}>
            <input
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
              }
              type={"text"}
              placeholder={"Title"}
              value={experience?.title}
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  experience: { ...experience, title: e.target.value },
                })
              }
            />
          </div>
          <div className={"mt-5"}>
            <textarea
              placeholder={"Description"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              value={experience?.description}
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  experience: { ...experience, description: e.target.value },
                })
              }
            ></textarea>
          </div>
        </div>
        <div className={"rounded-md bg-gray-50 mb-8  py-14 px-5"}>
          <h3 className={"text-xl md:text-2xl font-semibold mb-3"}>
            Success Story
          </h3>
          <div className={"mt-5"}>
            <input
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50 pb-4"
              }
              type={"text"}
              placeholder={"Title"}
              value={successStory?.title}
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  successStory: { ...successStory, title: e.target.value },
                })
              }
            />
          </div>
          <div className={"mt-5"}>
            <textarea
              placeholder={"Description"}
              rows={2}
              className={
                "w-full focus:outline-none text-lg border-b border-gray-300 text-gray-700 bg-gray-50"
              }
              value={successStory?.description}
              onChange={(e) =>
                setActiveStory({
                  ...activeStory,
                  successStory: {
                    ...successStory,
                    description: e.target.value,
                  },
                })
              }
            ></textarea>
          </div>
        </div>
        <div className={"flex justify-center mt-5"}>
          <button
            style={{ backgroundColor: "#B569D4" }}
            className={
              "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
            }
            onClick={() => setIdx(1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
