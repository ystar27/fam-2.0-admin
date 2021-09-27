import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Link from "next/link";

function NavLinkItem({ data, index }: any): ReactElement {
  const [dChildren, setDChildren] = useState({ index: 111, active: false });
  const [activeIdx, setActiveIdx] = useState(111);

  const displayChildren = (i) => {
    setDChildren({ index: i, active: !dChildren.active });
  };

  return (
    <>
      {data?.items.length > 0 ? (
        <>
          <div
            onClick={() => displayChildren(index)}
            className={`side-name-link mb-2 flex justify-between duration-150 items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md ${
              dChildren.active && dChildren.index == index
                ? "bg-gray-200 text-gray-700"
                : ""
            }`}
          >
            <div className={"flex items-center"}>
              <FontAwesomeIcon className={"h-5 mr-3"} icon={data?.icon} />
              {data?.name}
            </div>
            {/* <FontAwesomeIcon className={"h-5 text-gray-400"} icon={faChevronCircleRight} /> */}
            <h3 className={"text-lg font-bold text-gray-400"}>&gt;</h3>
          </div>
          {data?.items.map((e, i) => (
            <Link key={i} href={e.link} passHref>
              <a
                className={
                  dChildren.active && dChildren.index == index
                    ? "side-name-link flex justify-between duration-150 items-center py-3 px-4 w-full text-gray-400 cursor-pointer rounded-md"
                    : "hidden side-name-link justify-between duration-150 items-center py-3 px-4 w-full text-gray-400 cursor-pointer rounded-md"
                }
              >
                <div className={"ml-5 flex items-center"}>
                  <FontAwesomeIcon className={"h-2 mr-3"} icon={faCircle} />
                  {e.name}
                </div>
              </a>
            </Link>
          ))}
        </>
      ) : (
        <NavLink
          href={data?.link || "#"}
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "side-name-link mb-2 flex duration-150 items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={data?.icon} />
          {data?.name}
        </NavLink>
      )}
    </>
  );
}

export default NavLinkItem;
