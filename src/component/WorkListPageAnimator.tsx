/** @format */

import React, { useEffect } from "react";
import { TweenLite, Expo } from "gsap";

interface IWorkListPageAnimatorProps {}

export const WorkListItemAnimator = () => {
	TweenLite.fromTo(
		".work-list-item",
		1,
		{
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.2,
			ease: Expo.easeOut,
		},
		{
			marginTop: "0px",
			opacity: 1.0,
			stagger: 0.2,
			ease: Expo.easeOut,
		},
	);
};

export const WorkListPageAnimator: React.FC<IWorkListPageAnimatorProps> = (props) => {
	useEffect(() => {
		TweenLite.from(".panel *:not(.work-list-item)", 1, {
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.02,
			ease: Expo.easeOut,
		});
	}, []);

	return <></>;
};
