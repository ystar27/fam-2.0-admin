import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./data";

export default function Table({ opportunities, setCreate }: any) {
	const [datatable, setDatatable] = useState({
		rows: opportunities,
		columns,
	});

	useEffect(() => {
		setDatatable({ ...datatable, rows: opportunities });
	}, [opportunities]);

	return (
		<div
			className={"w-full bg-white rounded py-6 mb-32"}
			style={{
				border: "0.5px solid #E0E0E0",
				boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
			}}
		>
			<div className={"flex items-end justify-end"}>
				<button
					className={"rounded py-2 mr-2 px-4 flex items-center text-sm"}
					style={{ backgroundColor: "#b969d6", color: "#fff" }}
					onClick={() => setCreate(true)}
				>
					Create Opportunity
				</button>
			</div>
			<MDBDataTable
				hover={true}
				entriesOptions={[10, 20, 30]}
				entries={10}
				pagesAmount={4}
				striped
				bordered
				small
				scrollX
				data={datatable}
				searching={true}
			/>
		</div>
	);
}
