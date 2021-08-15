import React, { useState } from 'react';
import { isAuthenticated, signout } from '../apicalls/login';
import brandlogo from '../assets/brandlogo.png';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';

const Navbar = () => {
	// const closeButton = document.querySelectorAll('.modal-close');

	const [signin, setSignin] = useState(false);
	const [signup, setSignup] = useState(false);

	window.onclick = function (event) {
		let modal = document.querySelector('.main-modal');

		if (event.target == modal) {
			setSignup(false);
			setSignin(false);
		}
	};

	return (
		<div className=" rounded-b-3xl border-b-4 bg-white">
			<nav class="flex items-center justify-between flex-wrap m-auto px-12 py-2">
				<div class="flex items-center flex-grow">
					<img src={brandlogo} alt="logo" />
				</div>

				<div class=" flex justify-evenly items-center gap-10 text-sm text-gray-800 ">
					<div class=" font-semibold ">
						<a href="#responsive-header">HV Shop</a>
					</div>
					<div class=" font-semibold ">
						<a href="#responsive-header">HV Prime</a>
					</div>
					<div class=" font-semibold ">
						<a href="#responsive-header">HV Activ</a>
					</div>
					<div class=" font-semibold">
						<a href="#responsive-header">Explore</a>
					</div>
					{!localStorage.getItem('token') && (
						<div>
							<button
								className=""
								onClick={() => {
									setSignin(true);
								}}>
								<a class=" bg-gray-800 px-4 py-1 text-white border-gray-800 rounded-full">
									Sign In
								</a>
							</button>
						</div>
					)}
					{localStorage.getItem('token') && (
						<div>
							<button
								onClick={() => {
									signout();
								}}>
								<a class=" bg-gray-800 px-4 py-1 text-white border-gray-800 rounded-full">
									Sign Out
								</a>
							</button>
						</div>
					)}
				</div>
			</nav>

			{signin && (
				<Signin stateChangerSignin={setSignin} stateChangerSignup={setSignup} />
			)}
			{signup && (
				<Signup stateChangerSignin={setSignin} stateChangerSignup={setSignup} />
			)}
		</div>
	);
};

export default Navbar;
