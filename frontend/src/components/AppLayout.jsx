import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

export default function AppLayout({ children }) {
	const { user } = useAuthContext();

	return (
		<div className="">
			{/* {user && ( */}
			<div className="hidden lg:fixed lg:top-0 lg:block h-screen overflow-auto w-64 ">
				<SideNav />
			</div>
			{/* )} */}

			<div>
				<div className={`${user ? "lg:ml-64" : "lg:ml-64"} `}>
					<Navbar />

					{children}
				</div>
			</div>
		</div>
	);
}
