import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopsList from "../components/ShopsList";
import { useAuthContext } from "../hooks/useAuthContext";

export const shopsData = [
	{
		_id: "638fd4ea05859e72995ac03d",
		name: "AS9100",
		address: "250Wh",
		contactNumber: "ezfz",
		createdAt: "2022-12-06T23:48:58.732Z",
		updatedAt: "2022-12-06T23:48:58.732Z",
		pic: "https://f.hubspotusercontent40.net/hubfs/4238299/2020%20Website/Electronic%20Manufacturing%20Services/pcb%20assembly%20hp.jpg",
		__v: 0,
	},
	{
		_id: "638fd4e605859e72995ac036",
		name: "GM5000",
		address: "10Wh",
		contactNumber: "fzef",
		createdAt: "2022-12-06T23:48:54.024Z",
		updatedAt: "2022-12-06T23:48:54.024Z",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-l4QNqmm6hDoG3wArWHo0iSpovVuFBdaDpw&usqp=CAU",
		__v: 0,
	},
	{
		_id: "638fd4e305859e72995ac033",
		name: "KIYA70",
		address: "250Wh",
		contactNumber: "fzef",
		createdAt: "2022-12-06T23:48:51.468Z",
		updatedAt: "2022-12-06T23:48:51.468Z",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02uw3T4ODcMVSJOcALM0SHFV6DMItNR0ns-QcGR3E9aDTj4hnB-cAAKkP_Kz9BjlSfZE&usqp=CAU",

		__v: 0,
	},
	{
		_id: "638fd34095e812729b29ef55",
		name: "AIM3D",
		address: "2900Wh",
		contactNumber: "rgdazd",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G-mMHJ-HFQaI6Q5Ao9JQ0nmeiFWx87ObVbrsREohHzV5AemTx6o2Mqrz_rR8FGler80&usqp=CAU",
		createdAt: "2022-12-06T23:41:52.807Z",
		updatedAt: "2022-12-06T23:41:52.807Z",
		__v: 0,
	},
	{
		_id: "638fd32195e812729b29ef52",
		name: "SW50",
		address: "10Wh",
		pic: "https://image.made-in-china.com/155f0j00ymtVsQpWgUog/Automatic-Brick-Stacker-Brick-Extruder-Manufacturing-Machines-List-Clay-Brick-Making-Machine.jpg",
		contactNumber: "rg",
		createdAt: "2022-12-06T23:41:21.086Z",
		updatedAt: "2022-12-06T23:41:21.086Z",
		__v: 0,
	},
];
export const shopsDataa = [
	{
		_id: "638fd4ea05859e72995ac03d",
		name: "Itron, Inc",
		address: "250Wh",
		contactNumber: "ezfz",
		createdAt: "2022-12-06T23:48:58.732Z",
		updatedAt: "2022-12-06T23:48:58.732Z",
		pic: "https://f.hubspotusercontent40.net/hubfs/4238299/2020%20Website/Electronic%20Manufacturing%20Services/pcb%20assembly%20hp.jpg",
		__v: 0,
	},
	{
		_id: "638fd4e605859e72995ac036",
		name: "Siemens",
		address: "10Wh",
		contactNumber: "fzef",
		createdAt: "2022-12-06T23:48:54.024Z",
		updatedAt: "2022-12-06T23:48:54.024Z",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-l4QNqmm6hDoG3wArWHo0iSpovVuFBdaDpw&usqp=CAU",
		__v: 0,
	},
	{
		_id: "638fd4e305859e72995ac033",
		name: "Cisco",
		address: "250Wh",
		contactNumber: "fzef",
		createdAt: "2022-12-06T23:48:51.468Z",
		updatedAt: "2022-12-06T23:48:51.468Z",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02uw3T4ODcMVSJOcALM0SHFV6DMItNR0ns-QcGR3E9aDTj4hnB-cAAKkP_Kz9BjlSfZE&usqp=CAU",

		__v: 0,
	},
	{
		_id: "638fd34095e812729b29ef55",
		name: "SparkMeter",
		address: "2900Wh",
		contactNumber: "rgdazd",
		pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G-mMHJ-HFQaI6Q5Ao9JQ0nmeiFWx87ObVbrsREohHzV5AemTx6o2Mqrz_rR8FGler80&usqp=CAU",
		createdAt: "2022-12-06T23:41:52.807Z",
		updatedAt: "2022-12-06T23:41:52.807Z",
		__v: 0,
	},
	{
		_id: "638fd32195e812729b29ef52",
		name: "ENLİL ",
		address: "10Wh",
		pic: "https://image.made-in-china.com/155f0j00ymtVsQpWgUog/Automatic-Brick-Stacker-Brick-Extruder-Manufacturing-Machines-List-Clay-Brick-Making-Machine.jpg",
		contactNumber: "rg",
		createdAt: "2022-12-06T23:41:21.086Z",
		updatedAt: "2022-12-06T23:41:21.086Z",
		__v: 0,
	},
];

export default function Shops() {
	return (
		<div className="container mx-auto my-4 px-2">
			<div className="grid grid-cols-12 gap-4 mb-8">
				<div className="col-span-12 lg:col-span-12 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-wrap justify-between">
						<span className="text-xl font-semibold">Recommended matches</span>
					</div>

					<div className="grid grid-cols-12 gap-4 dark:text-white">
						{shopsDataa?.map((shop) => (
							<ShopsList
								pic={shop?.pic}
								name={shop?.name}
								address={shop?.address}
								contactNumber={shop?.contactNumber}
								className="col-span-12 md:col-span-3"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
