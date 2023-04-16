import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import Shops from "./pages/Shops";
import Donations from "./pages/Donations";
import MakeDonation from "./pages/MakeDonation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateShop from "./pages/CreateShop";
import Associations from "./pages/Associations";
import CreateAssociation from "./pages/CreateAssociation";
import Rooms from "./pages/Rooms";
import CreateRoom from "./pages/CreateRoom";
import MachineDetails from "./pages/MachineDetails";
import MeetDetails from "./pages/MeetDetails";

function App() {
	const { user } = useAuthContext();

	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
				<main className="bg-gray-50 dark:bg-gray-900">
					<AppLayout>
						<Routes>
							<Route path="/" element={<Home />} />
							{/* <Route
								path="/"
								element={user ? <Home /> : <Navigate to="/login" />}
							/> */}
							<Route
								path="/devices"
								element={<Shops />}
								// element={user ? <Shops /> : <Navigate to="/login" />}
							/>
							<Route
								path="/rooms"
								element={<Rooms />}
								// element={user ? <Shops /> : <Navigate to="/login" />}
							/>
							<Route
								path="/associations"
								element={user ? <Associations /> : <Donations />}
							/>
							<Route
								path="/my-donations"
								element={user ? <Donations /> : <Donations />}
							/>
							<Route
								path="/make-donation"
								element={user ? <MakeDonation /> : <MakeDonation />}
							/>
							<Route
								path="/add-device"
								element={user ? <CreateShop /> : <CreateShop />}
							/>
							<Route
								path="/meeting"
								element={user ? <MeetDetails /> : <MeetDetails />}
							/>
							<Route path="/machines/:id" element={<MachineDetails />} />
							<Route
								path="/add-room"
								element={user ? <CreateRoom /> : <CreateRoom />}
							/>
							<Route
								path="/add-association"
								element={user ? <CreateAssociation /> : <CreateAssociation />}
							/>
							<Route
								path="/login"
								element={!user ? <Login /> : <Navigate to="/" />}
							/>
							<Route
								path="/signup"
								element={!user ? <Signup /> : <Navigate to="/" />}
							/>
						</Routes>
					</AppLayout>
				</main>
				<ToastContainer />
			</div>
		</BrowserRouter>
	);
}

export default App;
