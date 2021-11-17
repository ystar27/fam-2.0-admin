import React, { useEffect, useState, useContext } from "react";
import Table from "../../components/Opportunity/Table";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import EditOpportunity from "../../components/Opportunity/Edit";
import CreateOpportunity from "../../components/Opportunity/Create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { getOpportunity, getOpportunityCategory } from "../../services/Requests";
import Delete from "../../components/Layouts/Alert/Delete";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";

function Idea({ opportunities, oppCategory }: any) {
	const [rOpportunity, setROpportunity] = useState(opportunities);
	const [opportunity, setOpportunity] = useState();
	const [category, setCategory] = useState(oppCategory);
	const [activeOpportunity, setActiveOpportunity] = useState({});
	const [iDelete, setIDelete] = useState(false);
	const [edit, setEdit] = useState(false);
	const [create, setCreate] = useState(false);
	const notification = useContext(notificationsContext);

	useEffect(() => {
		if (opportunities.length > 0) {
			let res = resetOpportunity(opportunities);
			setOpportunity(res);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		resetOpportunity(rOpportunity);
	}, [rOpportunity]);

	const resetOpportunity = (data: any) => {
		const res = data.map((p: any, i: number) => {
			let date = new Date(parseInt(p.endingDate));
			return {
				...p,
				no: i + 1,
				image: (
					<div className={"flex items-center"}>
						<img className={"rounded-full h-12 w-12 object-cover bg-gray-500"} src={p?.image || "/img/dashboard/user.svg"} alt={"profile.img"} />
					</div>
				),
				title: p?.title || "",
				categoryTitle: p?.category?.title || "",
				categoryId: p?.category?._id || "",
				// description: p?.description || "",
				endingDate: date.toDateString(),
				actions: (
					<div className={"flex items-center justify-start"}>
						<button
							className={"rounded py-1 mr-2 px-4 flex items-center text-sm"}
							style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
							onClick={() => {
								setActiveOpportunity(p);
								setEdit(true);
							}}
						>
							<FontAwesomeIcon icon={faEdit} className={"h-3 w-3 mr-1"} style={{}} />
							Edit
						</button>
						<button
							className={"rounded py-1 mr-2 px-4 flex items-center text-sm"}
							style={{
								backgroundColor: "rgba(220, 53, 69, 0.12)",
								color: "#DC3545",
							}}
							onClick={() => {
								setActiveOpportunity(p);
								setIDelete(true);
							}}
						>
							<FontAwesomeIcon icon={faTrashAlt} className={"h-3 w-3 mr-1"} style={{}} />
							Delete
						</button>
					</div>
				),
			};
		});
		setOpportunity(res);
	};

	const deleteIProject = async () => {
		try {
			await axios.delete(`/opportunity/${activeOpportunity?._id}`);
			setROpportunity(rOpportunity.filter((e, i) => e._id !== activeOpportunity._id));
			setIDelete(false);
			notification.success({
				message: "Successful",
				description: "Project idea deleted successfully",
			});
		} catch (error) {
			setIDelete(false);
			notification.warn({
				message: "Network error",
				description: "Check network connection",
			});
		}
	};

	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			{iDelete && <Delete deleteFunc={deleteIProject} setIDelete={setIDelete} message="Delete this opportunity" />}
			{edit && (
				<EditOpportunity
					categories={category}
					setEdit={setEdit}
					activeOpportunity={activeOpportunity}
					setActiveOpportunity={setActiveOpportunity}
					setROpportunity={setROpportunity}
					rOpportunity={rOpportunity}
				/>
			)}
			{create && <CreateOpportunity categories={category} setROpportunity={setROpportunity} rOpportunity={rOpportunity} setCreate={setCreate} />}
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2 mr-2"}> Forums </h5> &gt; <h5 className={"ml-2"}> Opportunity</h5>
						</div>
					</div>
					<div>
						<Table opportunities={opportunity} setCreate={setCreate} />
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const opportunities = await getOpportunity();
		const oppCategory = await getOpportunityCategory();

		return {
			props: {
				opportunities: opportunities.data.data,
				oppCategory: oppCategory.data.data,
			},
		};
	} catch (error) {
		return {
			props: {
				opportunities: [],
				oppCategory: [],
			},
		};
	}
}

export default Idea;
