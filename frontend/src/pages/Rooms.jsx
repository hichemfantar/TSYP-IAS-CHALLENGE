import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopsList from "../components/ShopsList";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Rooms() {
	const [rooms, setRooms] = useState([
		{
			_id: "638fd4ea05859e72995ac03d",
			name: "Living Room",
			address: "25kWh",
			contactNumber: "ezfz",
			createdAt: "2022-12-06T23:48:58.732Z",
			updatedAt: "2022-12-06T23:48:58.732Z",
			pic: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			__v: 0,
		},
		{
			_id: "638fd4e605859e72995ac036",
			name: "Kitchen",
			address: "25kWh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:54.024Z",
			updatedAt: "2022-12-06T23:48:54.024Z",
			pic: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			__v: 0,
		},
		{
			_id: "638fd4e305859e72995ac033",
			name: "Bedroom",
			address: "25kWh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:51.468Z",
			updatedAt: "2022-12-06T23:48:51.468Z",
			pic: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

			__v: 0,
		},
		{
			_id: "638fd4e305859e72995ac033",
			name: "Kids bedroom",
			address: "25kWh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:51.468Z",
			updatedAt: "2022-12-06T23:48:51.468Z",
			pic: "https://media.architecturaldigest.com/photos/574f51cc1cd9644b0beb1e6a/master/pass/KinderModern-high-design-kids-room_02.jpg",

			__v: 0,
		},
		{
			_id: "638fd4e305859e72995ac033",
			name: "Master Bedroom",
			address: "25kWh",
			contactNumber: "fzef",
			createdAt: "2022-12-06T23:48:51.468Z",
			updatedAt: "2022-12-06T23:48:51.468Z",
			pic: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

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
				setRooms(json);
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
						<span className="text-xl font-semibold">My Rooms</span>
						<Link to="/add-room">
							<button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
								{/* <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"> */}
								Add a room
							</button>
						</Link>
					</div>

					<div className="grid grid-cols-12 gap-4 dark:text-white">
						{rooms?.map((shop) => (
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
