/** @format */

import React, { useEffect } from "react";
import { TweenLite, Expo } from "gsap";

interface IPageAnimatorProps {}

export const PageAnimator: React.FC<IPageAnimatorProps> = (props) => {
	useEffect(() => {
		TweenLite.from(".panel *", 1, {
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.01,
			ease: Expo.easeOut,
		});
	}, []);

	return <></>;
};
