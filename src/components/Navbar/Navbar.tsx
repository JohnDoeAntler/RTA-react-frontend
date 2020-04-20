/** @format */

import React from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { UnderLineText } from "../UnderLineText/UnderLineText";
import './Navbar.css';

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = (props) => {
	const { id, logout } = useAuth0();

	return (
		<AppBar elevation={0} color="transparent">
			<Toolbar className="navbar-link">
				<Grid justify="space-between" container>
					<Grid item>
						<UnderLineText>
							<Link to={`/`}>HOME</Link>
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
									<Link to={`/user/${id}`}>PROFILE</Link>
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
	);
};
