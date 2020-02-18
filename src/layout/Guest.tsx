import { Grid } from "@material-ui/core";
import React from "react";
import { DiagonalLine } from "../component/DiagonalLine";
import { OvalButton } from "../component/OvalButton";
import { Title } from "../typography/Title";

export const Guest: React.FC = () => {
	return (
		<Grid container className="panel" direction="column" justify="center" spacing={3}>
			<Grid item>
				<Grid container justify="center">
					<Grid item>
						<Title>
							Hello, Guest.
						</Title>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container justify="center" spacing={5}>
					<Grid item>
						<OvalButton text="login" to="/login" />
					</Grid>
					<Grid item>
						<DiagonalLine/>
					</Grid>
					<Grid item>
						<OvalButton text="register" to="/register" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
