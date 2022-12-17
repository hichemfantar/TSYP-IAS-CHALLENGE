import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password);
	};

	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 flex flex-col justify-center items-center py-8 px-6 mx-auto md:min-h-screen">
				<a
					className="flex justify-center items-center mb-8 text-3xl font-semibold lg:mb-10 dark:text-white"
					href="/"
				>
					{/* <img/> */}
					<span className="ml-3">IAS</span>
				</a>
				<div className="justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-sm xl:p-0 dark:bg-gray-800">
					<div className="p-6 w-full sm:p-8 lg:p-10">
						<h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
							Create an account
						</h1>
						<p className="mb-3 text-gray-500 dark:text-gray-400">
							Join our community of philanthropy.
						</p>
						<form className="mt-8" onSubmit={handleSubmit}>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									required
									name="email"
									id="email"
									placeholder="name@company.com"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your password
								</label>
								<input
									type="password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									required
									name="password"
									id="password"
									placeholder=""
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="flex items-start mb-6">
								<div className="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										name="remember"
										type="checkbox"
										className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="remember"
										className="font-medium text-gray-900 dark:text-white"
									>
										I accept the Terms and Conditions
									</label>
								</div>
							</div>

							<button
								className="text-white font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center mb-6 bg-blue-700"
								type="submit"
								disabled={isLoading}
							>
								<span className="flex justify-center items-center">
									Create account
								</span>
							</button>
							{error && (
								<div className="text-start block mb-2 text-sm font-medium text-red-600 dark:text-red-500">
									{error}
								</div>
							)}

							<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Already have an account?
								<Link
									className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
									to="/login"
								>
									Login here.
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
