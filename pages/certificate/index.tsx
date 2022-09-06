import React, { useEffect, useState, useContext } from "react";
import Table from "../../components/Project/IndexTable";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import { notificationsContext } from "../../pages/_app";
import Display from "../../components/Certificate/Display";
import axios from "../../services/axios";

function Certificate({ modules }: any) {
	const [tabs, setTabs] = useState(0);
	const [tabDisplay, setTabDisplay] = useState(false);
	const [loading, setLoading] = useState(false);
	const [uploadLoad, setUploadLoad] = useState(false);
	const [module, setModule] = useState(modules);
	const [subModules, setSubModules] = useState([]);
	const [subModule, setSubModule] = useState("");
	const [selectedModule, setSelectedModule] = useState("");
	const [uploadFile, setUploadFile] = useState({ name: "", type: "" });
	const [certificates, setCertificates] = useState({ original: "", white: "", preseason: "" });
	const notification = useContext(notificationsContext);

	useEffect(()=> {
		axios.get("/module").then((data) => {
			let moduleData = data.data.data.map((item: any) => {
				return (
					<option key={item._id} value={item._id}>{item.name}</option>
				)
			});
			setModule(moduleData);
		})
	},[]);

	const selectModule = (e: any) => {
		if (e.target.value) {
			let selectedMdl: any = modules.filter((module: { _id: any }) => module._id == e.target.value);
			setSubModules(selectedMdl[0]?.subModule);
		}
	};

	const handleChange = (e: any) => {
		setSelectedModule(e.target.value);
		setTabDisplay(true);
		checkCertificate(e.target.value);
	};

	const checkCertificate = async (submoduleId: string) => {
		try {
			setLoading(true);
			let res = await axios(`/certificate/${submoduleId}`);

			setCertificates({
				original: res.data?.data?.image?.original || "",
				white: res.data?.data?.image?.white || "",
				preseason: res.data?.data?.image?.preSeason || "",
			});
			setLoading(false);
		} catch (error) {}
	};

	const uploadOriginal = async () => {
		try {
			if (uploadFile?.name && uploadFile?.type) {
				let formData = new FormData();
				formData.append("image", uploadFile);
				setUploadLoad(true);
				const res = await axios.post(`/certificate/${selectedModule}/original`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				setCertificates({ ...certificates, original: res.data?.data?.image?.original || "" });
				setUploadLoad(false);
				notification.success({
					message: "Successful",
					description: "Successfully uploaded certificate",
				});
			}
		} catch (error) {}
	};

	const uploadPreseason = async () => {
		try {
			if (uploadFile?.name && uploadFile?.type) {
				let formData = new FormData();
				formData.append("image", uploadFile);
				setUploadLoad(true);
				const res = await axios.post(`/certificate/${selectedModule}/preseason`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				setCertificates({ ...certificates, white: res.data?.data?.image?.white || "" });
				setUploadLoad(false);
				notification.success({
					message: "Successful",
					description: "Successfully uploaded certificate",
				});
			}
		} catch (error) {}
	};

	const uploadWhite = async () => {
		try {
			if (uploadFile?.name && uploadFile?.type) {
				let formData = new FormData();
				formData.append("image", uploadFile);

				setUploadLoad(true);
				const res = await axios.post(`/certificate/${selectedModule}/white`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				// console.log(res);
				setCertificates({ ...certificates, preseason: res.data?.data?.image?.preSeason || "" });
				setUploadLoad(false);
				notification.success({
					message: "Successful",
					description: "Successfully uploaded certificate",
				});
			}
		} catch (error) {}
	};

	const loadDisplay = () => {
		if (tabs === 0) {
			return (
				<Display
					tabs={tabs}
					setTabs={setTabs}
					uploadLoad={uploadLoad}
					image={certificates.white}
					upload={uploadWhite}
					setUploadFile={setUploadFile}
				/>
			);
		} else if (tabs === 1) {
			return (
				<Display
					tabs={tabs}
					setTabs={setTabs}
					uploadLoad={uploadLoad}
					image={certificates.original}
					upload={uploadOriginal}
					setUploadFile={setUploadFile}
				/>
			);
		} else if (tabs === 2) {
			return (
				<Display
					tabs={tabs}
					setTabs={setTabs}
					uploadLoad={uploadLoad}
					image={certificates.preseason}
					upload={uploadPreseason}
					setUploadFile={setUploadFile}
				/>
			);
		} else {
			return "";
		}
	};

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
					<div>
						<div
							className={"w-full bg-white rounded py-6 mb-16 px-6"}
							style={{
								border: "0.5px solid #E0E0E0",
								boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
							}}
						>
							{/* <div className={"grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 justify-between"}>
								<div className={"mb-4"}>
									<select
										name={"subModule"}
										onChange={selectModule}
										className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									>
										<option value={""} className={"hover:bg-purple-400"}>
											Select Module
										</option>
										{module.map((module: any, i: number) => (
											<option key={i} value={module._id}>
												{module.name}
											</option>
										))}
									</select>
								</div>
								<div className={"mb-4"}>
									<select
										onChange={selectSubModule}
										name={"subModule"}
										className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									>
										<option value={""} className={"hover:bg-purple-400"}>
											Select Sub-Module
										</option>
										{subModules.map((e: any, i) => (
											<option key={i} value={e._id}>
												{e.name}
											</option>
										))}
									</select>
								</div>
							</div> */}
							<div style={{ color: "#B569D4", width: "200px" }} className={"flex items-center mb-3"}>	
								<form action="" method="post">
									<select name="Module" id="module" onChange={handleChange}>
										<option value="#">Select a Module</option>
										{module}
									</select>
								</form>
							</div>
						</div>

						{loading && (
							<div className={"flex items-center justify-center"}>
								<img src={"/img/loader.gif"} alt={"loading"} />
							</div>
						)}

						{tabDisplay && !loading && (
							<div>
								<div className={"flex items-center justify-start"}>
									<button
										onClick={() => setTabs(0)}
										className={
											tabs === 0
												? "py-2 mb:py-4 bg-white sm:px-4 lg:px-8 bg-transparent font-medium text-primary border-t-2 border-primary text-lg"
												: "py-2 mb:py-4 sm:px-4 lg:px-8 bg-transparent font-medium text-gray-600 text-lg"
										}
									>
										Free
									</button>
									<button
										onClick={() => setTabs(1)}
										className={
											tabs === 1
												? "py-2 mb:py-4 bg-white sm:px-4 lg:px-8 bg-transparent font-medium text-primary border-t-2 border-primary text-lg"
												: "py-2 mb:py-4 sm:px-4 lg:px-8 bg-transparent font-medium text-gray-600 text-lg"
										}
									>
										Paid
									</button>
									<button
										onClick={() => setTabs(2)}
										className={
											tabs === 2
												? "py-2 mb:py-4 bg-white sm:px-4 lg:px-8 bg-transparent font-medium text-primary border-t-2 border-primary text-lg"
												: "py-2 mb:py-4 sm:px-4 lg:px-8 bg-transparent font-medium text-gray-600 text-lg"
										}
									>
										Preseason
									</button>
								</div>

								<div
									className={"w-full bg-white rounded py-6 mb-16 px-6"}
									style={{
										boxShadow: "0px 7px 6px -5px #ADADAD",
									}}
								>
									{loadDisplay()}
								</div>
							</div>
						)}
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const modules = await axios.get("/module");

		return {
			props: {
				modules: modules.data.data,
			},
		};
	} catch (error) {
		return {
			props: {
				modules: [],
			},
		};
	}
}

export default Certificate;
