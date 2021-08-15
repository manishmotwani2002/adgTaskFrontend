import React, { useState } from 'react';
import searchIcon from './assets/searchIcon.png';
import profileImg from './assets/profileImg.png';
import profileBadge from './assets/profileBadge.png';
import dashboardicon1 from './assets/dashboardicon1.png';
import dashboardicon2 from './assets/dashboardicon2.png';
import Recommendation from './components/Recommendation';
import Navbar from './components/Navbar';

export default function HomeBase({ children }) {
	return (
		<div className="bg-background">
			<Navbar />
			{/*profile */}

			{localStorage.getItem('token') && (
				<div
					class="bg-blue-100 text-center border-t border-b mx-auto border-primary text-secondary px-4 py-3"
					role="alert">
					<p class="font-bold">Welcome {localStorage.getItem('email')}</p>
					<p class="text-sm">
						You are now Logged In! Browse Website for Amazing Products.
					</p>
				</div>
			)}

			<div className="container">
				<div className="flex justify-between items-start my-12">
					<div className="text-2xl text-secondary">
						<span className=" font-bold">Abhinav's</span>
						<span className=" font-medium bg-blue-50"> Profile</span>
					</div>
					<div class="inline-flex items-center">
						<span class="relative left-8 z-10">
							<img src={searchIcon} alt="searchIcon" />
						</span>
						<input
							placeholder="Search..."
							type="text"
							class="pl-12 py-3 relative rounded-2xl text-sm focus:shadow outline-none"
						/>
					</div>
				</div>

				<div className="flex text-gray-800 gap-16">
					<div className="h-0">
						<div>
							<img src={profileImg} alt="" />
						</div>
						<img src={profileBadge} alt="" className="relative bottom-14 left-28" />
					</div>
					<div className="flex-grow flex items-start justify-between py-4 px-10 bg-white border-0 rounded-md">
						<div className="flex flex-col gap-4 ">
							<h1 className="font-medium">Hi Abhinav Mahajan</h1>
							<p className="text-sm">
								You have been recommended over
								<span className="font-semibold text-xl text-blue-800"> 322</span>{' '}
								Products This Month
							</p>
							<button className="rounded-3xl text-secondary inline-flex w-44 py-2 text-sm items-center bg-white shadow-md border-2 border-opacity-100 border-gray-400 px-4">
								<svg
									width="20"
									height="20"
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
								<span className="ml-6 uppercase"> Connected</span>
							</button>
						</div>
						<div className="flex gap-6 items-center">
							<button className="bg-primary uppercase rounded-3xl py-3 px-6 text-white text-sm">
								Switch Profile
							</button>
							<div className="flex flex-col gap-3">
								<img src={dashboardicon1} alt="" />
								<img src={dashboardicon2} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>{children}</div>

			<Recommendation />
		</div>
	);
}
