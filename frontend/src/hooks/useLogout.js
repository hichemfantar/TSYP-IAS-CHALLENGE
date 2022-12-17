import { useAuthContext } from "./useAuthContext";
import { useDonationsContext } from "./useDonationsContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: dispatchDonations } = useDonationsContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem("user");

		// dispatch logout action
		dispatch({ type: "LOGOUT" });
		dispatchDonations({ type: "SET_DONATIONS", payload: null });
	};

	return { logout };
};
