/** @format */

import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";
import { DiagonalLine } from "../component/DiagonalLine";
import { OvalButton } from "../component/OvalButton";
import { PageAnimator } from "../component/PageAnimator";
import { Title } from "../typography/Title";

export const Guest: React.FC = () => {
	//
	// ─── MEDIA QUERY HOOK ───────────────────────────────────────────────────────────
	//

	const theme = useTheme();

	const isXs = useMediaQuery(theme.breakpoints.down("xs"));

	return (
		<Grid container className="panel" direction="column" justify="center" spacing={3}>
			<PageAnimator />

			<Grid item>
				<Grid container justify="center">
					<Grid item>
						<Title>Hello, Guest.</Title>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid container justify="center" spacing={5}>
					<Grid item xs={isXs && 12}>
						<Grid container justify="center">
							<OvalButton text="login" to="/login" icon="login" />
						</Grid>
					</Grid>
					{!isXs && (
						<Grid item>
							<DiagonalLine />
						</Grid>
					)}
					<Grid item xs={isXs && 12}>
						<Grid container justify="center">
							<OvalButton text="register" to="/register" icon="signup" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
