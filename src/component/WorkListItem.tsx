/** @format */

import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { GetUserList_users } from "../types/api";
import { Description } from "../typography/Description";
import { Subtitle } from "../typography/Subtitle";
import { FluidImage } from "./FluidImage";
import { UserInfoBar } from "./UserInfoBar";

interface IWorkListItem {

	id: string;

	name: string;

	description: string;

	imageUrl: string;

	createdAt: string;

	user: GetUserList_users;

	showUser: boolean;

}

export const WorkListItem = (props: IWorkListItem) => {
	return (
		<Grid container className="work-list-item" direction="column" spacing={1}>
			{props.showUser && (
				<Grid item>
					<Link to={`/user/${props.user.id}`}>
						<UserInfoBar
							src={props.user.imageUrl}
							userId={props.user.id}
							alt={`${props.user.name}'s icon`}
							size={32}
						>
							{props.user.name}
						</UserInfoBar>
					</Link>
				</Grid>
			)}
			<Link to={`/work/${props.id}`}>
				<Grid item>
					<FluidImage src={props.imageUrl} />
				</Grid>
				<Grid item>
					<Box height=".25rem" />
					<div>
						<Grid container spacing={1}>
							<Grid item>
								<Subtitle>{props.name}</Subtitle>
							</Grid>
							<Grid item>
								<Description>
									{`created at: ${
										props.createdAt.split("T")[0]
									}`}
								</Description>
							</Grid>
						</Grid>
					</div>
					<Box height=".25rem" />
					<Description>{props.description}</Description>
				</Grid>
			</Link>
		</Grid>
	);
};
