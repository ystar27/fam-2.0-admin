import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";
import Utils from "../../services/utils";
import { useState } from "react";
import { useRef } from "react";

const initialCoachState = {
  name: "",
  description: "",
  issue: "",
  image: "",
};

export default function CreateCoach({
  coaches,
  setCoaches,
  setCreateCoach,
}: any) {
  const [previewImg, setPreviewImg] = useState("");
  const [imgFile, setImgFile] = useState({});
  const [issues, setIssues] = useState([]);
  const [previewImgErr, setPreviewImgErr] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialCoachState);
  const notification = useContext(notificationsContext) as any;
  const slideRef = useRef();

  useEffect(() => {
    axios
      .get("/issue")
      .then((res) => {
        setIssues(res.data.data);
      })
      .catch((error) => {
        notification.warn({
          message: "Network error",
          description: "Check network connection",
        });
      });
  }, []);

  const uploadImg = (e: { target: { files: any[] } }) => {
    let file = e.target.files[0];

    if (file && file.size < 5500000) {
      setPreviewImgErr(false);
      setImgFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewImg(objectUrl);
    } else if (file.size > 5500000) {
      setPreviewImgErr(true);
    } else {
      setPreviewImgErr(false);
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (data.name && data.issue) {
        setError(false);
        if (imgFile.name && imgFile.size) {
          let image64 = await Utils.getBase64(imgFile);
          data.image = image64;
        }

        let createdIssue = await axios.post("/coach", data);
        setCoaches([createdIssue.data.data, ...coaches]);
        setCreateCoach(false);
        notification.success({
          message: "Successful",
          description: "Coach created successfully",
        });
      } else {
        setError(true);
      }
    } catch (error) {
      notification.warn({
        message: "Request not sent",
        description: "Check network connection",
      });
    }
  };

  return (
    <div
      className={"w-full h-full absolute overflow-hidden"}
      style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}
    >
      <form onSubmit={onSubmit}>
        <div
          ref={slideRef}
          className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
        >
          <div className={"p-5 flex items-center justify-between bg-gray-50"}>
            <h2
              className={"text-lg font-semibold"}
              style={{ color: "#B569D4" }}
            >
              Create New Coach
            </h2>
            <button
              className={"p-2 bg-white"}
              onClick={() => setCreateCoach(false)}
            >
              <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
            </button>
          </div>
          <div className={"p-5 py-10 bg-white"}>
            <div className={"flex flex-col"}>
              <div className="flex flex-col justify-start">
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
                        <img
                          className={"w-full"}
                          src={previewImg}
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
                  <small className="block text-red-600 text-center mt-1">
                    Image size should be less than 5mb
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <input
                  type={"text"}
                  name={"name"}
                  value={data.name}
                  placeholder={"Full Name"}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                />
                {error && !data.name && (
                  <small className="block text-red-600 mt-1">
                    Name is required
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <textarea
                  name={"description"}
                  value={data.description}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                  placeholder={"Description (Optional)"}
                  rows={1}
                ></textarea>
              </div>
              <div className={"mb-4"}>
                <select
                  name={"issue"}
                  value={data.issue}
                  onChange={(e) => onChange(e)}
                  className={
                    "pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"
                  }
                >
                  <option className={"hover:bg-purple-400"}>Issues</option>
                  {issues.map((e, idx) => (
                    <option
                      key={idx}
                      value={e._id}
                      className={"hover:bg-purple-400"}
                    >
                      {e.title}
                    </option>
                  ))}
                </select>
                {error && !data.issue && (
                  <small className="block text-red-600 mt-1">
                    Select coach related issue
                  </small>
                )}
              </div>
              <div className={"mb-4"}>
                <button
                  type={"submit"}
                  className={
                    "w-full text-white p-3 px-5 rounded text-lg font-semibold"
                  }
                  style={{ backgroundColor: "#B569D4" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
