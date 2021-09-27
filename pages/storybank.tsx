import React, { useState, useContext } from "react";
import Link from "next/link";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import EditStory from "../components/Story_Bank/EditStory/EditStory";
import axios from "../services/axios";
import { notificationsContext } from "./_app";
import Utils from "../services/utils";
import ModuleStoryTable from "../components/Story_Bank/Table/ModuleStoryTable";
import StoryTable from "../components/Story_Bank/Table/StoryTable";

function StoryBank({ subMod, relatedSubModule }: any) {
  const [subModules, setSubModules] = useState(subMod);
  const [activeStory, setActiveStory] = useState({});
  const [deleteStory, setDeleteStory] = useState(false);
  const [editStory, setEditStory] = useState(false);
  const [storyImg, setStoryImg] = useState({});
  const notification = useContext(notificationsContext);

  const saveEdit = async () => {
    if (storyImg?.name && storyImg?.size) {
      let newImg = await Utils.getBase64(storyImg);
      let uploadedImg = await axios.post(
        "https://api.cloudinary.com/v1_1/collinspro/image/upload",
        {
          file: newImg,
          upload_preset: "mnj1wcl2",
          folder: "fam",
        }
      );
      activeStory.image = uploadedImg.data.secure_url;
      updateStory();
    } else {
      updateStory();
    }
  };

  const updateStory = async () => {
    try {
      let res = await axios.patch(`/story/${activeStory._id}`, {
        ...activeStory,
      });
      setSubModules(
        subModules.map((submodule) =>
          submodule._id == activeStory._id ? res.data.data : submodule
        )
      );
      notification.success({
        message: "Success",
        description: "Story have been updated",
      });
    } catch (error) {
      console.log(error);
      notification.warn({
        message: "Unable to get stories",
        description: "Check network connection",
      });
    }
  };

  const deleteStoryFunc = () => {
    axios
      .delete(`/story/${activeStory._id}`)
      .then((res) => {
        const uSubMdl = subModules.filter(
          (submodule) => submodule._id !== activeStory._id
        );
        setSubModules(uSubMdl);
        setDeleteStory(false);
        notification.success({
          message: "Success",
          description: "Story delete successful",
        });
      })
      .catch((error) => {
        notification.warn({
          message: "Unable to delete stories",
          description: "Check network connection",
        });
      });
  };

  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      {deleteStory && (
        <Delete
          deleteFunc={deleteStoryFunc}
          setIDelete={setDeleteStory}
          message={"Approve delete"}
        />
      )}
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex ems-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}>Story Bank</h5>
            </div>
          </div>
          <div>
            {editStory && activeStory ? (
              <EditStory
                saveEdit={saveEdit}
                setStoryImg={setStoryImg}
                activeStory={activeStory}
                setEditStory={setEditStory}
                setActiveStory={setActiveStory}
              />
            ) : (
              <div
                className={"w-full bg-white rounded py-6 mb-32"}
                style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
              >
                <div className={"px-5 flex justify-end"}>
                  <Link href={"/storybank/new"} passHref>
                    <a
                      className={
                        "py-1 px-2 w-56 text-center text-white rounded"
                      }
                      style={{
                        background: "#B569D4",
                        border: "0.4px solid #E0E0E0",
                      }}
                    >
                      Create Story
                    </a>
                  </Link>
                </div>
                {relatedSubModule ? (
                  <ModuleStoryTable
                    rows={subModules}
                    setActiveStory={setActiveStory}
                    setEditStory={setEditStory}
                    setDeleteStory={setDeleteStory}
                  />
                ) : (
                  <StoryTable
                    rows={subModules}
                    setActiveStory={setActiveStory}
                    setEditStory={setEditStory}
                    setDeleteStory={setDeleteStory}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export async function getServerSideProps(context) {
  let subModules = [];
  let relatedSubModule = false;
  try {
    if (context.query?.subModule) {
      relatedSubModule = true;
      let res = await axios.get(`/story/${context.query?.subModule}/submodule`);
      subModules = res.data.data.map((e, idx) => ({
        ...e,
        no: idx + 1,
        image: e.image,
        title: e.title,
        day: `Day ${e.duration}`,
        question: e.questions.length,
      }));
    } else {
      relatedSubModule = false;
      let res = await axios.get(`/story`);
      subModules = res.data.data.map((e, idx) => ({
        ...e,
        no: idx + 1,
        image: e.image,
        title: e.title,
        day: `Day ${e.duration}`,
        question: e.questions.length,
        moduleName: e.module?.name,
        subModuleName: e.subModule?.name,
      }));
    }

    return {
      props: { subMod: subModules, relatedSubModule },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { subMod: subModules, relatedSubModule },
    };
  }
}

export default StoryBank;
