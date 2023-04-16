import { useState } from "react";
import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { shopsData, shopsDataa } from "./Shops";

const MeetDetails = () => {
	const { dispatch } = useDonationsContext();
	const { user } = useAuthContext();
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
		<div className="grid grid-cols-12 justify-center items-center h-[30vh] pt-10">
			<div className="col-span-12 lg:col-span-4 p-10 bg-gray-50 h-full flex-col justify-center items-center">
				<img
					src={
						"https://www.itron.com/-/media/project/itroncom/sitelogo.png?h=40&w=100&hash=28730920D72E64AE65EA2DCFB8CA2D07"
					}
					alt=""
					className="h-20 object-contain mx-auto"
				/>
			</div>

			<div className="text-xl  text-center h-full col-span-12 lg:col-span-4 flex flex-col justify-center items-center py-8 px-6 mx-auto w-full bg-gray-50 dark:bg-gray-800">
				<div>
					Meeting date:{" "}
					<span className="text-xl font-medium mt-2">28/06/2023</span>
				</div>
				<div>
					Duration: <span className="text-xl font-medium mt-2"> 2 hours</span>
				</div>
			</div>
			<div className="bg-gray-50 h-full col-span-12 lg:col-span-4 flex flex-col justify-start items-start py-8 px-6 mx-auto w-full bg-gray-50 dark:bg-gray-800">
				<img
					src={
						"https://1000logos.net/wp-content/uploads/2021/11/Siemens-logo.png"
					}
					alt=""
					className="h-20 object-cover mx-auto"
				/>
			</div>
		</div>
	);
};

export default MeetDetails;
