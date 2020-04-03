/** @format */

import React from "react";
import { TweenLite, Expo } from 'gsap';

export interface IFluidImageProps {
	src: string;
	width?: string;
	height?: string;
}

export const FluidImage: React.FC<IFluidImageProps> = (props) => {
	const style: React.CSSProperties = {
		width: props.width || "100%",
		height: props.height || "15rem",
		borderRadius: ".5rem",
		overflow: "hidden",
	};

	const imgStyle: React.CSSProperties = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};

	return (
		<div style={style}>
			<img src={props.src} alt="Hello world." style={imgStyle}
			onMouseMove={(e) => {
				TweenLite.to(
					e.target,
					1,
					{
						transform: `scale(1.1, 1.1) translate(${Math.round((e.clientX - document.documentElement.clientWidth / 2) / 30)}px, ${Math.round((e.clientY - document.documentElement.clientHeight / 2) / 330)}px)`,
						ease: Expo.easeOut,
					}
				);
			}}
			onClick={(e) => {
				TweenLite.to(
					e.target,
					1,
					{
						transform: `scale(1.2, 1.2) translate(${Math.round((e.clientX - document.documentElement.clientWidth / 2) / 30)}px, ${Math.round((e.clientY - document.documentElement.clientHeight / 2) / 330)}px)`,
						ease: Expo.easeOut,
					}
				)
			}}
			onMouseLeave={(e) => {
				TweenLite.to(
					e.target,
					1,
					{
						transform: "scale(1, 1) translate(0, 0)",
						ease: Expo.easeOut,
					}
				);
			}}
			/>
		</div>
	);
};
