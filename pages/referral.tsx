import React, { useContext, useState } from "react";
import Table from "../components/Referral/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import { getReferrals } from "../services/Requests";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notificationsContext } from "./_app";

const formatRes = ({ data }: any) => {
  return data.map((e: any, i: number) => {
    return {
      user: `${e.user?.firstName.toUpperCase()} ${e.user?.lastName.toUpperCase()}`,
      facebook: e.people.filter((peps: any) => peps.channelUsed == "Facebook")
        .length,
      twitter: e.people.filter((peps: any) => peps.channelUsed == "Twitter")
        .length,
      whatsapp: e.people.filter((peps: any) => peps.channelUsed == "WhatsApp")
        .length,
      telegram: e.people.filter((peps: any) => peps.channelUsed == "Telegram")
        .length,
      instagram: e.people.filter((peps: any) => peps.channelUsed == "Instagram")
        .length,
      total: e.people.length,
      email: e?.user?.email || "email",
      phone:
        e?.user?.phoneNumber || e?.user?.personalInfo?.phoneNumber || "phone",
    };
  });
};

function Referral({ data }: any) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState(data);
  const notification = useContext(notificationsContext);

  const loadContent = async () => {
    let res = [];
    setLoading(true);
    let referral = await getReferrals({ page: page + 1, limit: 5 });

    if (referral.data.data.length > 0) {
      res = formatRes({ data: referral.data.data });
    } else {
      notification.info({
        message: "No more referrals",
        description: "",
      });
    }
    setReferrals([...referrals, ...res]);
    setPage(page + 1);
    setLoading(false);
  };

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
          <div className={"mb-32"}>
            <Table referrals={referrals} />
            <div className="mt-8">
              <button
                onClick={loadContent}
                className={
                  "flex items-center py-1 px-5 text-white hover:opacity-90 hover:scale-50 duration-150"
                }
                style={{ backgroundColor: "#b569d4" }}
              >
                Load More
                {loading && (
                  <FontAwesomeIcon
                    className={"h-5 ml-2"}
                    spin={true}
                    icon={faSpinner}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const referrals = await getReferrals({ page: 1, limit: 5 });

    const res = await formatRes({ data: referrals.data.data });

    return {
      props: {
        data: res,
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
