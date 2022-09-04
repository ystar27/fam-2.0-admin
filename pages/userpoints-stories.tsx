import React, { useEffect, useState } from "react";
import Table from "../components/UserpointStories/Table";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import { getAllUsersModuleCurrentScoreByModule, getAllUsersModuleCurrentScore } from "../services/Requests";
import axios from "../services/axios";

const formatRes =  ({ data }: any) => {
	return data.map((e: any, i: number) => {
		return {
			user: `${e?.user?.firstName.toUpperCase()} ${e?.user?.lastName.toUpperCase()}`,
			email: e?.user?.email,
			points: e?.totalPoints,
			questionsAnswered: e?.questions.length,
			updatedAt: new Date (e?.updatedAt).toString().slice(0,25),
			moduleName: e?.moduleId?.name
		};
	});
};

function UserPointStories({ data }: any) {
	const [userPoints, setUserPoints] = useState([]);
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
		const userpoints = await getAllUsersModuleCurrentScore();
		const userpointRes = await formatRes({ data: userpoints.data.data });
		setUserPoints(userpointRes);
	};

	const handleChange = async (e: any) => {
		let userpoints = await getAllUsersModuleCurrentScoreByModule(e.target.value);
		let userpointRes = await formatRes({ data: userpoints.data.data });

		setUserPoints(userpointRes);
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
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> Userpoint Stories</h5>
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
						<Table userPointStories={userPoints} />
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const userPoints = await getAllUsersModuleCurrentScore();

		const res = await formatRes({ data: userPoints.data.data });

		return {
			props: {
				data: res,
			},
		};
	} catch (error) {
		return {
			props: {
				userPoints: [],
			},
		};
	}
}

export default UserPointStories;
