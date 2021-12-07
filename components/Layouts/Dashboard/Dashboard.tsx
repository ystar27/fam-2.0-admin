import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import SideNav from "./SideNav";
import Body from "./Body";
import { getAuthAdmin } from "../../../services/Requests";
import { notificationsContext } from "../../../pages/_app";

export default function Dashboard(props: any) {
	const [user, setUser] = useState({});
	const notification = useContext(notificationsContext);
	const router = useRouter();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = async () => {
		try {
			let res = await getAuthAdmin();
			setUser(res.data.data);
		} catch (error) {
			router.push("/login");
			notification.info({
				message: "Login",
				description: "Authorization failed",
			});
		}
	};

	return (
		<div className={"grid flex-1 overflow-y-auto"} style={{ gridTemplateColumns: "minmax(275px, 300px) 1fr" }}>
			<SideNav user={user} />
			<Body>{props.children}</Body>
		</div>
	);
}
