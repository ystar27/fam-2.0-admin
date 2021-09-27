import { useContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../services/axios";
import { notificationsContext } from "../../pages/_app";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Utils from "../../services/utils";

export default function StoryFinish({
  storyImg,
  setAction,
  infoModule,
  storyInfos,
  storyQuestions,
  setCreateStoryIdx,
}: any) {
  const router = useRouter();
  const notification = useContext(notificationsContext);
  const [spin, setSpin] = useState(false);

  const submitStory = async () => {
    let image = "";
    setSpin(true);

    try {
      if (storyImg.name && storyImg.size) {
        let image64 = await Utils.getBase64(storyImg);

        let uploadedImg = await axios.post(
          "https://api.cloudinary.com/v1_1/collinspro/image/upload",
          {
            file: image64,
            upload_preset: "mnj1wcl2",
            folder: "fam",
          }
        );
        image = uploadedImg.data.secure_url;
      }

      await axios.post("/story", {
        ...infoModule,
        ...storyInfos,
        image: image,
        profile: {
          title: storyInfos.profileTitle,
          subTitle: storyInfos.profileSubTitle,
        },
        experience: {
          title: storyInfos.experienceTitle,
          description: storyInfos.experienceDescription,
        },
        successStory: {
          title: storyInfos.successStoryTitle,
          description: storyInfos.successStoryDescription,
        },
        questions: storyQuestions,
      });

      notification.success({
        message: "Story Created",
        description: "Your story was created",
      });
      router.back();
      setSpin(false);
    } catch (error) {
      setSpin(false);
      notification.warn({
        message: "Story Error",
        description: "Unable to create story",
      });
    }
  };

  return (
    <div className={"flex w-full flex-col mt-10"}>
      <div
        className={
          "rounded-md relative bg-gray-50 mb-8 text-center py-14 px-5 md:px-10"
        }
      >
        <h3 className={"text-lg text-gray-600 font-extralight mb-3"}>
          You are almost done !
        </h3>
        <h2
          style={{ color: "#B569D4" }}
          className={"text-lg font-normal md:text-xl mb-4"}
        >
          If you have verified all your entries, go ahead to submit
        </h2>
        <button
          style={{ backgroundColor: "#B569D4" }}
          onClick={() => submitStory()}
          className={
            "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          <div className={"flex items-center"}>
            <p className={"mr-2"}>Submit Story</p>{" "}
            <FontAwesomeIcon
              spin
              className={`h-5 w-5 spin ${spin ? "block" : "hidden"}`}
              icon={faSpinner}
            />
          </div>
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: "#EFE3F5", color: "#B569D4" }}
          onClick={() => setCreateStoryIdx(1)}
          className={
            "px-5 py-2 mr-4 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Back
        </button>
        <button
          style={{ backgroundColor: "#B569D4" }}
          onClick={() => setCreateStoryIdx(0)}
          className={
            "px-5 py-2 text-lg rounded text-white font-semibold focus:outline-none"
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
