import React from "react";

export default function RoomsList({
	name,
	contactNumber,
	address,
	className,
	pic,
}) {
	console.log(pic);
	return (
		<div
			className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ${className}`}
		>
			{/* <div className="flex justify-end px-4 pt-4">
				<button
					id="dropdownButton"
					data-dropdown-toggle="dropdown"
					className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
					type="button"
				>
					<span className="sr-only">Open dropdown</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
					</svg>
				</button>
				<div
					id="dropdown"
					className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
				>
					<ul className="py-1" aria-labelledby="dropdownButton">
						<li>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Edit
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Export Data
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Delete
							</a>
						</li>
					</ul>
				</div>
			</div> */}
			<div className="flex flex-col items-center py-10">
				<img
					className="w-60 h-60 mb-3 rounded-md shadow-lg object-cover"
					src={
						pic ||
						"https://www.cnet.com/a/img/resize/2d2e0487bdd32b0892ba5538b1b1219ba72f5be0/hub/2016/10/27/a11c03cc-bc86-427c-b200-fa5c9f4e2f20/lginstaviewproductphotos-8.jpg?auto=webp&width=1200"
					}
					alt="shop"
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{name}
				</h5>
				<span className="text-sm text-gray-500 dark:text-gray-400">
					{address || "474 Boston Post Rd, North Windham"}
				</span>
				<span className="text-sm text-gray-500 dark:text-gray-400">
					{contactNumber || "474 Boston Post Rd, North Windham"}
				</span>
				<div className="flex mt-4 space-x-3 md:mt-6">
					<a
						href="#"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Edit
					</a>
					<a
						href="#"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
					>
						Delete
					</a>
				</div>
			</div>
		</div>
	);
}
