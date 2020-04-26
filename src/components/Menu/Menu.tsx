/** @format */

import React, { useEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import "./Menu.css";
import { BackgroundGrid } from "../BackgroundGrid/BackgroundGrid";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IMenuProps {
	isOpen: boolean;
}

export const Menu: React.FC<IMenuProps> = (props) => {
	const menu = useRef<HTMLDivElement>(null);
	const black = useRef<HTMLDivElement>(null);
	const innerMenu = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.to(black.current, 1, {
			x: props.isOpen ? 0 : "-100%",
			ease: Expo.easeOut,
			delay: props.isOpen ? 0 : 0.1,
			skewX: props.isOpen ? "1rem" : 0,
		});

		gsap.to(menu.current, 1, {
			x: props.isOpen ? 0 : "-100%",
			ease: Expo.easeOut,
			delay: props.isOpen ? 0.1 : 0,
		});

		gsap.to(innerMenu.current, 1, {
			x: props.isOpen ? "0" : "80%",
			ease: Expo.easeOut,
			delay: props.isOpen ? 0.1 : 0,
			pointerEvents: props.isOpen ? "all" : "none",
		});
	}, [props.isOpen]);

	return (
		<>
			<div ref={black} className="black"></div>
			<div ref={menu} className="menu">
				<div ref={innerMenu} className="inner-menu">
					<Grid
						container
						direction="column"
						justify="center"
						style={{
							height: "100vh",
						}}>
						<Grid item>
							<div className="menu-container">
								<div
									style={{
										fontFamily: "Poppins",
									}}>
									- MENU OPTIONS -
								</div>

								<hr/>

								<Grid container className="menu-option-container" direction="column">
									<Grid item>
										<Link to="/">
											<MenuOption text="home"/>
										</Link>
									</Grid>
									<Grid item>
										<Link to="/users">
											<MenuOption text="users"/>
										</Link>
									</Grid>
									<Grid item>
										<Link to="/works">
											<MenuOption text="works"/>
										</Link>
									</Grid>
									<Grid item>
										<Link to="/followings">
											<MenuOption text="followings"/>
										</Link>
									</Grid>
									<Grid item>
										<Link to="/favourites">
											<MenuOption text="favourites"/>
										</Link>
									</Grid>
								</Grid>
							</div>
						</Grid>
					</Grid>
				</div>
				<BackgroundGrid />
			</div>
		</>
	);
};

interface IMenuOptionProps {

	text: string;

	onHover?: () => void;

}

export const MenuOption: React.FC<IMenuOptionProps> = (props) => {

	const el = useRef<HTMLDivElement>(null);

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		gsap.to(
			el.current,
			0.5,
			{
				x: '1rem',
				skewX: '1rem',
				ease: Expo.easeOut,
				opacity: .6,
			}
		)
	}

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		gsap.to(
			el.current,
			0.5,
			{
				x: '0',
				skewX: '0',
				ease: Expo.easeOut,
				opacity: 1,
			}
		)
	}

	return (
		<div
			ref={el}
			className="menu-option"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{
				props.text
			}
		</div>
	);
}