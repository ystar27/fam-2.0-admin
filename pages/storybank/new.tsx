import React, { useState } from "react";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import CreateStory from "../../components/Story_Bank/CreateStory";

export default function newStory() {
  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={"mr-2"}>Dashboard</h5> &gt;{" "}
              <h5 className={"ml-2"}>Story Bank</h5>
            </div>
          </div>
          <div>
            <CreateStory />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}
