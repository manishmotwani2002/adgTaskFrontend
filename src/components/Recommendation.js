import React from 'react';
import RecommendationCard from './RecommendationCard';

const Recommendation = () => {
	return (
		<div className="container pb-40">
			<h1 className=" text-2xl font-bold tracking-wide text-secondary py-8 pl-2">
				Recommendation History
			</h1>
			<p className=" text-sm pb-6 pl-2">Download Report</p>

			<div className=" flex justify-between">
				<RecommendationCard
					image="pdf"
					title="September Report"
					date="September, 19"
					description="September_analysis"
				/>

				<RecommendationCard
					image="jpg"
					title="September Report"
					date="September, 19"
					description="September_analysis"
				/>
				<RecommendationCard
					image="pdf"
					title="October Report"
					date="October, 19"
					description="September_analysis"
				/>
			</div>
		</div>
	);
};

export default Recommendation;
