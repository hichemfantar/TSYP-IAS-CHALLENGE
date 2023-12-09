import { useEffect, useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import DonationDetails from "../components/DonationDetails";
import DonationForm from "../components/DonationForm";
import Chart from "react-apexcharts";
import ShopsList from "../components/ShopsList";
import { faker } from "@faker-js/faker";

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
						Your patients are all on schedule this week.
					</span>
					<div>
						<button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
							Learn more
						</button>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Total Patients</span>
					<span className="text-xl font-bold">90</span>
				</div>
				<div className="col-span-12 lg:col-span-3 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Weekly Appointments</span>
					<span className="text-xl font-bold">60</span>
				</div>
				<div className="col-span-12 lg:col-span-3 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Prescriptions</span>
					<span className="text-xl font-bold">40</span>
				</div>
				<div className="col-span-12 lg:col-span-3 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					<span className="text-xl font-semibold">Canceled Appointments</span>
					<span className="text-xl font-bold">4</span>
				</div>

				<div className="col-span-12 lg:col-span-5 lg:row-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					{/* <span className="text-xl font-semibold">Welcome Annie</span> */}
					<span className="text-xl font-semibold">Patients</span>
					{/* <span className="text-xl font-bold">201kWh</span> */}

					{/* <div className="col-span-12 lg:col-span-2 flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md"> */}
					<div className="flex items-center justify-between">
						<div>
							<div>{faker.person.firstName()}</div>
							<div>3 hours ago</div>
						</div>
						<div>Above normal peak</div>
						<div>140 BPM</div>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<div>{faker.person.firstName()}</div>
							<div>3 hours ago</div>
						</div>
						<div>Above normal peak</div>
						<div>140 BPM</div>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<div>{faker.person.firstName()}</div>
							<div>3 hours ago</div>
						</div>
						<div>Above normal peak</div>
						<div>140 BPM</div>
					</div>
					{/* </div> */}
				</div>

				<div className="col-span-12 justify-between lg:col-span-7 flex gap-4 p-6 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow-md">
					{[1, 1, 1].map((e) => (
						<div className="flex flex-col gap-2">
							<div className="font-bold">{faker.person.firstName()}</div>
							<div>ID: ozrhgnre</div>
							<div className="w-full h-[1px] bg-gray-300"></div>
							<div>{faker.phone.number()}</div>
							<div className=" flex justify-between">
								<div>
									Heart rate:{" "}
									{faker.number.int({
										min: 60,
										max: 120,
									})}
								</div>
							</div>
							<div className=" flex justify-between">
								<div>
									Blood pressure:{" "}
									{faker.number.int({
										min: 60,
										max: 120,
									})}
								</div>
							</div>
							<div className=" flex justify-between">
								<div>
									Temperature:{" "}
									{faker.number.int({
										min: 60,
										max: 120,
									})}
								</div>
							</div>
							<div className=" flex justify-between">
								<div>
									SpO2:{" "}
									{faker.number.int({
										min: 60,
										max: 120,
									})}
								</div>
							</div>
							<div className="w-full h-[1px] bg-gray-300"></div>
							<div className=" flex justify-between">
								<div>
									Today:{" "}
									{faker.number.int({
										min: 60,
										max: 120,
									})}
								</div>
							</div>
						</div>
					))}
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
						<span className="text-xl font-semibold">Treated Patients</span>
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
								type: "category",
								categories: [
									"Monday",
									"Tuesday",
									"Wednesday",
									"Thursday",
									"Friday",
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
								name: "Patients",
								data: [10, 12, 11, 14, 20],
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
