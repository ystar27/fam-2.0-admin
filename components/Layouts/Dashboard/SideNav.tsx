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

export default function SideNav(props: any) {
  return (
    <div className={"h-full overflow-y-auto"}>
      <div className={"flex flex-col items-center py-8 px-5"}>
        <Link href="#" passHref>
          <div
            className={
              "mb-4 flex items-center py-3 px-4 w-full text-white cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#B569D4",
              boxShadow: "0px 4px 4px rgba(181, 105, 212, 0.33)",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faBorderAll} />
            Dashboard
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faUserCircle} />
            User Management
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faComments} />
            FAM Module
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faAddressBook} />
            Story Bank
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faGavel} />
            Collaboration
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faTicketAlt} />
            Seasons
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faCertificate} />
            Certificates
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faAlignRight} />
            Forums
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faChartBar} />
            LeaderBoard
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faProjectDiagram} />
            Projects
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faBookOpen} />
            Lessons
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faSpinner} />
            Personal Issues
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon
              className={"h-5 mr-3"}
              icon={faChalkboardTeacher}
            />
            Coaches
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faChalkboard} />
            Mentors
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faBell} />
            Announcements
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faAd} />
            Ads Management
          </div>
        </Link>
        <Link href="#" passHref>
          <div
            className={
              "mb-3 flex items-center py-3 px-4 w-full text-gray-500 cursor-pointer rounded-md"
            }
            style={{
              backgroundColor: "#fff",
            }}
          >
            <FontAwesomeIcon className={"h-5 mr-3"} icon={faTrophy} />
            Scoring
          </div>
        </Link>
      </div>
    </div>
  );
}
