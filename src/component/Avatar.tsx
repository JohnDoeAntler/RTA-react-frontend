import React from "react";

export interface IAvatarProps {
	size: number;
	src: string;
	alt: string;
}

export const Avatar: React.FC<IAvatarProps> = (props) => {

	const parentStyle: React.CSSProperties = {
		display: "inline-block",
		position: "relative",
		width: props.size,
		height: props.size,
	};

	const circleStyle: React.CSSProperties = {
		position: "absolute",
		borderRadius: "50%",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: props.size,
		height: props.size,
		border: `1px solid #303030`,
	};

	const imageStyle: React.CSSProperties = {
		position: "absolute",
		borderRadius: "50%",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		objectFit: "cover",
		width: props.size - props.size / 30,
		height: props.size - props.size / 30,
	};

	return (
		<span style={parentStyle}>
			<div style={circleStyle}></div>
			<img
				src={props.src}
				style={imageStyle}
				alt={props.alt}
			/>
		</span>
	);
};
