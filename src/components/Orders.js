import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';

const Orders = ({
	title = 'Gold Standard Whey',
	image = '1',
	orderNo = '#0010235',
	name = 'AM',
	place = 'Patiala Punjab',
	price = '$4.2',
	quantity = 'x2',
	status = 'DELIVERED',
	statusColor = 'text-green-500',
}) => {
	var display = false;

	const [dropmenu, setDropmenu] = useState(false);

	const handleState = () => {
		setDropmenu(!display);
		console.log(dropmenu);
	};

	// useEffect(() => {
	// 	setDropmenu(!display);
	// }, [dropmenu]);

	return (
		<div className="container border-0 rounded-3xl bg-white pb-10">
			<div className="flex flex-wrap items-center justify-between px-4 border-b-2 hover:shadow-lg ">
				<div className=" inline-flex gap-8">
					<img src={require(`../assets/prod${image}.svg`).default} alt="Product" />

					<div className="flex flex-col justify-around">
						<h1 className="text-md text-black  font-semibold">{title}</h1>
						<p className="text-green-500 ">{orderNo}</p>
					</div>
				</div>
				<div className="">
					<h1 className="text-md text-black mb-4 font-semibold">{name}</h1>
					<p className="break-words text-md text-gray-800">{place}</p>
				</div>
				<div className=" text-black text-xl font-semibold flex gap-8">
					<span>{price}</span>
					<span className=" text-gray-500 text-xl ">{quantity}</span>
				</div>
				<div className="relative flex">
					<button
						onClick={() => {
							handleState();
						}}
						className={`border-2 ${statusColor} px-4 py-2 font-medium mr-6 `}>
						{status}
					</button>
					{dropmenu && (
						<div className="absolute -inset-x-10 inset-y-4  z-20">
							<div
								className=""
								onClick={() => {
									setDropmenu(false);
								}}>
								<DropDown />
							</div>
						</div>
					)}

					<img src={require('../assets/menu.svg').default} alt="Menu" className="" />
				</div>
			</div>
		</div>
	);
};

export default Orders;
