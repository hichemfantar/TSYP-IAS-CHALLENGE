import { useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const CreateShop = () => {
	const { dispatch } = useDonationsContext();
	const { user } = useAuthContext();

	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		toast.success("Device added successfully");
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
		<div className="grid grid-cols-12 justify-center items-center md:min-h-[900px]">
			<div className="col-span-12 lg:col-span-6 p-10 h-full">
				<img
					src="https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2148994133.jpg?w=360&t=st=1671299515~exp=1671300115~hmac=e4b4b68fa4599bc66c5f54333a54feb881658e28e550e5fc439b1abd87cf1afc"
					alt=""
					className="rounded-xl h-44 lg:h-[800px] object-contain mx-auto"
				/>
			</div>

			<div className="h-full col-span-12 lg:col-span-6 flex flex-col justify-center items-center py-8 px-6 mx-auto w-full bg-white dark:bg-gray-800">
				<div className="p-6 w-full sm:p-8 lg:p-10">
					<h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
						Add a device to your home
					</h1>
					<form className="mt-8" onSubmit={handleSubmit} noValidate>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Device name
							</label>
							<input
								type="text"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								required
								name="title"
								id="name"
								placeholder="Router"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>

						<button
							className="text-white font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center mb-6 bg-blue-700"
							type="submit"
						>
							<span className="flex justify-center items-center">Submit</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateShop;
