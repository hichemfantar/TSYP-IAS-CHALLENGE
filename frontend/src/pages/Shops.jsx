import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopsList from "../components/ShopsList";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Shops() {
	const [shops, setShops] = useState([
		{
			_id: "638fd4ea05859e72995ac03d",
			name: "Samsung Fridge",
			address: "250Wh",
			contactNumber: "ezfz",
			createdAt: "2022-12-06T23:48:58.732Z",
			updatedAt: "2022-12-06T23:48:58.732Z",
			pic: "https://www.cnet.com/a/img/resize/2d2e0487bdd32b0892ba5538b1b1219ba72f5be0/hub/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg?auto=webp&width=1200",
			__v: 0,
		},
		{
			_id: "638fd4e605859e72995ac036",
			name: "DLink Router",
			address: "10Wh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:54.024Z",
			updatedAt: "2022-12-06T23:48:54.024Z",
			pic: "https://cdn.thewirecutter.com/wp-content/media/2020/09/wifirouter-2048px-3708.jpg",
			__v: 0,
		},
		{
			_id: "638fd4e305859e72995ac033",
			name: "Xiaomi TV",
			address: "250Wh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:51.468Z",
			updatedAt: "2022-12-06T23:48:51.468Z",
			pic: "https://www.cnet.com/a/img/resize/48ade9b2a58559b3974319a0b4ef0aff4f8bf17e/hub/2022/10/18/cfeb9075-3fd1-465a-959f-a543aac0a573/tcl-6-series-tv-r6-2022-6368.jpg?auto=webp&fit=crop&height=528&width=940",

			__v: 0,
		},
		{
			_id: "638fd34095e812729b29ef55",
			name: "Heating System",
			address: "2900Wh",
			contactNumber: "rgdazd",
			pic: "https://www.thespruce.com/thmb/uCAFtGxJOnWHGnTQih67o7rMO3g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-types-of-air-conditioning-systems-work-1824734-hero-740003052ebb4bebb5dd9b42e441c118.jpg",
			createdAt: "2022-12-06T23:41:52.807Z",
			updatedAt: "2022-12-06T23:41:52.807Z",
			__v: 0,
		},
		{
			_id: "638fd32195e812729b29ef52",
			name: "Security Camera",
			address: "10Wh",
			pic: "https://www.gensecurity.com/hubfs/Blog/White%20male%20adjusting%20smart%20camera%20and%20monitoring%20camera%20on%20his%20phone%20on%20the%20couch.jpg",
			contactNumber: "rg",
			createdAt: "2022-12-06T23:41:21.086Z",
			updatedAt: "2022-12-06T23:41:21.086Z",
			__v: 0,
		},
	]);
	// const { donations, dispatch } = useDonationsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchShops = async () => {
			const response = await fetch("/api/shops", {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				// dispatch({ type: "SET_DONATIONS", payload: json });
				setShops(json);
			}
		};

		if (user) {
			// fetchShops();
		}
	}, [user]);

	return (
		<div className="container mx-auto my-4 px-2">
			<div className="grid grid-cols-12 gap-4 mb-8">
				<div className="col-span-12 lg:col-span-12 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-wrap justify-between">
						<span className="text-xl font-semibold">My Devices</span>
						<Link to="/add-device">
							<button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
								Add a device
							</button>
						</Link>
					</div>

					<div className="grid grid-cols-12 gap-4 dark:text-white">
						{shops?.map((shop) => (
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
