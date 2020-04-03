/** @format */

import React, { useEffect } from "react";
import { TweenLite, Expo } from "gsap";

interface IUserListPageAnimatorProps {}

export const UserListItemAnimator = () => {
	TweenLite.fromTo(
		".user-list-item",
		1,
		{
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.2,
			ease: Expo.easeOut,
		},
		{
			marginTop: "0px",
			opacity: 1,
			stagger: 0.2,
			ease: Expo.easeOut,
		},
	);
};

export const UserListPageAnimator: React.FC<IUserListPageAnimatorProps> = (props) => {
	useEffect(() => {
		TweenLite.from(".panel *", 1, {
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.02,
			ease: Expo.easeOut,
		});
	}, []);

	return <></>;
};
