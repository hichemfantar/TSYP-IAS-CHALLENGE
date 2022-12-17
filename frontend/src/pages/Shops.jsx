import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopsList from "../components/ShopsList";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Shops() {
	const [shops, setShops] = useState([]);
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
			fetchShops();
		}
	}, [user]);

	return (
		<div className="container mx-auto my-4 px-2">
			<div className="grid grid-cols-12 gap-4 mb-8">
				<div className="col-span-12 lg:col-span-12 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-wrap justify-between">
						<span className="text-xl font-semibold">Shops</span>
						<Link to="/add-shop">
							<button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
								Add a shop
							</button>
						</Link>
					</div>

					<div className="grid grid-cols-12 gap-4 dark:text-white">
						{shops?.map((shop) => (
							<ShopsList
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
