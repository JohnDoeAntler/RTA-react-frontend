/** @format */

import { Box, Grid } from "@material-ui/core";
import { Edit, PersonAdd, PersonAddDisabled } from "@material-ui/icons";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Avatar } from "../component/Avatar";
import { BackButton } from "../component/BackButton";
import { CircleButton } from "../component/CircleButton";
import { TitleLine } from "../component/TitleLine";
import { FOLLOW_USER, GET_USER, IS_FOLLOWING, UNFOLLOW_USER } from "../graphql";
import {
	FollowUser,
	FollowUserVariables,
	GetUser,
	GetUserVariables,
	IsFollowing,
	IsFollowingVariables,
	UnfollowUser,
	UnfollowUserVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { getId } from "../utils/UserHelper";
import { WorkList } from "./WorkList";

export const UserDetail: React.FC = () => {

	//
	// ─── PARAMS ─────────────────────────────────────────────────────────────────────
	//

	const { id } = useParams();

	//
	// ─── USER QUERY ─────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<GetUser, GetUserVariables>(GET_USER, {
		variables: {
			id: id || "",
		},
	});

	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [isFollowing, setIsFollowing] = useState<boolean>(false);

	//
	// ─── USER RELATIONSHIP ──────────────────────────────────────────────────────────
	//

	useQuery<IsFollowing, IsFollowingVariables>(IS_FOLLOWING, {
		variables: {
			me: getId(),
			target: id,
		},
		onCompleted: (data) => {
			setIsFollowing(data.usersConnection.aggregate.count > 0);
		},
		fetchPolicy: "network-only",
	});

	//
	// ─── MUTATION ───────────────────────────────────────────────────────────────────
	//

	const [follow] = useMutation<FollowUser, FollowUserVariables>(FOLLOW_USER, {
		onCompleted: () => {
			setIsFollowing(true);
		},
	});

	const [unfollow] = useMutation<UnfollowUser, UnfollowUserVariables>(
		UNFOLLOW_USER,
		{
			onCompleted: () => {
				setIsFollowing(false);
			},
		},
	);

	return (
		<Grid container className="panel">
			<BackButton to={"/user"} />
			<Grid item xs={12} sm={6}>
				<Grid
					container
					className="panel"
					direction="column"
					justify="center"
				>
					<Grid item>
						<Title>{`${data?.user.name || ""}'s Profile`}</Title>

						<TitleLine />

						<Avatar
							size={250}
							src={data?.user.imageUrl || ""}
							alt={data?.user.name || ""}
						/>

						<Box height="1rem" />

						<Subtitle>Description</Subtitle>

						<Grid container>
							<Grid item xs={12} sm={11}>
								<Caption>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Cupiditate iusto officiis
									excepturi? Quas, optio eius. Modi aut labore
									neque doloribus. Unde, assumenda! Dolore
									sint facere voluptatibus unde cumque commodi
									aperiam.
								</Caption>

								<hr />
							</Grid>
						</Grid>

						<Subtitle>Action</Subtitle>

						<Box height=".5rem" />

						<Grid container spacing={1}>
							{getId() !== id &&
								(isFollowing ? (
									<Grid item>
										<CircleButton
											backgroundColor="#303030"
											popoverText="Unfollow user."
											onClick={() =>
												unfollow({
													variables: {
														me: getId(),
														target: id,
													},
												})
											}
										>
											<PersonAddDisabled />
										</CircleButton>
									</Grid>
								) : (
									<Grid item>
										<CircleButton
											backgroundColor="#303030"
											popoverText="Follow user."
											onClick={() =>
												follow({
													variables: {
														me: getId(),
														target: id,
													},
												})
											}
										>
											<PersonAdd />
										</CircleButton>
									</Grid>
								))}
							{getId() === id && (
								<Grid item>
									<Link to={`/user/edit/${id}`}>
										<CircleButton
											backgroundColor="#303030"
											popoverText="Edit information."
										>
											<Edit />
										</CircleButton>
									</Link>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6}>
				<WorkList id={id} />
			</Grid>
		</Grid>
	);
};
