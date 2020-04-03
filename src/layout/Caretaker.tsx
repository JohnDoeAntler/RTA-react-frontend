/** @format */

import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { LogoutButton } from "../component/LogoutButton";
import { OvalButton } from "../component/OvalButton";
import { PageAnimator } from "../component/PageAnimator";
import { TitleLine } from "../component/TitleLine";
import { GET_USER } from "../graphql";
import { GetUser, GetUserVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getId } from "../utils/UserHelper";

export const Caretaker: React.FC = () => {
	const { data } = useQuery<GetUser, GetUserVariables>(GET_USER, {
		variables: {
			id: getId(),
		},
	});

	const [description, setDescription] = useState(
		"Nulla reprehenderit amet irure nulla velit ullamco fugiat irure consectetur ea eiusmod deserunt occaecat qui.",
	);

	return (
		<Grid container className="panel" direction="column" justify="center" spacing={3}>
			<PageAnimator />

			<Grid item>
				<Title>Hello, {data?.user.name}.</Title>

				<TitleLine />
			</Grid>

			<Grid item>
				<Grid container justify="space-between">
					<Grid item>
						<div onMouseEnter={() => setDescription("Dolor labore duis officia adipisicing laboris proident quis.")}>
							<OvalButton text="work list" to="/work" icon="worklist" />
						</div>
					</Grid>
					<Grid item>
						<div
							onMouseEnter={() =>
								setDescription("Commodo dolor nulla sunt veniam incididunt voluptate quis labore ex minim deserunt ut nulla est.")
							}>
							<OvalButton text="user list" to="/user" icon="userlist" />
						</div>
					</Grid>
					<Grid item>
						<div onMouseEnter={() => setDescription("Lorem in magna excepteur et fugiat est anim excepteur velit.")}>
							<OvalButton text="profile" to={`/user/${getId()}`} icon="profile" />
						</div>
					</Grid>
					<Grid item>
						<div onMouseEnter={() => setDescription("Laborum culpa aliqua aliquip minim.")}>
							<OvalButton text="favourites" to={`/favourites/${getId()}`} icon="favourites" />
						</div>
					</Grid>
					<Grid item>
						<div onMouseEnter={() => setDescription("Eu laborum proident ullamco non sint.")}>
							<OvalButton text="followings" to={`/followings/${getId()}`} icon="followings" />
						</div>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Caption>Description: {description}</Caption>

				<LogoutButton />
			</Grid>
		</Grid>
	);
};
