import React from 'react';

const RecommendationCard = ({
	image = 'pdf',
	title = 'September Report',
	date = 'September, 19',
	description = 'September_analysis',
}) => {
	return (
		<div>
			<div className="bg-white rounded-lg flex gap-6 items-center p-5 flex-wrap shadow-lg">
				<div>
					<img
						className=""
						src={require(`../assets/${image}.svg`).default}
						alt="Pdf icon"
					/>
				</div>
				<div className=" text-sm tracking-wide flex flex-col gap-1 ">
					<p>{title}</p>
					<p className="text-gray-400">{date}</p>
					<p className="text-xs text-secondary">{description}</p>
				</div>
				<div className="ml-20">
					<img src={require('../assets/menu.svg').default} alt="Menu" />
				</div>
			</div>
		</div>
	);
};

export default RecommendationCard;
