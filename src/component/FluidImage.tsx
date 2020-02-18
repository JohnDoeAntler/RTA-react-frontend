/** @format */

import React from "react";

export interface IFluidImageProps {
	src: string;
	width?: string;
	height?: string;
}

export const FluidImage: React.FC<IFluidImageProps> = (props) => {
	const style: React.CSSProperties = {
		width: props.width || "100%",
		height: props.height || "15rem",
		objectFit: "cover",
		borderRadius: ".5rem",
	};

	return <img src={props.src} alt="Hello world." style={style} />;
};
