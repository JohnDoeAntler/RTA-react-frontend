import { Expo, TweenLite } from 'gsap';
import React, { useEffect } from 'react';

interface IPageTransitionProps {
};

export const PageTransition: React.FC<IPageTransitionProps> = (props) => {

	useEffect(() => {
		TweenLite.fromTo(
			".transition-circle",
			1,
			{
				height: "50vmax",
				width: "50vmax",
				opacity: 1,
				ease: Expo.easeOut,
				delay: 0.05,
			}, {
				height: "275vh",
				width: "275vh",
				opacity: 0,
				ease: Expo.easeOut,
				delay: 0.05,
			}
		);
	});

	return (
		<div
			className="transition-circle"
			style={{
			position: "fixed",
			top: "200%",
			left: "50%",
			height: "25px",
			width: "25px",
			backgroundColor: "#303030",
			borderRadius: "50%",
			transform: "translate(-50%, -50%)",
			zIndex: -1000,
		}}>
		</div>
	);
};