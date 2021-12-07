import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { notificationsContext } from "../../pages/_app";
import axios from "../../services/axios";
import Utils from "../../services/utils";
import { useState } from "react";
import { useRef } from "react";

export default function Edit({ setEdit, categories, rOpportunity, setROpportunity, activeOpportunity, setActiveOpportunity }: any) {
	const [data, setData] = useState(activeOpportunity);
	const [previewImgErr, setPreviewImgErr] = useState(false);
	const [previewImg, setPreviewImg] = useState("");
	const [imgFile, setImgFile] = useState({});
	const [error, setError] = useState(false);
	const notification = useContext(notificationsContext);
	const slideRef = useRef();

	const onChange = async (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const updateOpportunity = async (e) => {
		e.preventDefault();
		try {
			if (data.title && data.endingDate) {
				setError(false);
				if (imgFile.name && imgFile.size) {
					let image64 = await Utils.getBase64(imgFile);

					let uploadedImg = await axios.post("https://api.cloudinary.com/v1_1/young-development-initiative/image/upload", {
						file: image64,
						upload_preset: "mesotej3",
						folder: "fam",
					});
					data.image = uploadedImg.data.secure_url;
				}
				if (typeof data.category === "object") {
					data.category = data.category._id;
				}
				const updatedOpportunity = await axios.patch(`/opportunity/${data._id}`, data);
				setROpportunity(rOpportunity.map((e, i) => (e._id === data._id ? updatedOpportunity.data.data : e)));
				setEdit(false);
				setActiveOpportunity({});
			} else {
				setError(true);
			}

			notification.success({
				message: "Successful",
				description: "Opportunity successfully updated",
			});
		} catch (error) {
			notification.warn({
				message: "Network error",
				description: "Check network connection",
			});
		}
	};

	const uploadImg = (e) => {
		let file = e.target.files[0];

		if (file && file.size < 5500000) {
			setPreviewImgErr(false);
			setImgFile(file);
			const objectUrl = URL.createObjectURL(file);
			setPreviewImg(objectUrl);
		} else if (file.size > 5500000) {
			setPreviewImgErr(true);
		} else {
			setPreviewImgErr(false);
		}
	};

	return (
		<div className={"w-full h-full absolute overflow-hidden"} style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}>
			<form onSubmit={updateOpportunity}>
				<div ref={slideRef} className={`max-w-lg slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}>
					<div className={"p-5 flex items-center justify-between bg-gray-50"}>
						<h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
							Edit Lesson
						</h2>
						<button className={"p-2 bg-white"} onClick={() => setEdit(false)}>
							<FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
						</button>
					</div>
					<div className={"p-5 py-10 bg-white"}>
						<div className={"flex flex-col"}>
							<div className="flex flex-col justify-start">
								<div className="flex justify-center px-4">
									<div
										className={"grid relative place-items-center rounded-full bg-white w-28 h-28"}
										style={{
											border: "0.5px solid #E0E0E0",
											boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
										}}
									>
										{previewImg ? (
											<div className={"overflow-hidden w-28 h-28 rounded-full"}>
												<img className={"bg-cover object-cover w-full h-full"} src={previewImg} alt={"photo"} />
											</div>
										) : (
											<div className={"overflow-hidden w-28 h-28 rounded-full grid place-content-center"}>
												<img
													className={data.image ? "w-full h-full object-cover bg-cover" : ""}
													src={data.image || "/img/story-bank/photo_size.svg"}
													alt={"photo"}
												/>
											</div>
										)}
										<input accept="image/png, image/gif, image/jpeg" onChange={uploadImg} type="file" className="hidden" name="image" id="image" />
										<label
											htmlFor="image"
											className={"w-max rounded-full bg-white grid place-items-center p-2 absolute top-0 right-0"}
											style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
										>
											<img className={"w-6"} src={"/img/story-bank/photo_camera.svg"} alt={"photo"} />
										</label>
									</div>
								</div>
								{previewImgErr && <small className="block text-red-600 text-center mt-1">Image size should be less than 5mb</small>}
							</div>
							<div className={"mb-4"}>
								<input
									type={"text"}
									name={"title"}
									value={data.title}
									placeholder={"Title"}
									onChange={(e) => onChange(e)}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
								/>
								{error && !data.title && <small className="block text-red-600 mt-1">Title is required</small>}
							</div>
							<div className={"mb-4"}>
								<textarea
									name={"description"}
									value={data.description}
									onChange={(e) => onChange(e)}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
									placeholder={"Content"}
									rows={2}
								></textarea>
								{error && !data.description && <small className="block text-red-600 mt-1">Description is required</small>}
							</div>
							<div className={"mb-4"}>
								<select
									name={"category"}
									onChange={(e) => onChange(e)}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
								>
									<option value={""} className={"hover:bg-purple-400"}>
										{data.category?.title || "Select Category"}
									</option>
									{categories.map((e, i) => (
										<option key={i} value={e._id} className={"hover:bg-purple-400"}>
											{e?.title || ""}
										</option>
									))}
								</select>
								{error && !data.category && <small className="block text-red-600 mt-1">Select opportunity category</small>}
							</div>
							<div className={"mb-4"}>
								<input
									type="date"
									name={"endingDate"}
									value={data.endingDate}
									placeholder={"Ending Date"}
									onChange={(e) => onChange(e)}
									className={"pb-4 pt-2 w-full text-gray-700 border-b focus:border-b focus:outline-none text-lg focus:border-purple-500"}
								/>
								{error && !data.endingDate && <small className="block text-red-600 mt-1">Select ending date</small>}
							</div>
							<div className={"mb-4"}>
								<button type={"submit"} className={"w-full text-white p-3 px-5 rounded text-lg font-semibold"} style={{ backgroundColor: "#B569D4" }}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
