import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { notificationsContext } from "../../../pages/_app";

const NotificationCard = ({ message, description, id, type }: any) => {
  const [show, setShow] = useState(false);
  const notification = useContext(notificationsContext);
  const ref = useRef();
  let iconSrc;

  switch (type) {
    case "SUCCESS":
      iconSrc = "/icons/check.svg";
      break;
    case "ERROR":
      iconSrc = "/icons/error.svg";
      break;
    case "WARN":
      iconSrc = "/icons/warning.svg";
      break;
    default:
      iconSrc = "/icons/info.svg";
  }

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleClose = () => {
    if (ref.current) {
      ref.current.style.transform =
        "translateY(-100%) matrix(1, 0, 0, 1, 0, 0)";
      ref.current.style.opacity = 0;
      setTimeout(() => notification.destroy(id), 300);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose();
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`p-3 bg-white ${
        show ? "-translate-x-0" : "translate-x-full"
      } mt-5 transform  duration-200 z-30`}
      ref={ref}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px",
        width: "380px",
        maxWidth: "100%",
      }}
    >
      <div className="flex items-start">
        <figure className="m-0 p-0 px-2">
          <img src={iconSrc} className="w-6 h-6" alt="" />
        </figure>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="p-0 m-0 text-base pb-1 text-gray-800">{message}</h4>
            {/* <button
              onClick={handleClose}
              className="focus:outline-none text-base text-gray-800"
            >
              X
            </button> */}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
