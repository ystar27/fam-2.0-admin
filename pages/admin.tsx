import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";
import Details from "../components/Showcase/Details";
import Delete from "../components/Layouts/Alert/Delete";
import { notificationsContext } from "../pages/_app";
import { removeAdmin, getAdmins, getAuthAdmin } from "../services/Requests";
import CreateAdmin from "../components/Admin/CreateAdmin";

interface Interface {
	admin: any[];
}

export default function Admin({ admin }: Interface) {
	const [admins, setAdmins] = useState([]);
	const [iDelete, setIDelete] = useState(false);
	const [createAdmin, setCreateAdmin] = useState(false);
	const [deleteId, setDeleteId] = useState("");
	const notification = useContext(notificationsContext);
	const router = useRouter();

	useEffect(() => {
		getData();
		getUser();
	}, []);

	const getData = async () => {
		try {
			let res = await getAdmins();
			setAdmins(res.data.data);
		} catch (error) {}
	};

	const getUser = async () => {
		try {
			let res = await getAuthAdmin();
			if (res.data.data._id !== "61af7811b864682357071f67") {
				router.push("/");
			}
		} catch (error) {
			router.push("/");
			notification.info({
				message: "Error",
				description: "Authorization failed",
			});
		}
	};

	const deleteIAdmin = async () => {
		try {
			await removeAdmin(deleteId);
			let updated = admins.filter((e: any) => e._id !== deleteId);
			setAdmins(updated);
			setIDelete(false);
			notification.success({
				message: "Successful",
				description: "User has been removed as admin",
			});
		} catch (error) {
			console.log(error);
			setIDelete(false);
		}
	};

	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			{createAdmin && <CreateAdmin setCreateAdmin={setCreateAdmin} setAdmins={setAdmins} admins={admins} />}
			{iDelete && <Delete deleteFunc={deleteIAdmin} setIDelete={setIDelete} message="Delete project idea" />}
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> Admin</h5>
						</div>
					</div>
					<div>
						<div className="mb-8 flex justify-end">
							<button
								className={"flex items-center py-1 px-5 text-white hover:opacity-90 hover:scale-50 duration-150"}
								style={{ backgroundColor: "#b569d4" }}
								onClick={() => setCreateAdmin(true)}
							>
								Create Admin
							</button>
						</div>
						<div className="flex flex-col">
							<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
									<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
										<table className="min-w-full divide-y divide-gray-200">
											<thead className="" style={{ backgroundColor: "#B569D4" }}>
												<tr key={"i"}>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														S/N
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Full Name
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Email
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Actions
													</th>
												</tr>
											</thead>
											<tbody className="bg-white divide-y divide-gray-200">
												{admins.map((e, i) => (
													<tr key={i}>
														<td className="px-6 py-4 whitespace-nowrap">
															<h4>{i + 1}</h4>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<h4>{e?.fullName}</h4>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
															{/* <Moment format="YYYY/MM/DD">{e.createdAt}</Moment> */}
															<h4>{e?.email}</h4>
														</td>
														<td>
															<div className={"flex items-center justify-start"}>
																<button
																	className={"rounded py-1 mr-2 px-4 flex items-center text-sm"}
																	style={{
																		backgroundColor: "rgba(220, 53, 69, 0.12)",
																		color: "#DC3545",
																	}}
																	onClick={() => {
																		setIDelete(true);
																		setDeleteId(e._id);
																	}}
																>
																	Remove Delete
																</button>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const admin = await getAdmins();

		console.log(admin.data, "admin.data admin.data");

		return {
			props: {
				admin: admin.data.data,
			},
		};
	} catch (error) {
		return {
			props: {
				admin: [],
			},
		};
	}
}
