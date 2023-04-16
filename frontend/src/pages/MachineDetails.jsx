import { useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { shopsData, shopsDataa } from "./Shops";

const MachineDetails = () => {
	const { dispatch } = useDonationsContext();
	const { user } = useAuthContext();
	const navigate = useNavigate();

	const { id } = useParams();

	const shop = shopsDataa.find((e) => e.name === id);

	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const [meetReq, setMeetReq] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		toast.success("Meeting requested");
		return;
		if (!user) {
			setError("You must be logged in");
			return;
		}

		const donation = { address, title, contactNumber };

		const response = await fetch("/api/shops", {
			method: "POST",
			body: JSON.stringify(donation),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			toast.success("Shop added successfully");
			setAddress("");
			setTitle(0);
			setError(null);
			setEmptyFields([]);
			// dispatch({ type: "CREATE_DONATION", payload: json });
		}
	};

	return (
		<div className="grid grid-cols-12 justify-center items-center md:min-h-[600px]">
			<div className="col-span-12 lg:col-span-6 p-10 h-full">
				<img
					src={shop.pic}
					alt=""
					className="rounded-xl h-44 lg:h-[600px] object-cover mx-auto"
				/>
			</div>

			<div className="h-full col-span-12 lg:col-span-6 flex flex-col justify-start items-start py-8 px-6 mx-auto w-full bg-white dark:bg-gray-800">
				<div className="p-6 w-full sm:p-8 lg:p-10">
					<h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
						{shop.name}
					</h1>
					<form className="mt-8" onSubmit={handleSubmit} noValidate>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Machine type:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								Semiconductor
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Status:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								Optimal
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Downtime:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								2.5 hours
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Temperature:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								80C
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Energy usage:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								1600Wh
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Noise level:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								25dBa
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Last maintenance:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								23/08/2022
							</span>
						</div>
						<div className="mb-2">
							<span className=" text-sm font-medium text-gray-900 dark:text-white">
								Next maintenance schedule:
							</span>{" "}
							<span className=" text-sm font-base text-gray-900 dark:text-white">
								10/02/2023
							</span>
						</div>

						{meetReq ? (
							<button
								onClick={() => navigate("/meeting")}
								className="mt-6 w-full text-white font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center mb-6 bg-green-700"
								type="submit"
							>
								<span className="flex justify-center items-center">
									Go to meet
								</span>
							</button>
						) : (
							<button
								onClick={() => setMeetReq(true)}
								className="mt-6 w-full text-white font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center mb-6 bg-blue-700"
								type="submit"
							>
								<span className="flex justify-center items-center">
									Request meet
								</span>
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default MachineDetails;
