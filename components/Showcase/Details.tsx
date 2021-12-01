import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DetailItem from "./DetailItem";

export default function Detail({ activeShowcase: asc, setDetails }: any) {
	let date = new Date(asc.createdAt);

	return (
		<div className={"w-full h-full absolute overflow-hidden"} style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}>
			<div
				style={{ maxHeight: "75vh" }}
				className={`max-w-4xl rounded-md overflow-hidden slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}
			>
				<div className={"p-5 flex items-center justify-between bg-gray-50"}>
					<h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
						Showcase Details
					</h2>
					<button className={"p-2 bg-white"} onClick={() => setDetails(false)}>
						<FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
					</button>
				</div>
				<div className={"overflow-y-auto overflow-x-hidden"}>
					<div className={"py-10 px-5"}>
						<DetailItem title={"Title"} detail={asc?.productTitle} />
						<DetailItem title={"Description"} detail={asc?.productDescription} />
						<DetailItem title={"Category"} detail={asc?.productCategory} />
						<DetailItem title={"Brand"} detail={asc?.brandName} />
						<DetailItem title={"Link to project"} detail={asc?.productLink} />
						<DetailItem title={"By"} detail={asc?.user?.firstName + " " + asc?.user?.lastName} />
						<DetailItem title={"Submitted on"} detail={date.toDateString()} />
            <div>
              <img src={asc?.productImage} alt={'Product Image'} className={'w-full'} />
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}
