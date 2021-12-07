import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { registerAdmin } from "../../services/Requests";
import { notificationsContext } from "../../pages/_app";

const initialData = {
	fullName: "",
	email: "",
	password: "",
};

export default function CreateAdmin({ setCreateAdmin, setAdmins, admins }: any) {
	const [data, setData] = useState(initialData);
	const notification = useContext(notificationsContext);
	const [loader, setLoader] = useState(false);
	const slideRef = useRef();

	const onChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		setLoader(true);
		try {
			let res = await registerAdmin(data);
			setLoader(false);
			setAdmins([...admins, res.data.data.user]);
			setCreateAdmin(false);
			notification.success({
				message: "Successful",
				description: "Admin created",
			});
		} catch (error) {
			console.log(error);
			setLoader(false);
			setCreateAdmin(false);
			notification.info({
				message: "Error",
				description: error.response?.data?.message || "Try again",
			});
		}
	};

	return (
		<div className={"w-full h-full absolute overflow-hidden"} style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}>
			<div ref={slideRef} className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}>
				<div className={"p-5 flex items-center justify-between bg-gray-50"}>
					<h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
						Create Admin
					</h2>
					<button className={"p-2 bg-white"} onClick={() => setCreateAdmin(false)}>
						<FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
					</button>
				</div>
				<div className={"p-5 py-10 bg-white"}>
					<form onSubmit={onSubmit}>
						<div className={"flex flex-col"}>
							<div className={"mb-6"}>
								<input
									type={"text"}
									name={"fullName"}
									onChange={onChange}
									value={data.fullName}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									placeholder={"Full Name"}
								/>
							</div>
							<div className={"mb-6"}>
								<input
									type={"text"}
									name={"email"}
									onChange={onChange}
									value={data.email}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									placeholder={"Email"}
								/>
							</div>
							<div className={"mb-6"}>
								<input
									name={"password"}
									type={"password"}
									onChange={onChange}
									value={data.password}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									placeholder={"Password"}
								/>
							</div>
							<div className={"mb-6"}>
								<button
									type={"submit"}
									className={"w-full text-white p-3 px-5 rounded text-lg font-semibold flex items-center justify-center"}
									style={{ backgroundColor: "#B569D4" }}
								>
									Create Admin {loader && <FontAwesomeIcon className={"text-white h-5 w-5 ml-3"} spin={true} icon={faSpinner} />}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
