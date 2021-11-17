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
import NavLinkItem from "./NavLinkItem";

const navLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: faBorderAll,
    items: [],
  },
  {
    name: "User Management",
    link: "#",
    icon: faUserCircle,
    items: [],
  },
  {
    name: "FAM Module",
    link: "/fam_module",
    icon: faComments,
    items: [],
  },
  {
    name: "Story Bank",
    link: "/storybank",
    icon: faAddressBook,
    items: [],
  },
  {
    name: "Collaboration",
    link: "/collaboration",
    icon: faGavel,
    items: [],
  },
  {
    name: "Seasons",
    link: "#",
    icon: faTicketAlt,
    items: [],
  },
  {
    name: "Certificates",
    link: "#",
    icon: faCertificate,
    items: [],
  },
  {
    name: "Forums",
    link: "#",
    icon: faAlignRight,
    items: [
      { name: "All Forums", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Opportunities", link: "/forums/opportunities"}
    ],
  },
  {
    name: "LeaderBoard",
    link: "#",
    icon: faChartBar,
    items: [
      { name: "General Ranking", link: "#" },
      { name: "Referral Ranking", link: "/referral" },
    ],
  },
  {
    name: "Projects",
    link: "#",
    icon: faProjectDiagram,
    items: [
      { name: "Project Ideas", link: "/project" },
      { name: "Project Report", link: "/project/report" },
    ],
  },
  {
    name: "Lessons",
    link: "#",
    icon: faBookOpen,
    items: [
      { name: "Lesson Bank", link: "/lesson" },
      { name: "Daily Lesson", link: "/lesson/daily" },
    ],
  },
  {
    name: "Personal Issues",
    link: "#",
    icon: faSpinner,
    items: [],
  },
  {
    name: "Coaches",
    link: "/coaches",
    icon: faChalkboardTeacher,
    items: [],
  },
  {
    name: "Mentors",
    link: "/mentors",
    icon: faChalkboard,
    items: [],
  },
  {
    name: "Announcements",
    link: "#",
    icon: faBell,
    items: [],
  },
  {
    name: "Ads Management",
    link: "#",
    icon: faAd,
    items: [],
  },
  {
    name: "Scoring",
    link: "#",
    icon: faTrophy,
    items: [],
  },
];

export default function SideNav(props: any) {
  return (
    <div className={"h-full overflow-y-auto"}>
      <div className={"flex flex-col items-center py-8 px-5"}>
        {navLinks.map((e, i) => (
          <NavLinkItem key={i} data={e} index={i} />
        ))}
      </div>
    </div>
  );
}
