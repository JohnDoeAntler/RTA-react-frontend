/** @format */

import React, { useRef } from "react";
import "./Card.css";
import { Grid } from "@material-ui/core";
import gsap, { Expo } from 'gsap';

interface ICardProps {

	upperText: string;

	imageUrl: string;

	lowerText: any;

	color?: string;

}

export const Card: React.FC<ICardProps> = (props) => {

	const border = useRef<HTMLDivElement>(null);
	const picture = useRef<HTMLDivElement>(null);
	const wrapper = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		gsap.to(
			wrapper.current,
			0.5,
			{
				x: 20,
				ease: Expo.easeOut,
			},
		);
	}

	const handleMouseLeave = () => {
		gsap.to(
			wrapper.current,
			0.5,
			{
				x: 0,
				ease: Expo.easeOut,
			}
		);
	}

	return (
		<div
			ref={wrapper}
			className="user-item-wrapper"
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
		>
			<Grid
				container
				wrap="nowrap"
			>
				<Grid item>
					<div className="user-item-border" ref={border} style={{
						backgroundColor: props.color || '#' +  Math.random().toString(16).substr(-6),
					}}></div>
				</Grid>

				<Grid item>
					<div className="user-item-img-wrapper" ref={picture}>
						<img
							className="user-item-img"
							src={props.imageUrl}
							alt=""
						/>
					</div>
				</Grid>

				<Grid item>
					<div className="user-item-info">
						<div className="user-item-name">
							{props.upperText}
						</div>

						<hr/>

						<div style={{
							color: 'white'
						}}>
							joined at: {props.lowerText}
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
