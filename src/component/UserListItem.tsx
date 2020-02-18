/** @format */

import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Description } from "../typography/Description";
import { Subtitle } from "../typography/Subtitle";
import { UserInfoBar } from "./UserInfoBar";
import "./UserListItem.css";

interface IUserListItem {

	id: string;

	name: string;

	imageUrl: string;

	createdAt: string;

}

export const UserListItem = (props: IUserListItem) => {
	return (
		<div className="user-list-item">
			<Link to={`/user/${props.id}`}>
				<Grid container spacing={1} alignItems="center">
					<Grid item>
						<UserInfoBar
							src={props.imageUrl}
							userId={props.id}
							alt={`${props.name}'s Icon`}
							size={50}
						/>
					</Grid>
					<Grid item>
						<Box height=".25rem" />
						<div>
							<Grid container direction="column">
								<Grid item>
									<Subtitle>{props.name}</Subtitle>
								</Grid>
								<Grid item>
									<Description>
										{
											`created at: ${
												props.createdAt.split("T")[0]
											}`
										}
									</Description>
									<hr />
								</Grid>
							</Grid>
						</div>
						<Box height=".25rem" />
					</Grid>
				</Grid>
			</Link>
		</div>
	);
};
