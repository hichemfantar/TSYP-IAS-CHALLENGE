import { useEffect, useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import DonationDetails from "../components/DonationDetails";
import DonationForm from "../components/DonationForm";
import Chart from "react-apexcharts";
import ShopsList from "../components/ShopsList";

const Home = () => {
	const [donations, setDonations] = useState([]);

	const { user } = useAuthContext();

	useEffect(() => {
		const fetchDonations = async () => {
			const response = await fetch("/api/donations", {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				setDonations(json);
			}
		};

		if (user) {
			fetchDonations();
		}
	}, [user]);

	return (
		<div className="container mx-auto my-4 px-2">
			<div className="grid grid-cols-12 gap-4 mb-8">
				<div className="bg-[#ddeafa] col-span-12 lg:col-span-12 flex flex-col gap-2 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Welcome back!</span>
					<span className="text-xl">
						We are a nonprofit that connects donors with grassroots projects
						around the world. Donate to charity and see your impact with regular
						updates.
					</span>
					<div>
						<button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
							Learn more
						</button>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Total users</span>
					<span className="text-xl font-bold">1,752</span>
				</div>
				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Total donations</span>
					<span className="text-xl font-bold">
						{Intl.NumberFormat().format(donations) || "18,646"} TND
					</span>
				</div>
				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Total volunteers</span>
					<span className="text-xl font-bold">468</span>
				</div>

				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-semibold">Active user ages</span>
					</div>

					<Chart
						className="text-white"
						options={{
							theme: {
								mode: "light",
							},
							chart: {
								// width: 380,
								// height: 680,
								type: "donut",
								fontFamily: "Poppins",
							},
							dataLabels: {
								enabled: false,
							},
							responsive: [
								{
									breakpoint: 480,
									options: {
										chart: {
											// width: 200,
										},
										legend: {
											show: true,
											height: 50,
										},
									},
								},
							],
							legend: {
								position: "bottom",
								// offsetY: 0,
								height: 50,
							},
						}}
						series={[44, 55, 13, 33]}
						type="donut"
						// width="500"
						// height="600"
					/>
				</div>
				<div className="col-span-12 lg:col-span-8 flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-semibold">Donation timeline</span>
					</div>
					<Chart
						className=""
						options={{
							chart: {
								height: 350,
								type: "area",
							},
							dataLabels: {
								enabled: false,
							},
							stroke: {
								curve: "smooth",
							},
							xaxis: {
								type: "datetime",
								categories: [
									"2018-09-19T00:00:00.000Z",
									"2018-09-19T01:30:00.000Z",
									"2018-09-19T02:30:00.000Z",
									"2018-09-19T03:30:00.000Z",
									"2018-09-19T04:30:00.000Z",
									"2018-09-19T05:30:00.000Z",
									"2018-09-19T06:30:00.000Z",
								],
							},
							tooltip: {
								x: {
									format: "dd/MM/yy HH:mm",
								},
							},
						}}
						series={[
							{
								name: "series1",
								data: [31, 40, 28, 51, 42, 109, 100],
							},
							{
								name: "series2",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
						]}
						type="line"
						height="400"
						// width="500"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
