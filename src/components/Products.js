import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

export default function Products() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div>
			<div className="py-16 px-10  border-0 rounded-3xl container bg-white animated fadeIn faster">
				<div className="p-4 bg-background">
					<Carousel
						responsive={responsive}
						renderButtonGroupOutside={true}
						className="flex ">
						<ProductCard
							title="Gold Standard Whey ( 500gm )"
							suggestion="Suggested for You"
							price="1500"
							weight="500gm"
							description="100% Grass-Fed Whey Protien: Helps Repair and build Muscle & Support weight-loss"
							image="1"
							colors="text-primary"
							background="bg-green-50"
							border="border-secondary"
						/>
						<ProductCard
							title="Protein Peanut Butter ( 250gm )"
							suggestion="Can't Recommend"
							price="900"
							weight="250gm"
							description="100% Grass-Fed Whey Protien: Helps Repair and build Muscle & Support weight-loss"
							image="2"
							colors="text-gray-400"
							background="bg-gray-300"
							border="border-white"
						/>
						<ProductCard
							title="Alpino Peanut Butter ( 1000gm )"
							suggestion="Mildly Suggested"
							price="1500"
							weight="500gm"
							description="100% Grass-Fed Whey Protien: Helps Repair and build Muscle & Support weight-loss"
							image="3"
							colors="text-yellow-300"
							background="bg-yellow-100"
							border="border-yellow-300"
						/>
						<ProductCard
							title="Gold Standard Whey ( 500gm )"
							suggestion="Suggested for You"
							price="1500"
							weight="500gm"
							description="100% Grass-Fed Whey Protien: Helps Repair and build Muscle & Support weight-loss"
							image="1"
							colors="text-primary"
							background="bg-green-50"
							border="border-secondary"
						/>
					</Carousel>
				</div>

				<div className="mt-12 flex justify-between">
					<div className="flex flex-col">
						<div className="flex gap-2 items-center mb-8">
							<div className=" text-2xl tracking-wide text-secondary font-semibold">
								Consultation Calls
							</div>
							<div>
								<img src={require('../assets/phone.svg').default} alt="Phone" />
							</div>
						</div>

						{/* card */}
						<div className="rounded-xl bg-primary text-gray-100 relative p-4">
							<div className="flex flex-col gap-4">
								<div className="flex justify-between relative">
									<img src={require('../assets/doctor.png').default} alt="Doctor" />
								</div>
								<button className="absolute right-4 text-sm rounded-full px-3 text-gray-600 bg-gray-200">
									11.30 am
								</button>
								<div className=" float-right">
									<div className="pl-20">Dr Renuka Shanker</div>
									<div className="pl-24 text-sm">24 Feburary 2021</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src={require('../assets/man.svg').default} alt="Man" />
					</div>
				</div>
			</div>
		</div>
	);
}
