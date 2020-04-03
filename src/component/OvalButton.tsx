/** @format */

import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OvalButton.css";

export interface IOvalButtonProps {
	to: string;

	text: string;

	icon: string;
}

export const OvalButton: React.FC<IOvalButtonProps> = (props) => {
	const button = useRef<HTMLDivElement>(null);

	const icon = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: icon.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/animations/oval_button.json",
			assetsPath: `/animations/images/oval_button/${props.icon}/`,
		});

		anim.addEventListener("data_ready", () => {
			anim.goToAndStop(59, true);
		});

		button.current?.addEventListener("mouseenter", () => {
			anim.playSegments([60, 119], true);
		});

		button.current?.addEventListener("mouseleave", () => {
			anim.playSegments([120, 179], true);
		});

		return () => {
			anim.destroy();
		};
	}, [props.icon]);

	return (
		<Link to={props.to}>
			<div ref={button} className="oval-button">
				<div ref={icon} className="oval-button-lottie"></div>
				<div className="oval-button-text">{props.text}</div>
			</div>
		</Link>
	);
};
