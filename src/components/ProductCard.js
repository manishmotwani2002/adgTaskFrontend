import React from 'react';

const ProductCard = ({
	title,
	suggestion,
	price,
	weight,
	description,
	image,
	colors,
	background,
	border,
}) => {
	return (
		<div>
			<div
				className={` rounded-xl p-4 mr-6 grid grid-cols-12 border ${border} text-gray-600 bg-white`}>
				<div className="flex flex-col gap-3 col-span-8">
					<p className=" font-semibold">{title}</p>
					<span
						className={` text-center ${colors} rounded-md ${background}  font-semibold text-sm inline py-1`}>
						{suggestion}
					</span>
					<div className="flex gap-10">
						<div className="flex items-center gap-2">
							<img src={require('../assets/price.svg').default} alt="" />
							<span>{price}</span>
						</div>

						<div className="flex items-center gap-2">
							<img src={require('../assets/weight.svg').default} alt="" />
							<span>{weight}</span>
						</div>
					</div>
					<div className="text-xs">{description}</div>
				</div>
				<div className="col-span-4">
					<img src={require(`../assets/prod${image}.svg`).default} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
