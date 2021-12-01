import React, { useEffect, useState, useContext } from "react";
import Dashboard from "../../components/Layouts/Dashboard/Dashboard";
import Head from "../../components/Layouts/Header/Head";
import Navbar from "../../components/Layouts/Header/Navbar";
import Details from "../../components/Showcase/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Delete from "../../components/Layouts/Alert/Delete";
import { notificationsContext } from "../../pages/_app";
import { deleteShowcase, getShowcase } from "../../services/Requests";

interface Interface {
	shows: any[];
}

function Showcase({ shows }: Interface) {
	const [showcase, setShowcase] = useState(shows);
	const [activeShowcase, setActiveShowcase] = useState({ _id: "" });
	const [iDelete, setIDelete] = useState(false);
	const [details, setDetails] = useState(false);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const notification = useContext(notificationsContext);

	let updateShowcase = () => {
		setLoading(true);
		getShowcase({ page: page + 1 })
			.then((res) => {
				setLoading(false);
				setPage(page + 1);
				setShowcase([...showcase, ...res.data.data]);
			})
			.catch((error) => {
				setLoading(false);
			});
	};

	const deleteIShowcase = async () => {
		await deleteShowcase(activeShowcase._id);
		let updated = showcase.filter((e) => e._id !== activeShowcase._id);
		setShowcase(updated);
		setIDelete(false);
	};

	return (
		<div className={"flex flex-col h-screen"}>
			<Head />
			<Navbar />
			{details && <Details activeShowcase={activeShowcase} setDetails={setDetails} />}
			{iDelete && <Delete deleteFunc={deleteIShowcase} setIDelete={setIDelete} message="Delete project idea" />}
			<Dashboard>
				<div className="mx-auto container px-5 duration-300">
					<div className={"my-16"}>
						<h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
						<div style={{ color: "#B569D4" }} className={"flex items-center"}>
							<h5 className={"mr-2"}>Dashboard</h5> &gt; <h5 className={"ml-2"}> Showcase</h5>
						</div>
					</div>
					<div>
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
														Title
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Category
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Brand
													</th>
													<th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
														Actions
													</th>
												</tr>
											</thead>
											<tbody className="bg-white divide-y divide-gray-200">
												{showcase.map((e, i) => (
													<tr key={i}>
														<td className="px-6 py-4 whitespace-nowrap">
															<h4>{i + 1}</h4>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<h4>{e?.productTitle}</h4>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<h4>{e?.productCategory}</h4>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
															{/* <Moment format="YYYY/MM/DD">{e.createdAt}</Moment> */}
															<h4>{e?.brandName}</h4>
														</td>
														<td>
															<div className={"flex items-center justify-start"}>
																<button
																	className={"rounded py-1 mr-2 px-4 flex items-center text-sm"}
																	style={{ backgroundColor: "#CBFEEF", color: "#20C997" }}
																	onClick={() => {
																		setActiveShowcase(e);
																		setDetails(true);
																	}}
																>
																	<FontAwesomeIcon icon={faEdit} className={"h-3 w-3 mr-1"} style={{}} />
																	Details
																</button>
																<button
																	className={"rounded py-1 mr-2 px-4 flex items-center text-sm"}
																	style={{
																		backgroundColor: "rgba(220, 53, 69, 0.12)",
																		color: "#DC3545",
																	}}
																	onClick={() => {
																		setActiveShowcase(e);
																		setIDelete(true);
																	}}
																>
																	<FontAwesomeIcon icon={faTrashAlt} className={"h-3 w-3 mr-1"} style={{}} />
																	Delete
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
						<div className="mt-8">
							<button
								onClick={updateShowcase}
								className={"flex items-center py-1 px-5 text-white hover:opacity-90 hover:scale-50 duration-150"}
								style={{ backgroundColor: "#b569d4" }}
							>
								Load More
								{loading && <FontAwesomeIcon className={"h-5 ml-2"} spin={true} icon={faSpinner} />}
							</button>
						</div>
					</div>
				</div>
			</Dashboard>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const showcase = await getShowcase({ page: 1 });

		return {
			props: {
				shows: showcase.data.data,
			},
		};
	} catch (error) {
		return {
			props: {
				shows: [],
			},
		};
	}
}

export default Showcase;
