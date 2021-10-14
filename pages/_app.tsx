import "../styles/globals.generated.css";
import React, { useState, createContext } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import type { AppProps } from "next/app";
import Notifications from "../components/Layouts/Alert/Notifications";

export const notificationsContext = createContext();
const progress = new ProgressBar({
  size: 2.5,
  color: "rgb(181 105 219)",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  const [notifications, setNotifications] = useState([]);

  const error = ({ message, description }: any) => {
    setNotifications([
      ...notifications,
      {
        type: "ERROR",
        message,
        description,
        id: `${message}-${Math.random() * Math.random()}`,
      },
    ]);
  };

  const success = ({ message, description }: any) => {
    setNotifications([
      ...notifications,
      {
        type: "SUCCESS",
        message,
        description,
        id: `${message}-${Math.random() * Math.random()}`,
      },
    ]);
  };

  const warn = ({ message, description }: any) => {
    setNotifications([
      ...notifications,
      {
        type: "WARN",
        message,
        description,
        id: `${message}-${Math.random() * Math.random()}`,
      },
    ]);
  };

  const info = ({ message, description }: any) => {
    setNotifications([
      ...notifications,
      {
        type: "INFO",
        message,
        description,
        id: `${message}-${Math.random() * Math.random()}`,
      },
    ]);
  };

  const destroy = (notificationId) => {
    setNotifications(notifications.filter(({ id }) => id !== notificationId));
  };

  return (
    <notificationsContext.Provider
      value={{
        error,
        success,
        info,
        warn,
        destroy,
      }}
    >
      <Notifications notifications={notifications} />
      <Component {...pageProps} />
    </notificationsContext.Provider>
  );
}
export default MyApp;
