import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DetailItem from "./Report/DetailItem";
import moment from "moment";
import FileSaver from "file-saver";
import { docData } from "../../utils/project";

export default function ProjectReportDetails({ activeProject, setDetails }: any) {
	const [report, setReport] = useState(true);
	const [csv, setCsv] = useState("");
	const vidRef = useRef(null);
	const handlePlayVideo = () => {
		vidRef.current.play();
	};

	const save = () => {
		let doc = docData(activeProject);
		var file = new File([doc], `${activeProject?.user?.lastName} ${activeProject?.user?.firstName}.txt`, { type: "text/plain;charset=utf-8" });
		FileSaver.saveAs(file);
	};

	return (
		<div className={"w-full h-full absolute overflow-hidden"} style={{ background: "rgba(54, 55, 64, 0.51)", zIndex: 50 }}>
			<div style={{ maxHeight: "75vh" }} className={`max-w-4xl rounded-md overflow-hidden slide-in min-w-min w-full duration-500 right-0 md:right-10 absolute top-40 bg-white flex flex-col`}>
				<div className={"p-5 flex items-center justify-between bg-gray-50"}>
					<h2 className={"text-lg font-semibold"} style={{ color: "#B569D4" }}>
						Project Report Details
					</h2>
					<button className={"p-2 bg-white"} onClick={() => setDetails(false)}>
						<FontAwesomeIcon className={"h-5 w-5"} icon={faTimes} />
					</button>
				</div>
				<div className={"overflow-y-auto overflow-x-hidden"}>
					<div className={"py-10 px-5 flex"}>
						<div onClick={() => setReport(true)} className={"mr-4 cursor-pointer"} style={{ borderBottom: report ? "1.5px solid #B569D4" : "" }}>
							<h3 style={{ color: "#B569D4" }} className={"font-semibold"}>
								Report
							</h3>
						</div>
						<div onClick={() => setReport(false)} className={"cursor-pointer"} style={{ borderBottom: !report ? "1.5px solid #B569D4" : "" }}>
							<h3 style={{ color: "#B569D4" }} className={"font-semibold"}>
								Idea
							</h3>
						</div>
					</div>
					<div className={"px-5"}>
						{report ? (
							<div>
								<DetailItem title={"Full Name"} detail={`${activeProject?.user?.lastName} ${activeProject?.user?.firstName}`} />
								<DetailItem title={"Email"} detail={activeProject?.user?.email || activeProject?.user?.personalInfo?.email} />
								<DetailItem title={"Phone"} detail={activeProject?.user?.personalInfo?.phoneNumber || activeProject?.user?.phoneNumber} />
								<DetailItem title={"Location"} detail={activeProject?.location} />
								<DetailItem title={"Project Name"} detail={activeProject?.idea?.ideaDetails?.projectName} />
								<DetailItem title={"Implementation"} detail={activeProject?.howImplemented} />
								<DetailItem title={"Result"} detail={activeProject?.result} />
								<DetailItem title={"Number Impacted"} detail={activeProject?.peopleImpacted} />
								<DetailItem title={"Lessons"} detail={activeProject?.lessons} />
								<DetailItem title={"Mode Of Submission"} detail={activeProject?.modeOfSubmission} />
								<DetailItem title={"Personal Achievement"} detail={activeProject?.projectSelfImprovement} />
								<DetailItem title={"Fund Raising Details"} detail={activeProject?.fundRaisingDetail} />
								<DetailItem title={"Factors For Better Implementation"} detail={activeProject?.factorsForBetterImplementaation} />
								<DetailItem title={"Amount Spent"} detail={activeProject?.amountSpent} />
								<DetailItem title={"Challenges"} detail={activeProject?.challenges} />
								<DetailItem title={"Extending"} detail={activeProject?.extending} />
								<DetailItem title={"Comment"} detail={activeProject?.comment} />
								<DetailItem
									title={"Date Completed"}
									detail={
										// moment(activeProject?.date).format("MMM Do YYYY") ||
										moment(activeProject.updatedAt).format("MMM Do YYYY")
									}
								/>
								{/* <iframe width="100%" src={activeProject?.video + "?autoplay=1&mute=1"}></iframe> */}
								<div className="flex items-center">
									{activeProject?.video && (
										<div className="mb-5">
											<div className="mb-5">
												<a href={activeProject?.video} target={"_blank"} className={"bg-blue-800 text-white px-5 py-2 shadow mr-4 hover:opacity-90"}>
													Link To Project
												</a>
											</div>
										</div>
									)}
									<div className="mb-5">
										<div className="mb-5">
											<button onClick={() => save()} className={"bg-gray-800 text-white px-5 py-1 shadow hover:opacity-90"}>
												Download Report
											</button>
										</div>
									</div>
								</div>
								{activeProject?.projectPictures &&
									activeProject?.projectPictures.length > 0 &&
									activeProject?.projectPictures.map((e, i) => (
										<div key={i} className={"py-5 w-full"}>
											<img src={e?.url} alt={"Project Image"} className={"w-full"} />
										</div>
									))}
							</div>
						) : (
							<div>
								<DetailItem title={"Project Name"} detail={activeProject?.idea?.ideaDetails?.projectName} />
								<DetailItem title={"Category"} detail={activeProject?.idea?.ideaDetails?.projectCategory} />
								<DetailItem title={"Problem to solve"} detail={activeProject?.idea?.ideaDetails?.problemToSolve} />
								<DetailItem title={"Solution"} detail={activeProject?.idea?.ideaDetails?.explainSolutionToProblem} />
								<DetailItem title={"Expectations"} detail={activeProject?.idea?.ideaDetails?.resultsExpected} />
								<DetailItem title={"Benefits"} detail={activeProject?.idea?.ideaDetails?.targetBeneficiaries} />
								<DetailItem title={"Reason for Problem"} detail={activeProject?.idea?.ideaDetails?.reasonForSolvingProblem} />
								<DetailItem title={"Publicity"} detail={activeProject?.idea?.ideaDetails?.publicityPlan} />
								<DetailItem title={"Partners"} detail={activeProject?.idea?.ideaDetails?.individualOrGroup} />
								<DetailItem title={"Created At"} detail={moment(activeProject?.idea?.createdAt).format("MMM Do YYYY")} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
