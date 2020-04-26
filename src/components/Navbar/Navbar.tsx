/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { UnderLineText } from "../UnderLineText/UnderLineText";
import { Menu } from '../Menu/Menu';
import './Navbar.css';
import gsap, { Expo } from 'gsap';
import { Routes } from "../../router/Routes";

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = (props) => {

	const { id, logout } = useAuth0();

	const [isOpen, setOpen] = useState(false);

	const el = useRef<HTMLDivElement>(null);

	const history = useHistory();

	useEffect(() => {
		gsap.to(
			el.current,
			1.1,
			{
				x: isOpen ? '20vw' : '0',
				ease: Expo.easeOut,
			}
		)
		document.body.style.setProperty('overflow-y', isOpen ? 'hidden' : 'auto');
	}, [isOpen]);

	useEffect(() => {
		setOpen(false);
	}, [history.location.pathname]);

	return (
		<>
			<AppBar className="navbar" elevation={0} color="transparent">
				<Toolbar className="navbar-link">
					<Grid justify="space-between" container>
						<Grid item>
							<UnderLineText>
								<a href="#" onClick={() => {
									setOpen(!isOpen);
								}}>{
									isOpen ? 'CLOSE' : 'MENU'
								}</a>
							</UnderLineText>
						</Grid>
						<Grid item>
							<Grid container spacing={4}>
								<Grid item>
									<UnderLineText>
										<Link to={`/notifications`}>NOTIFICATIONS</Link>
									</UnderLineText>
								</Grid>
								<Grid item>
									<UnderLineText>
										<Link to={`/progresses`}>PROGRESSES</Link>
									</UnderLineText>
								</Grid>
								<Grid item>
									<UnderLineText>
										<Link to={`/users/${id}`}>PROFILE</Link>
									</UnderLineText>
								</Grid>
								<Grid item>
									<UnderLineText>
										<span onClick={async () => await logout()} style={{ cursor: "pointer" }}>
											LOGOUT
										</span>
									</UnderLineText>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>

			<Menu isOpen={isOpen}/>

			<div ref={el}>
				<Routes />
			</div>
		</>
	);
};
