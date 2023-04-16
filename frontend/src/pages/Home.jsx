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
	const [intensity, setIntensity] = useState(50);
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
				<div className="bg-green-100 col-span-12 lg:col-span-12 flex flex-col gap-2 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Welcome back!</span>
					<span className="text-xl">
						Your energy consumption is operating at optimal levels.
					</span>
					<div>
						<button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
							Learn more
						</button>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Boiler Room</span>
					<span className="text-xl font-bold">450Wh</span>
				</div>
				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Car assembly</span>
					<span className="text-xl font-bold">230Wh</span>
				</div>
				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Silicon Refinement</span>
					<span className="text-xl font-bold">310Wh</span>
				</div>
				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Repairs Garage</span>
					<span className="text-xl font-bold">840Wh</span>
				</div>
				<div className="col-span-12 lg:col-span-4 lg:row-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					{/* <span className="text-xl font-semibold">Welcome Annie</span> */}
					<span className="text-xl font-semibold">My top used rooms</span>
					{/* <span className="text-xl font-bold">201kWh</span> */}

					<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
						<div>Repairs Garage</div>
						<div>Boiler Room</div>
						<div>Silicon Refinement</div>
						<div>Car assembly</div>
					</div>
				</div>

				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Temperature</span>
					<span className="text-xl font-bold">+35c</span>
				</div>
				<div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Humidity</span>
					<span className="text-xl font-bold">5%</span>
				</div>
				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Light Intensity</span>
					<span className="text-xl font-bold">{intensity}%</span>
					<input
						type="range"
						min="1"
						max="100"
						value={intensity}
						onChange={(e) => setIntensity(e.target.value)}
					/>
				</div>

				{/* <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
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
				</div> */}

				<div className="col-span-12 lg:col-span-12 flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-semibold">Spending</span>
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
								name: "Monday",
								data: [31, 40, 28, 51, 42, 109, 100],
							},
							{
								name: "Tuesday",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
							{
								name: "Wednesday",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
							{
								name: "Thursday",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
							{
								name: "Friday",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
							{
								name: "Saturday",
								data: [11, 32, 45, 32, 34, 52, 41],
							},
							{
								name: "Sunday",
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
