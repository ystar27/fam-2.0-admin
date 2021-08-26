import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faGavel,
  faTicketAlt,
  faCertificate,
  faAlignRight,
  faProjectDiagram,
  faBookOpen,
  faSpinner,
  faChalkboardTeacher,
  faChalkboard,
  faAd,
  faBell,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faComments,
  faAddressBook,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import NavLink from "./NavLink";

export default function SideNav(props: any) {
  return (
    <div className={"h-full overflow-y-auto"}>
      <div className={"flex flex-col items-center py-8 px-5"}>
        <NavLink
          href="/"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-4 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faBorderAll} />
          Dashboard
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faUserCircle} />
          User Management
        </NavLink>
        <NavLink
          href="/fam_module"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faComments} />
          FAM Module
        </NavLink>
        <NavLink
          href="/storybank"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faAddressBook} />
          Story Bank
        </NavLink>
        <NavLink
          href="/collaboration"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faGavel} />
          Collaboration
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faTicketAlt} />
          Seasons
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faCertificate} />
          Certificates
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faAlignRight} />
          Forums
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faChartBar} />
          LeaderBoard
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faProjectDiagram} />
          Projects
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faBookOpen} />
          Lessons
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faSpinner} />
          Personal Issues
        </NavLink>
        <NavLink
          href="/coaches"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faChalkboardTeacher} />
          Coaches
        </NavLink>
        <NavLink
          href="/mentors"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faChalkboard} />
          Mentors
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faBell} />
          Announcements
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faAd} />
          Ads Management
        </NavLink>
        <NavLink
          href="#"
          activeStyle={{
            backgroundColor: "#B569D4",
            boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            color: "#fff",
          }}
          className={
            "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md bg-white"
          }
        >
          <FontAwesomeIcon className={"h-5 mr-3"} icon={faTrophy} />
          Scoring
        </NavLink>
      </div>
    </div>
  );
}
