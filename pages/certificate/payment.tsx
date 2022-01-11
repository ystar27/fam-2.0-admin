import React, { useEffect, useState, useContext } from "react";
import Table from "../../components/Project/IndexTable";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import ProjectDetails from "../../components/Project/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { deleteProjectIdea, getProjectIdeas } from "../../services/projectRequest";
import Delete from "../../components/Layouts/Alert/Delete";
import { notificationsContext } from "../../pages/_app";

function Payments({ project }: any) {
	const [iDelete, setIDelete] = useState(false);
	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> Certificates</h5>
						</div>
					</div>
					<div></div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const project = await getProjectIdeas();

		return {
			props: {
				project: project.data.data,
			},
		};
	} catch (error) {
		return {
			props: {
				project: [],
			},
		};
	}
}

export default Payments;
