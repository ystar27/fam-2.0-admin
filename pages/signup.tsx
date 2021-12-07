import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "./_app";
import { setAuthToken } from "../services/axios";

const initialData = {
	email: "",
	password: ""
};

function Signup() {
    const [res, setRes] = useState(initialData);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);
	const notification = useContext(notificationsContext);
	const router = useRouter();

	const onChange = (e) => {
		setRes({ ...res, [e.target.name]: e.target.value });
	};

    const onSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <>
            <div className={"bg-secondary w-full px-5 min-h-screen py-20"}>
				<Link href="/" passHref>
					<h2 className={"text-center cursor-pointer text-xl mb-5 text-gray-100"}></h2>
				</Link>
				<div className={"max-w-md bg-gray-50 rounded shadow-md mx-auto py-8 px-5"}>
					<h1  style={{ color: "#B569D4" }} className={"text-center font-medium text-xl md:text-2xl mb-7"}>Admin Login</h1>
					<form onSubmit={onSubmit}>
						<div className={"flex flex-col mb-4"}>
							<label className={"uppercase text-sm"}>Email</label>
							<input
								type={"text"}
								name={"email"}
								value={res.email}
								onChange={onChange}
								placeholder={"example@gmail.com"}
								className={"border focus:border-yellow-500 border-gray-500 rounded bg-gray-100 py-2 px-3 focus:outline-none"}
							/>
							{error && !res.email && <small className={"text-red-500"}>Field required</small>}
						</div>
							<div className={"flex flex-col mb-4"}>
								<label className={"uppercase text-sm"}>Password</label>
								<input
									type={"password"}
									name={"password"}
									onChange={onChange}
									value={res.password}
									placeholder={"******"}
									className={"border focus:border-yellow-500 border-gray-500 rounded bg-gray-100 py-2 px-3 focus:outline-none"}
								/>
								{error && !res.password && <small className={"text-red-500"}>Field required</small>}
							</div>
						<div className={"mb-5"}>
							<button className={"w-full text-white rounded py-2 px-3"} style={{backgroundColor: "#B569D4"}} >
								Login{loader && <FontAwesomeIcon className={"text-white"} spin={true} icon={faSpinner} />}
							</button>
						</div>
					</form>
					<div className={"pb-3 border-b border-gray-300 mb-5"}>
						<p className={"text-center"}>
							Dont have an account? {" "}
							<span  style={{ color: "#B569D4" }}>
								<Link href="#">Request One</Link>
							</span>
							.
						</p>
					</div>
					<h3 className={"text-center"}>
						All Rights Reserved &copy; <span style={{ color: "#B569D4" }}>Female And More</span> {new Date().getFullYear()}{" "}
					</h3>
				</div>
			</div>
        </>
    )
}

export default Signup
