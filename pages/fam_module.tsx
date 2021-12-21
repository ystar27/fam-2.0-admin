import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CreateModule from "../components/FAM_MODULE/CreateModule";
import CreateSubModule from "../components/FAM_MODULE/SubModule/CreateSubModule";
import EditModule from "../components/FAM_MODULE/EditModule";
import ViewModuleField from "../components/FAM_MODULE/ViewModuleField";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Delete from "../components/Layouts/Alert/Delete";
import Success from "../components/Layouts/Alert/Success";
import Error from "../components/Layouts/Alert/Error";
import axios from "../services/axios";
import EditSubModule from "../components/FAM_MODULE/SubModule/EditSubModule";
import SubModuleTable from "../components/FAM_MODULE/SubModule/SubModule";
import { notificationsContext } from "./_app";

function FamModule({ mdl }: any) {
	const [subModule, setSubModule] = useState(false);
	const [successAlert, setSuccessAlert] = useState(false);
	const [createModule, setCreateModule] = useState(false);
	const [createSubModule, setCreateSubModule] = useState(false);
	const [editModule, setEditModule] = useState(false);
	const [editSubModule, setEditSubModule] = useState(false);
	const [viewModuleField, setViewModuleField] = useState(false);
	const [moduleId, setModuleId] = useState(null);
	const [module, setModule] = useState(mdl);
	const [activeModule, setActiveModule] = useState({});
	const [activeSubModule, setActiveSubModule] = useState({});
	const [subModules, setSubModules] = useState(null);
	const [message, setMessage] = useState("");
	const [deleteSubModule, setDeleteSubModule] = useState(false);
	const [deleteModule, setDeleteModule] = useState(false);
	const notification = useContext(notificationsContext);

	useEffect(() => {
		axios
			.get("/module")
			.then((res) => {
				setModule(res.data.data);
			})
			.catch((error) => {});
	}, []);

	const getSubModule = (e, i) => {
		setActiveModule(e);
		setSubModules(e.subModule);
		setSubModule(true);
	};

	const editSubMdl = (e, i) => {
		setActiveSubModule(e);
		setEditSubModule(true);
	};

	const deleteModuleFunc = () => {
		axios
			.delete(`/module/${moduleId}`)
			.then((res) => {
				setSubModule(false);
				let deleted = module.filter((mdl) => mdl._id !== activeModule._id);
				setModule(deleted);
				setDeleteModule(!deleteModule);
				setMessage("Deleted Successfully");
				setSuccessAlert(true);
			})
			.catch((error) => {
				setDeleteModule(!deleteModule);
				notification.warn({
					message: "Module Error",
					description: "Unable to delete module.",
				});
			});
	};

	const deleteSubModuleFunc = () => {
		axios
			.delete(`/module/submodule/${activeSubModule.module}/${activeSubModule._id}`)
			.then((res) => {
				let deleted = subModules.filter((subMdl) => subMdl._id !== activeSubModule._id);
				setSubModules(deleted);
				setDeleteSubModule(!deleteSubModule);
				setMessage("Deleted Successfully");
				setSuccessAlert(true);
			})
			.catch((error) => {
				setDeleteSubModule(!deleteSubModule);
				notification.warn({
					message: "Sub Module Error",
					description: "Unable to delete sub module.",
				});
			});
	};

	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			{deleteModule && <Delete deleteFunc={deleteModuleFunc} setIDelete={setDeleteModule} message={message} />}
			{deleteSubModule && <Delete deleteFunc={deleteSubModuleFunc} setIDelete={setDeleteSubModule} message={message} />}
			{createModule && (
				<CreateModule
					setMessage={setMessage}
					setModule={setModule}
					module={module}
					setSuccessAlert={setSuccessAlert}
					setCreateModule={setCreateModule}
				/>
			)}
			{createSubModule && (
				<CreateSubModule
					setMessage={setMessage}
					moduleId={moduleId}
					module={module}
					setSuccessAlert={setSuccessAlert}
					setCreateSubModule={setCreateSubModule}
					subModules={subModules}
					setSubModules={setSubModules}
				/>
			)}
			{editModule && (
				<EditModule
					setMessage={setMessage}
					message={message}
					moduleId={moduleId}
					module={module}
					setModule={setModule}
					setSuccessAlert={setSuccessAlert}
					setEditModule={setEditModule}
				/>
			)}
			{editSubModule && (
				<EditSubModule
					setMessage={setMessage}
					message={message}
					subModules={subModules}
					setSubModules={setSubModules}
					setSuccessAlert={setSuccessAlert}
					setEditSubModule={setEditSubModule}
					activeSubModule={activeSubModule}
				/>
			)}
			{viewModuleField && <ViewModuleField moduleId={moduleId} setMessage={setMessage} setViewModuleField={setViewModuleField} />}
			{successAlert && <Success message={message} setSuccessAlert={setSuccessAlert} />}
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> FAM Module</h5>
						</div>
					</div>
					{!subModule ? (
						<div>
							<div className={"flex items-center justify-end mb-5"}>
								<div className={"flex items-center"}>
									<button
										onClick={() => setCreateModule(true)}
										className={"bg-white shadow-sm py-2 px-4 font-light flex items-center"}
										style={{ color: "#B569D4" }}
									>
										Create Module
									</button>
								</div>
							</div>
							<div className={"grid grid-cols-2 md:grid-cols-3 gap-4"}>
								{module.map((e: any, i) => (
									<div key={i} onClick={() => getSubModule(e, i)} className={"flex cursor-pointer flex-col shadow-md rounded-md overflow-hidden"}>
										<div style={{ backgroundColor: "#B569D4" }} className={"capitalize px-5 py-7 text-white font-semibold text-lg"}>
											{e.name}
										</div>
										<div className={"bg-white px-5 text-gray-600 flex flex-col"}>
											<div className={"border-b border-gray-300 py-3"}>
												<h4 className={"font-semibold"}>Module Fields</h4>
											</div>
											{e.field.map((e, i) => (
												<div key={i} className={"capitalize border-b border-gray-300 py-3"}>
													<h4>{e}</h4>
												</div>
											))}
										</div>
										<div className={"bg-white px-5 pb-6 flex items-end pt-4 h-full"}>
											<div className={"bg-green-400 text-center rounded-sm px-2 py-0 font-mono text-white text-sm mr-1"}>
												<h4>Sub Modules - {e.subModule.length}</h4>
											</div>
											<div className={"bg-green-400 text-center rounded-sm px-2 py-0 font-mono text-white text-sm mr-1"}>
												<h4>Active</h4>
											</div>
											<div className={"bg-blue-500 text-center rounded-sm px-2 py-0 font-mono text-white text-sm mr-1"}>
												<h4>Public</h4>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div>
							<div className={"flex items-center justify-between mb-5"}>
								<button onClick={() => setSubModule(!subModule)} className={"py-2 px-4 font-light flex items-center"} style={{ color: "#B569D4" }}>
									<FontAwesomeIcon className={"h-4 mr-2"} icon={faArrowLeft} />
									Back
								</button>
								<div className={"flex items-center"}>
									<button
										onClick={() => {
											setModuleId(activeModule._id);
											setCreateSubModule(!createSubModule);
										}}
										className={"bg-white mr-4 shadow-sm py-2 px-4 font-light flex items-center"}
										style={{ color: "#B569D4" }}
									>
										Create Sub-Module
									</button>
									<button
										onClick={() => {
											setMessage(activeModule.name);
											setModuleId(activeModule._id);
											setEditModule(!editModule);
										}}
										className={"bg-white mr-4 shadow-sm py-2 px-4 font-light flex items-center"}
										style={{ color: "#B569D4" }}
									>
										Edit Module
									</button>
									<button
										onClick={() => {
											setMessage(`Confirm delete for ${activeModule.name}`);
											setModuleId(activeModule._id);
											setDeleteModule(!deleteModule);
										}}
										className={"bg-white text-red-500 shadow-sm py-2 px-4 font-light flex items-center"}
									>
										Delete Module
									</button>
								</div>
							</div>
							<SubModuleTable
								setActiveModule={setActiveModule}
								setSubModules={setSubModules}
								setSubModule={setSubModule}
								setActiveSubModule={setActiveSubModule}
								setEditSubModule={setEditSubModule}
								setDeleteSubModule={setDeleteSubModule}
								setMessage={setMessage}
								setSuccessAlert={setSuccessAlert}
								activeSubModule={activeSubModule}
								moduleId={moduleId}
								subModules={subModules}
								deleteSubModule={deleteSubModule}
								activeModule={activeModule}
								editSubMdl={editSubMdl}
							/>
						</div>
					)}
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		let res = await axios.get("/module");

		return {
			props: { mdl: res.data.data },
		};
	} catch (error) {
		return {
			props: { mdl: [] },
		};
	}
}

export default FamModule;
