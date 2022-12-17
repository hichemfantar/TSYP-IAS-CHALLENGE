import { useDonationsContext } from "../hooks/useDonationsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DonationDetails = ({ donation }) => {
	const { dispatch } = useDonationsContext();
	const { user } = useAuthContext();

	const handleClick = async () => {
		if (!user) {
			return;
		}

		const response = await fetch("/api/donations/" + donation._id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_DONATION", payload: json });
		}
	};

	return (
		<div className="donation-details">
			<h4>{donation.note}</h4>
			<p>
				<strong>Amount (TND): </strong>
				{donation.amount}
			</p>
			<p>
				{formatDistanceToNow(new Date(donation.createdAt), { addSuffix: true })}
			</p>
			<span className="material-symbols-outlined" onClick={handleClick}>
				delete
			</span>
		</div>
	);
};

export default DonationDetails;
