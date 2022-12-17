import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// components

export default function Donations() {
	const [donations, setDonations] = useState([]);
	// const { donations, dispatch } = useDonationsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchDonations = async () => {
			const response = await fetch("/api/donations/per-user", {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				// dispatch({ type: "SET_DONATIONS", payload: json });
				setDonations(json);
			}
		};

		if (user) {
			fetchDonations();
		}
	}, [user]);

	return (
		<div className="container mx-auto my-4 px-2">
			<div className="p-2 flex flex-wrap gap-4 justify-between items-center pb-4 bg-white dark:bg-gray-900">
				<div>
					<button
						id="dropdownActionButton"
						data-dropdown-toggle="dropdownAction"
						className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						type="button"
					>
						<span className="sr-only">Action button</span>
						Action
						<svg
							className="ml-2 w-3 h-3"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{/* Dropdown menu */}
					<div
						id="dropdownAction"
						className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul
							className="py-1 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownActionButton"
						>
							<li>
								<a
									href="#"
									className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Reward
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Promote
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Activate account
								</a>
							</li>
						</ul>
						<div className="py-1">
							<a
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Delete User
							</a>
						</div>
					</div>
				</div>
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search-users"
						className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for users"
					/>
				</div>
			</div>
			<div className="overflow-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="py-3 px-6">
								Donor
							</th>
							<th scope="col" className="py-3 px-6">
								Amount (TND)
							</th>
							<th scope="col" className="py-3 px-6">
								Note
							</th>
							<th scope="col" className="py-3 px-6">
								Date
							</th>
						</tr>
					</thead>
					<tbody>
						{donations &&
							donations.map((donation) => (
								<>
									<tr
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
										key={donation._id}
									>
										<th
											scope="row"
											className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{donation.donor?.email}
										</th>
										<td className="py-4 px-6">{donation.amount}</td>
										<td className="py-4 px-6">{donation.note}</td>
										<td className="py-4 px-6">
											{
												// donation?.createdAt
												new Intl.DateTimeFormat("fr-FR").format(
													new Date(donation?.createdAt)
												)
											}
										</td>
									</tr>
									{/* <DonationDetails key={donation._id} donation={donation} /> */}
								</>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
