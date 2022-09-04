import React, { useEffect, useState } from "react";
import Table from "../components/RegisteredUsers/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import { getRegisteredUsers, getRegisteredUsersByModule } from "../services/Requests";
import axios from "../services/axios";

const formatRes =  ({ data }: any) => {
	return data.map((e: any, i: number) => {
		return {
			user: `${e?.user?.firstName?.toUpperCase() || 'First Name'} ${e?.user?.lastName?.toUpperCase() || 'Last Name'}`,
			email: e?.user?.email || "email",
			createdAt: new Date (e?.createdAt)?.toString().slice(0,25) || "Date created",
			moduleName: e?.moduleName || "Module name"
		};
	});
};

function RegisteredUsers({ data }: any) {
	const [registeredUsers, setRegisteredUsers] = useState([]);
	const [modules, setModules] = useState([]);

	useEffect(() => {
		loadInitialCOntent();

		axios.get("/module").then((data) => {
			let moduleData = data.data.data.map((item: any) => {
				return (
					<option key={item._id} value={item._id}>{item.name}</option>
				)
			});
			setModules(moduleData);
		})
		
	}, []);

	const loadInitialCOntent = async () => {
		const registeredUsers = await getRegisteredUsers();
		const res = await formatRes({ data: registeredUsers.data.data });
		setRegisteredUsers(res);
	};

	const handleChange = async (e: any) => {
		let registeredUsers = await getRegisteredUsersByModule(e.target.value);
		let res = await formatRes({ data: registeredUsers.data.data });

		setRegisteredUsers(res);
	}

	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> Registered Users</h5>
						</div>
					</div>
					<div style={{ color: "#B569D4", width: "200px" }} className={"flex items-center mb-3"}>	
						<form action="" method="post">
							<select name="Module" id="module" onChange={handleChange}>
								<option value="#">Select a Module</option>
								{modules}
							</select>
						</form>
					</div>
					<div className={"mb-32"}>
						<Table registeredUsers={registeredUsers} />
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const registeredUsers = await getRegisteredUsers();

		const res = await formatRes({ data: registeredUsers.data.data });

		return {
			props: {
				data: res,
			},
		};
	} catch (error) {
		return {
			props: {
				registeredUsers: [],
			},
		};
	}
}

export default RegisteredUsers;
