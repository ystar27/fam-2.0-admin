import React, { useState, useEffect } from "react";

const Display = ({ tabs, setTabs, image, upload, uploadLoad, setUploadFile }: any) => {
	const [previewImg, setPreviewImg] = useState("");
	const [previewImgErr, setPreviewImgErr] = useState(false);

	useEffect(() => {
		setPreviewImg("");
	}, [tabs, setTabs]);

	const uploadImg = (e) => {
		e.preventDefault();

		let file;
		if (e.target.files) {
			file = e.target.files[0];
		} else {
			file = e.dataTransfer.files[0];
		}

		if (file && file.size < 5500000) {
			setPreviewImgErr(false);
			setUploadFile(file);
			const objectUrl = URL.createObjectURL(file);
			setPreviewImg(objectUrl);
		} else if (file.size > 5500000) {
			setPreviewImgErr(true);
		} else {
			setPreviewImgErr(false);
		}
	};

	const noAction = (e) => {
		e.preventDefault();
	};

	return (
		<div className={"grid grid-cols-2 gap-5"}>
			<div className={"w-full relative"}>
				{previewImg ? (
					<img className={"bg-contain"} src={previewImg} alt="certificate" />
				) : (
					<img className={"bg-contain"} src={image || "/img/certificate/photo_size.svg"} alt="certificate" />
				)}
				<div className={"absolute top-0 bottom-0 w-full bg-transparent"}></div>
				{previewImgErr && <small className={"text-center text-red-400"}>file size should less than 5mb</small>}
			</div>
			<div>
				<h5 className={"font-medium text-gray-800"}>Edit</h5>
				<input accept="image/png, image/gif, image/jpeg" onChange={uploadImg} type="file" className={"hidden"} name="image" id="image" />
				<label htmlFor="image">
					<div
						onDragOver={noAction}
						onDragEnter={noAction}
						onDragLeave={noAction}
						onDrop={uploadImg}
						className={"w-full cursor-pointer mb-10 mt-5 rounded-md text-center border border-gray-100 py-12"}
					>
						<h4 className={"font-medium text-lg text-gray-800"}>Drop file to upload</h4>
						<h6 className={"text-gray-400"}>or click here</h6>
					</div>
				</label>
				<div className={"grid grid-cols-2 text-white gap-x-4 mb-6"}>
					<button className={"focus:outline-none rounded py-2 w-full bg-gray-700"}>Cancel</button>
					<button onClick={upload} className={"focus:outline-none flex items-center justify-center rounded py-2 w-full bg-primary"}>
						<p>Upload Image</p> {uploadLoad && <img className="ml-4 h-6" src={"/img/loader-w.gif"} alt={"loading..."} />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Display;
