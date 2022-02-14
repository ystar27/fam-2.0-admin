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
	faListUl,
	faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle, faComments, faAddressBook, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import NavLinkItem from "./NavLinkItem";
import { faWeibo, faYoast } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteAuthToken } from "../../../services/axios";

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
		name: "Daily Content",
		link: "/daily-content",
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
		name: "Showcase",
		link: "/showcase",
		icon: faWeibo,
		items: [],
	},
	{
		name: "Forums",
		link: "#",
		icon: faAlignRight,
		items: [
			{ name: "All Forums", link: "#" },
			{ name: "Blog", link: "#" },
			{ name: "Opportunities", link: "/forums/opportunities" },
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

export default function SideNav({ user }: any) {
	const router = useRouter();

	useEffect(() => {
		if (user?._id === "61af7811b864682357071f67" && navLinks[0].name !== "Administrator") {
			navLinks.unshift({
				name: "Administrator",
				link: "/admin",
				icon: faListUl,
				items: [],
			});
		}
	}, []);

	const logout = () => {
		DeleteAuthToken();
		router.push("/login");
	};

	return (
		<div className={"h-full overflow-y-auto"}>
			<div className={"flex flex-col items-center py-8 px-5"}>
				{navLinks.map((e, i) => (
					<NavLinkItem key={i} data={e} index={i} />
				))}
				<button
					onClick={logout}
					className={"flex items-start w-full side-name-link mb-2 duration-150 text-left py-3 px-4 text-gray-500 cursor-pointer rounded-md"}
				>
					<FontAwesomeIcon className={"h-5 mr-3"} icon={faDownload} /> Logout
				</button>
			</div>
		</div>
	);
}
