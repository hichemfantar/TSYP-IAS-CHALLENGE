import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { BiDevices } from "react-icons/bi";
import { RiDeviceFill } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import logo from "./lol.png";

export default function SideNav() {
	const { user } = useAuthContext();

	return (
		<aside className="w-full h-full" aria-label="Sidenav">
			<div className="overflow-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-green-800 dark:border-gray-700 ">
				<div className="flex items-center gap-2">
					<div className="w-ful flex justify-centr mb-4">
						<img src={logo} alt="" className="h-10 w-10 object-contain" />
					</div>
					<h1 className="text-cener text-xl font-semibold whitespace-nowrap dark:text-white mb-4">
						HAI
					</h1>
				</div>

				<ul className="space-y-2">
					<li>
						<Link
							to="/"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group"
						>
							<svg
								aria-hidden="true"
								className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
								<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
							</svg>
							<span className="ml-3">Overview</span>
						</Link>
					</li>

					<li>
						<Link
							to="/devices"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group"
						>
							<div className="text-gray-500">
								<RiDeviceFill size={24} />
							</div>
							{/* <svg
								aria-hidden="true"
								className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
								<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
							</svg> */}
							<span className="ml-3">Patients</span>
						</Link>
					</li>
				</ul>
				<ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
					<li>
						<a
							href="#"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-green-100 dark:hover:bg-green-700 dark:text-white group"
						>
							<svg
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
								<path
									fillRule="evenodd"
									d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-3">Docs</span>
						</a>
					</li>

					<li>
						<a
							href="#"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-green-100 dark:hover:bg-green-700 dark:text-white group"
						>
							<svg
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-3">Help</span>
						</a>
					</li>
				</ul>

				<div className="hidden justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-green-800">
					<a
						href="#"
						className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-green-100 dark:hover:bg-green-600"
					>
						<svg
							aria-hidden="true"
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
						</svg>
					</a>
					<a
						href="#"
						data-tooltip-target="tooltip-settings"
						className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-green-100 dark:hover:bg-green-600"
					>
						<svg
							aria-hidden="true"
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<div
						id="tooltip-settings"
						role="tooltip"
						className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-green-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
					>
						Settings page
						<div className="tooltip-arrow" data-popper-arrow="" />
					</div>
					<button
						type="button"
						data-dropdown-toggle="language-dropdown"
						className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-green-100 dark:hover:bg-green-600"
					>
						<img
							className="w-6 h-6 rounded-full shadow-lg object-cover"
							src="https://randomuser.me/api/portraits/men/78.jpg"
							alt="Bonnie image"
						/>
					</button>
					{/* Dropdown */}
					<div
						className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-green-700"
						id="language-dropdown"
					>
						<ul className="py-1" role="none">
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-green-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-green-600"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5 rounded-full mr-2"
											xmlns="http://www.w3.org/2000/svg"
											id="flag-icon-css-us"
											viewBox="0 0 512 512"
										>
											<g fillRule="evenodd">
												<g strokeWidth="1pt">
													<path
														fill="#bd3d44"
														d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
														transform="scale(3.9385)"
													/>
													<path
														fill="#fff"
														d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
														transform="scale(3.9385)"
													/>
												</g>
												<path
													fill="#192f5d"
													d="M0 0h98.8v70H0z"
													transform="scale(3.9385)"
												/>
												<path
													fill="#fff"
													d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
													transform="scale(3.9385)"
												/>
											</g>
										</svg>
										English (US)
									</div>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-green-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-green-600"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5 rounded-full mr-2"
											xmlns="http://www.w3.org/2000/svg"
											id="flag-icon-css-de"
											viewBox="0 0 512 512"
										>
											<path fill="#ffce00" d="M0 341.3h512V512H0z" />
											<path d="M0 0h512v170.7H0z" />
											<path fill="#d00" d="M0 170.7h512v170.6H0z" />
										</svg>
										Deutsch
									</div>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-green-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-green-600"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5 rounded-full mr-2"
											xmlns="http://www.w3.org/2000/svg"
											id="flag-icon-css-it"
											viewBox="0 0 512 512"
										>
											<g fillRule="evenodd" strokeWidth="1pt">
												<path fill="#fff" d="M0 0h512v512H0z" />
												<path fill="#009246" d="M0 0h170.7v512H0z" />
												<path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
											</g>
										</svg>
										Italiano
									</div>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-green-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-green-600"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5 rounded-full mr-2"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											id="flag-icon-css-cn"
											viewBox="0 0 512 512"
										>
											<defs>
												<path
													id="a"
													fill="#ffde00"
													d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
												/>
											</defs>
											<path fill="#de2910" d="M0 0h512v512H0z" />
											<use
												width={30}
												height={20}
												transform="matrix(76.8 0 0 76.8 128 128)"
												xlinkHref="#a"
											/>
											<use
												width={30}
												height={20}
												transform="rotate(-121 142.6 -47) scale(25.5827)"
												xlinkHref="#a"
											/>
											<use
												width={30}
												height={20}
												transform="rotate(-98.1 198 -82) scale(25.6)"
												xlinkHref="#a"
											/>
											<use
												width={30}
												height={20}
												transform="rotate(-74 272.4 -114) scale(25.6137)"
												xlinkHref="#a"
											/>
											<use
												width={30}
												height={20}
												transform="matrix(16 -19.968 19.968 16 256 230.4)"
												xlinkHref="#a"
											/>
										</svg>
										中文 (繁體)
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
	);
}
