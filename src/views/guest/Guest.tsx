/** @format */

import React from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Grid } from "@material-ui/core";
import "./Guest.css";

interface IGuestProps {}

export const Guest: React.FC<IGuestProps> = (props) => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{
				height: "100vh",
			}}>
			<Grid item>
				<div className="guest-button-wrapper">
					<button className="title-text" onClick={async () => await loginWithRedirect()}>
						LOGIN
					</button>
				</div>
			</Grid>
		</Grid>
	);
};
