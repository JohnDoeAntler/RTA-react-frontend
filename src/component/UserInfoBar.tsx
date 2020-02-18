/** @format */

import { Grid } from "@material-ui/core";
import React from "react";
import { Avatar } from "./Avatar";
import "./UserInfoBar.css";

export interface IUserInfoBarProps {

	userId: string;

	alt: string;

	size: number;

	src: string;

}

export const UserInfoBar: React.FC<IUserInfoBarProps> = (props) => {
	return (
		<div>
			<Grid
				container
				alignItems="center"
				alignContent="center"
				spacing={1}
			>
				<Grid item>
					<Avatar {...props}/>
				</Grid>
				<Grid item>
					<div className="user-info-bar-username">
						{
							props.children
						}
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
