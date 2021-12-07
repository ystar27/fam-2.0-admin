import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { adminLogin } from "../services/Requests";
import { notificationsContext } from "./_app";
import { setAuthToken } from "../services/axios";

const initialData = {
	email: "",
	password: "",
};

function Login() {
	const [res, setRes] = useState(initialData);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const notification = useContext(notificationsContext);
	const router = useRouter();

	const onChange = (e: any) => {
		setRes({ ...res, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		setLoader(true);
		if (!res.email || !res.password) {
			setError(true);
			setLoader(false);
		} else {
			setError(false);
			setLoader(true);
			try {
				let response = await adminLogin(res);
				setAuthToken(response.data.data.accessToken);
				setLoader(false);
				router.push("/");
			} catch (error) {
				setLoader(false);
				notification.info({
					message: "Invalid details",
					description: "Invalid login details",
				});
			}
		}
	};

	return (
		<div className={"bg-gray-900 h-screen w-full min-h-screen px-5 py-20"}>
			<h2 className={"text-center text-xl mb-5 text-gray-100"}>...</h2>
			<div className={"max-w-md bg-gray-50 rounded shadow-md mx-auto py-8 px-5"}>
				<h1 className={"text-center font-medium text-xl md:text-2xl mb-7"}>Admin Login</h1>
				<form onSubmit={onSubmit}>
					<div className={"flex flex-col mb-4"}>
						<label className={"uppercase text-sm"}>Email</label>
						<input
							onChange={onChange}
							type={"text"}
							name={"email"}
							placeholder={"example@gmail.com"}
							className={"border focus:border-primary border-gray-500 rounded bg-gray-100 py-2 px-3 focus:outline-none"}
						/>
						{error && !res.email && <small className={"text-red-500"}>Field required</small>}
					</div>
					<div className={"flex flex-col mb-5"}>
						<label className={"uppercase text-sm"}>Password</label>
						<input
							onChange={onChange}
							name={"password"}
							type={"password"}
							placeholder={"******"}
							className={"border focus:border-primary border-gray-500 rounded bg-gray-100 py-2 px-3 focus:outline-none"}
						/>
						{error && !res.password && <small className={"text-red-500"}>Field required</small>}
					</div>
					<div className={"mb-5"}>
						<button className={"w-full bg-primary text-white rounded py-2 px-3 flex items-center justify-center"}>
							Login {loader && <FontAwesomeIcon className={"text-white h-5 w-5 ml-3"} spin={true} icon={faSpinner} />}
						</button>
					</div>
				</form>
				<h3 className={"text-center"}>
					All Rights Reserved &copy; <span className={"text-primary"}>Female And More</span> {new Date().getFullYear()}{" "}
				</h3>
			</div>
		</div>
	);
}

export default Login;
