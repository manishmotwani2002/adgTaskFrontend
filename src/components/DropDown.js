import React from 'react';

export default function DropDown() {
	return (
		<div
			className="drop-down bg-white shadow-lg border w-40  items-center text-md text-gray-800"
			// onClick={closeDropdown}
		>
			<div className=" px-4 border-2 hover:bg-background hover:shadow-md border-white py-3">
				<button> Cancel Order</button>
			</div>
			<div className="px-4 border-2 border-white py-3 hover:bg-background hover:shadow-md">
				<button>Track Order</button>
			</div>
			<div className="px-4 border-2 border-white py-3 hover:bg-background hover:shadow-md">
				<button>View Details</button>
			</div>
		</div>
	);
}
