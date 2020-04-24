import React, { useRef } from 'react';
import gsap, { Expo } from "gsap";
import './UnderLineText.css';

interface IUnderLineTextProps {

	color?: string;

}

export const UnderLineText: React.FC<IUnderLineTextProps> = (props) => {

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
			className="underline-text-wrapper"
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}
		>
			{props.children}
			<div
				className="underline-text-line"
				ref={line}
				style={{
					...(props.color && {
						borderBottomColor: props.color,
					}),
				}}
			></div>
		</div>
	);
};