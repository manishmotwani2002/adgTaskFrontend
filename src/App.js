import React, { useState } from 'react';

import OrdersList from './components/OrdersList';
import Products from './components/Products';
import HomeBase from './HomeBase';

export default function App() {
	const [history, setHistory] = useState(true);
	const [orders, setOrders] = useState(false);

	return (
		<div className="font-body">
			<div>
				<HomeBase>
					<div className=" container justify-between flex text-gray-500 ">
						<div className="flex gap-16 mt-28 mb-10">
							<div>
								<button
									onClick={() => {
										setHistory(true);
										setOrders(false);
									}}>
									{history ? (
										<div className="text-blue-800">
											<span>History</span>
											<center>
												<img
													className="jusitfy-center"
													src={require('./assets/oval.svg').default}
													alt=""
												/>
											</center>
										</div>
									) : (
										<span>History</span>
									)}
								</button>
							</div>
							<div>
								<button
									onClick={() => {
										setHistory(false);
										setOrders(true);
									}}>
									{orders ? (
										<div className="text-blue-800">
											<span>Orders</span>
											<center>
												<img
													className="jusitfy-center"
													src={require('./assets/oval.svg').default}
													alt=""
												/>
											</center>
										</div>
									) : (
										<span>Orders</span>
									)}
								</button>
							</div>
							<div>
								<button>Payment</button>
							</div>
						</div>
					</div>

					{history && <Products />}
					{orders && <OrdersList />}
				</HomeBase>
			</div>
			{/* <Signup /> */}
		</div>
	);
}
