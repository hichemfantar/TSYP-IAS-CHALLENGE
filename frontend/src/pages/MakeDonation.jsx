import { useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const MakeDonation = () => {
	const { dispatch } = useDonationsContext();
	const { user } = useAuthContext();

	const [note, setNote] = useState("");
	const [amount, setAmount] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const donation = { note, amount };

		const response = await fetch("/api/donations", {
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
			toast.success("Donation successful");
			setNote("");
			setAmount(0);
			setError(null);
			setEmptyFields([]);
			// dispatch({ type: "CREATE_DONATION", payload: json });
		}
	};

	return (
		<div className="grid grid-cols-12 justify-center items-center md:min-h-[900px]">
			<div className="col-span-12 lg:col-span-6 p-10 h-full">
				<img
					src="https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="rounded-xl h-44 lg:h-[800px] object-contain mx-auto"
				/>
			</div>

			<div className="h-full col-span-12 lg:col-span-6 flex flex-col justify-center items-center py-8 px-6 mx-auto w-full bg-white dark:bg-gray-800">
				<div className="p-6 w-full sm:p-8 lg:p-10">
					<h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
						Make a donation
					</h1>
					<p className="mb-3 text-gray-500 dark:text-gray-400">
						Make someone happy.
					</p>
					<form className="mt-8" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Choose an amount
							</label>
							<input
								type="number"
								onChange={(e) => setAmount(e.target.value)}
								value={amount}
								required
								name="amount"
								id="amount"
								placeholder="200"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Leave a nice note
							</label>
							<input
								type="text"
								onChange={(e) => setNote(e.target.value)}
								value={note}
								required
								name="note"
								id="note"
								placeholder="There's someone looking out for you"
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

export default MakeDonation;
