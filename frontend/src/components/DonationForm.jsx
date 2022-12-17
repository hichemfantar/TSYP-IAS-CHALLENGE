import { useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const DonationForm = () => {
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
			setNote("");
			setAmount(0);
			setError(null);
			setEmptyFields([]);
			dispatch({ type: "CREATE_DONATION", payload: json });
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-6">
					<label
						htmlFor="note"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Note:
					</label>
					<input
						type="text"
						onChange={(e) => setNote(e.target.value)}
						value={note}
						name={"note"}
						// className={emptyFields.includes("note") ? "error" : ""}
						id="note"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Leave a note"
						required=""
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="amount"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Amount (in TND):
					</label>
					<input
						value={amount}
						required
						name={"amount"}
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						id="amount"
						placeholder="20"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						// className={emptyFields.includes("amount") ? "error" : ""}
					/>
				</div>

				{error && <div className="text-red-400">{error}</div>}

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Add Donation
				</button>
			</form>
		</>
	);
};

export default DonationForm;
