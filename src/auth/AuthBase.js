import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../Firebase';
import { signin } from '../apicalls/login';
import { signup } from '../apicalls/register';

const AuthBase = ({
	title,
	authType,
	rightHeading,
	rightDescription,
	left,
	right,
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const googleAuth = async () => {
		var provider = new firebase.auth.GoogleAuthProvider();

		await firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				console.log('Result', result);
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// localStorage.setItem('token', token);

				// The signed-in user info.
				var user = result.user;
				console.log('User', user);
				console.log(user.email, 'and', user.bc.email);
				setEmail(user.email);
				setPassword(user.displayName);

				console.log('email', email, password);

				authentication(user.email, user.displayName);
				// ...
			});

		// setEmail
	};

	const authentication = (email, password) => {
		console.log('authemailis:', email);

		if (authType === 'Login') {
			signin({ email, password })
				.then((data) => {
					console.log(data);
					if (data.error) alert(data.error);
					// console.log(data.error);
					if (data.errors) {
						alert('signin failed!!');
						//handling errors
						console.log(data.errors);
					} else {
						localStorage.setItem('token', data.token);
						localStorage.setItem('email', data.user.email);

						// <Redirect to="/" />;
						window.location.reload();
					}
				})
				.catch((err) => {
					console.log(err);
					console.log('signin process failed!!');
				});
		} else {
			signup({ email, password })
				.then((data) => {
					console.log(data);
					if (data.error) alert(data.error);
					console.log('manish', data.errors);
					if (data.errors) {
						alert('signup failed!!');
						//handling errors
						console.log(data.errors);
					} else {
						console.log('manish');

						localStorage.setItem('token', data.token);
						localStorage.setItem('email', data.email);

						// <Redirect to="/" />;
						window.location.reload();
					}
				})
				.catch((err) => {
					console.log(err);
					console.log('signup process failed!!');
				});
		}
	};

	return (
		<div className="main-modal fixed inset-0 z-20 flex justify-center items-center h-screen bg-black bg-opacity-60 animated fadeIn faster ">
			<div className="grid grid-cols-2 border overflow-hidden rounded-3xl shadow-md text-gray-600 bg-white">
				<div className="bg-white flex-1 px-20 py-12">
					<h1 className="text-2xl font-heading mb-5">{title}</h1>

					<div className="flex flex-col mb-4">
						<label className="text-gray-400 text-sm">Email Address</label>

						<input
							type="text"
							className="rounded border-t-2 border border-gray-400 focus:outline-none focus:border-gray-700 px-2 py-3"
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-gray-400 text-sm">Password</label>

						<div class="relative flex w-full flex-wrap items-center  ">
							<input
								type="password"
								class="bg-gray-200  relative rounded text-sm shadow outline-none focus:outline-none w-full px-2 py-4"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
							<span class="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-4 py-4">
								<svg
									width="24"
									height="19"
									viewBox="0 0 24 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.8065 18.9508C20.5947 18.9511 20.3916 18.8678 20.2422 18.7193L2.67879 1.34788C2.38059 1.03743 2.38692 0.54847 2.69306 0.245676C2.9992 -0.0571175 3.49356 -0.0633777 3.80744 0.231565L21.3708 17.603C21.599 17.8288 21.6672 18.1683 21.5437 18.4633C21.4202 18.7582 21.1293 18.9506 20.8065 18.9508Z"
										fill="#9BA1B3"
									/>
									<path
										d="M12.0079 15.7922C9.93772 15.7922 7.94138 15.1862 6.07427 13.991C4.37431 12.9052 2.844 11.3502 1.64849 9.50004V9.49609C2.64342 8.08615 3.73315 6.89383 4.90371 5.93248C4.92512 5.91478 4.93806 5.88902 4.93938 5.86145C4.94071 5.83389 4.93031 5.80703 4.9107 5.78739L3.91677 4.80581C3.88014 4.76928 3.8213 4.76671 3.78155 4.79989C2.53814 5.83625 1.38404 7.10752 0.33473 8.59594C-0.0344984 9.12009 -0.0471123 9.8129 0.302797 10.3499C1.62055 12.3895 3.31652 14.1074 5.20658 15.317C7.33465 16.6806 9.62488 17.3715 12.0079 17.3715C13.2942 17.3675 14.5714 17.1579 15.79 16.7506C15.8227 16.7397 15.8474 16.7128 15.8552 16.6795C15.863 16.6463 15.8529 16.6114 15.8285 16.5873L14.7517 15.5223C14.7013 15.4736 14.6286 15.4549 14.5606 15.473C13.7267 15.6853 12.869 15.7926 12.0079 15.7922Z"
										fill="#9BA1B3"
									/>
									<path
										d="M23.7425 8.61675C22.4222 6.59732 20.7093 4.88189 18.7893 3.65553C16.6652 2.2974 14.3201 1.57935 12.0079 1.57935C10.7353 1.58158 9.47206 1.79562 8.27122 2.21251C8.23869 2.22371 8.2143 2.2507 8.20669 2.28392C8.19908 2.31714 8.20933 2.3519 8.2338 2.37587L9.30906 3.43937C9.36001 3.48891 9.43384 3.50773 9.50266 3.48872C10.3194 3.27019 11.1618 3.15918 12.0079 3.15857C14.0382 3.15857 16.0286 3.772 17.9231 4.98454C19.655 6.08999 21.2033 7.64355 22.4018 9.47545C22.4036 9.47777 22.4036 9.48103 22.4018 9.48335C21.5318 10.838 20.4522 12.0492 19.2024 13.0726C19.1808 13.0903 19.1677 13.1161 19.1662 13.1438C19.1648 13.1715 19.1752 13.1985 19.195 13.2182L20.1879 14.1998C20.2243 14.2362 20.2828 14.2389 20.3226 14.2062C21.6568 13.0951 22.8118 11.789 23.7475 10.3332C24.0852 9.80926 24.0833 9.13872 23.7425 8.61675Z"
										fill="#9BA1B3"
									/>
									<path
										d="M12.0249 4.73779C11.6661 4.7376 11.3085 4.77733 10.9587 4.85624C10.9227 4.86363 10.8937 4.89 10.8833 4.92487C10.8728 4.95974 10.8826 4.99746 10.9088 5.02304L16.5266 10.5779C16.5524 10.6038 16.5906 10.6135 16.6258 10.6032C16.6611 10.5929 16.6877 10.5642 16.6952 10.5286C17.0192 9.12306 16.6785 7.64808 15.7696 6.5211C14.8607 5.39412 13.4825 4.73777 12.0249 4.73779Z"
										fill="#9BA1B3"
									/>
									<path
										d="M7.52327 8.37304C7.49741 8.34718 7.45927 8.33749 7.42401 8.34781C7.38876 8.35812 7.36209 8.38678 7.35462 8.42239C6.98679 10.0118 7.47114 11.6766 8.63682 12.8295C9.8025 13.9825 11.4857 14.4615 13.0927 14.0977C13.1287 14.0903 13.1576 14.0639 13.1681 14.0291C13.1785 13.9942 13.1687 13.9565 13.1426 13.9309L7.52327 8.37304Z"
										fill="#9BA1B3"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div className="flex flex-col">
						{authType == 'Login' && (
							<label className="text-blue-600">Forgot Password?</label>
						)}

						<button
							onClick={() => {
								authentication(email, password);
							}}
							className="bg-primary rounded-3xl w-56 h-12 text-white mt-10 mb-2 ">
							{authType}
						</button>
						<button
							className="rounded-3xl w-56 pl-4 h-12 my-2 inline-flex items-center shadow-lg text-sm"
							onClick={() => {
								googleAuth();
							}}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.9983 12.265C23.9983 11.2785 23.9166 10.5586 23.7398 9.81201H12.244V14.2647H18.9918C18.8558 15.3713 18.1212 17.0377 16.4886 18.1575L16.4657 18.3066L20.1005 21.0659L20.3523 21.0905C22.665 18.9974 23.9983 15.9178 23.9983 12.265Z"
									fill="#4285F4"
								/>
								<path
									d="M12.2441 23.9968C15.55 23.9968 18.3252 22.9303 20.3524 21.0906L16.4887 18.1576C15.4548 18.8641 14.0671 19.3574 12.2441 19.3574C9.00624 19.3574 6.25815 17.2644 5.27853 14.3715L5.13494 14.3834L1.35546 17.2497L1.30603 17.3843C3.31948 21.3038 7.45527 23.9968 12.2441 23.9968Z"
									fill="#34A853"
								/>
								<path
									d="M5.2785 14.3713C5.02002 13.6248 4.87043 12.8248 4.87043 11.9983C4.87043 11.1717 5.02002 10.3718 5.2649 9.62529L5.25806 9.46629L1.43121 6.55396L1.306 6.61232C0.476164 8.23879 0 10.0652 0 11.9983C0 13.9314 0.476164 15.7578 1.306 17.3842L5.2785 14.3713Z"
									fill="#FBBC05"
								/>
								<path
									d="M12.2441 4.63935C14.5432 4.63935 16.0941 5.61255 16.9784 6.42583L20.434 3.11959C18.3117 1.18651 15.55 0 12.2441 0C7.45527 0 3.31948 2.69296 1.30603 6.6124L5.26493 9.62538C6.25815 6.73243 9.00624 4.63935 12.2441 4.63935Z"
									fill="#EB4335"
								/>
							</svg>

							<span className="pl-4">{authType} With Google</span>
						</button>

						{left}
					</div>
				</div>
				<div className="flex-auto flex justify-evenly align-middle flex-col rounded-3xl overflow-hidden bg-gradient-to-tr from-white to-blue-200">
					{right}
					<div className="tracking-tighter">
						<div className="text-center text-xl pb-4 font-medium">{rightHeading}</div>
						<div className="text-center mx-10 text-sm">{rightDescription}</div>
						<img
							src={require('../assets/slider.svg').default}
							alt="Slider"
							className="pt-4 mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthBase;
