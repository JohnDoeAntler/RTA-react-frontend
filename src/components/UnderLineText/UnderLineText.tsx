import React, { useRef } from 'react';
import gsap, { Expo } from "gsap";

export const UnderLineText: React.FC = (props) => {

	const line = useRef<HTMLDivElement>(null);

	const handleMouseOver = () => {
		gsap.to(
			line.current,
			0.5,
			{
				x: 0,
				ease: Expo.easeOut,
			}
		);
	};

	const handleMouseOut = () => {
		gsap.to(
			line.current,
			0.5,
			{
				x: "-105%",
				ease: Expo.easeOut,
			}
		);
	};

	return (
		<div
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}
			style={{
				overflow: "hidden"
			}}
		>
			{props.children}
			<div
				ref={line}
				style={{
					borderBottom: "2px solid var(--text-color)",
					transform: "translateX(-105%)"
				}}
			></div>
		</div>
	);
};