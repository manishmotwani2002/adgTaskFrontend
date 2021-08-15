import React, { useState } from 'react';
import Orders from './Orders';

const OrdersList = () => {
	const [view, setView] = useState(false);

	return (
		<div className="bg-white container rounded-3xl animated fadeIn faster">
			<div className="flex justify-between px-4">
				<div className="mx-4 pt-14">
					<h1 className="text-black font-semibold text-xl pb-2">Your Orders</h1>
					<p className="pb-10 text-xs text-gray-500">See Your Orders</p>
				</div>
				<div className="inline-flex items-center">
					<button className="flex items-center gap-4 border-2 text-blue-800 px-4 py-2 font-medium mr-6">
						<span>Newest</span>
						<span>
							<img src={require('../assets/downMenu.svg').default} alt="" />
						</span>
					</button>
				</div>
			</div>

			<Orders
				title="Gold Standard Whey"
				image="1"
				orderNo="#0010235"
				name="AM"
				place="Patiala Punjab"
				price="$4.2"
				quantity="x2"
				status="DELIVERED"
				statusColor="text-green-500"
			/>
			<Orders
				title="Protein Peanut Butter"
				image="2"
				orderNo="#0010235"
				name="Jimmy Kueai"
				place="South Corner St. 4126 London"
				price="$7.4"
				quantity="x3"
				status="DELIVERED"
				statusColor="text-green-500"
			/>
			<Orders
				title="Alpino Peanut Butter"
				image="3"
				orderNo="#0010299"
				name="Cindy Alexa"
				place="Blue Ocean St. 41551 London"
				price="$8.2"
				quantity="x1"
				status="DELIVERED"
				statusColor="text-green-500"
			/>
			<center>
				{!view && (
					<button
						className="border-2 border-blue-700 text-blue-700 font-semibold p-2 px-10 rounded-3xl "
						onClick={() => {
							setView(true);
						}}>
						View More
					</button>
				)}
			</center>

			{view && (
				<div>
					<Orders
						title="Protein Peanut Butter"
						image="3"
						orderNo="#0010235"
						name="Jimmy Kueai"
						place="South Corner St. 4126 London"
						price="$7.4"
						quantity="x3"
						status="PENDING"
						statusColor="text-yellow-400"
					/>
					<Orders
						title="Protein Peanut Butter"
						image="3"
						orderNo="#0010235"
						name="Jimmy Kueai"
						place="South Corner St. 4126 London"
						price="$7.4"
						quantity="x3"
						status="PENDING"
						statusColor="text-yellow-400"
					/>
					<Orders
						title="Alpino Peanut Butter"
						image="3"
						orderNo="#0010299"
						name="Cindy Alexa"
						place="Blue Ocean St. 41551 London"
						price="$8.2"
						quantity="x1"
						status="DELIVERED"
						statusColor="text-green-500"
					/>
				</div>
			)}

			{/* Track Orders */}

			{!view && (
				<div className="container">
					<h1 className=" text-2xl font-semibold tracking-wide text-secondary py-8 pl-2">
						Track Orders
					</h1>
					<div className="flex justify-between">
						<div>
							<img src={require('../assets/trackOrder.svg').default} alt="" />
						</div>
						<div>
							<img
								className="pt-16"
								src={require('../assets/manTrack.svg').default}
								alt=""
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrdersList;
