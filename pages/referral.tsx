import React, { useState } from "react";
import Table from "../components/Mentors/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import axios from "../services/axios";

function Referral({ referrals }: any) {
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
              <h5 className={"ml-2"}> Referrals</h5>
            </div>
          </div>
          <div>
            <Table referrals={referrals} />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const referrals = await axios.get("/referrals");

    const res = referrals.data.data.map((e, i) => ({
      id: i + 1,
      user: `${e.user?.firstName.toUpperCase()} ${e.user?.lastName.toUpperCase()}`,
      facebook: e.people.filter((peps) => peps.channelUsed == "Facebook")
        .length,
      twitter: e.people.filter((peps) => peps.channelUsed == "Twitter").length,
      whatsapp: e.people.filter((peps) => peps.channelUsed == "WhatsApp")
        .length,
      telegram: e.people.filter((peps) => peps.channelUsed == "Telegram")
        .length,
      instagram: e.people.filter((peps) => peps.channelUsed == "Instagram")
        .length,
      total: e.people.length,
    }));

    return {
      props: {
        referrals: res,
      },
    };
  } catch (error) {
    return {
      props: {
        referrals: [],
      },
    };
  }
}

export default Referral;
