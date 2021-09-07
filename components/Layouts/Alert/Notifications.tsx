import React from "react";
// import { useState } from "react";
import NotificationCard from './NotificationCard'

const Notifications = ({notifications}) => {
  return (
    <div className={`fixed top-5 max-h-full z-50 right-0 duration-200 pr-5 sm:pr-10`}>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default Notifications;
