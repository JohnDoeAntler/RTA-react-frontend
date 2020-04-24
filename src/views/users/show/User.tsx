/** @format */

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GetUserDetailVariables, GetUserDetail } from "../../../types/api";
import { GET_USER_DETAIL } from "../../../graphql/users";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import { Grid, Container, Avatar, IconButton, Box } from "@material-ui/core";
import "./User.css";
import { Info } from "../../../components/Info/Info";
import { FollowButton } from "../../../components/FollowButton/FollowButton";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Edit } from "@material-ui/icons";
import { Card } from "../../../components/Card/Card";
import { PageScrollSpy } from "../../../components/PageScrollSpy/PageScrollSpy";

interface IUserProps {}

export const User: React.FC<IUserProps> = (props) => {

	const currentUser = useAuth0();

	const user = useParams<{
		id: string;
	}>();

	const { data, refetch } = useQuery<GetUserDetail, GetUserDetailVariables>(GET_USER_DETAIL, {
		variables: {
			id: user.id || "",
		},
		fetchPolicy: "no-cache",
	});

	return (
		<div>
			<div className="user-background-text-wrapper">
				<div className="user-background-text">
					{
						data?.users_by_pk.name.repeat(3)
					}
				</div>
			</div>

			<Grid
				container
				justify="center"
				alignItems="center"
				direction="column"
				spacing={8}
				style={{
					width: "100%",
					height: "100vh",
				}}>
				<Grid item>
					<Box
						style={{
							height: "5rem",
						}}
					/>
				</Grid>

				<Grid item>
					<div className="user-icon-wrapper">
						<Avatar className="user-icon" src={data?.users_by_pk.imageUrl || ""} />

						<div className="user-icon-border"></div>
					</div>
				</Grid>

				<Grid item>
					<div className="title-text">
						<Grid
							container
							spacing={4}
							alignItems="center"
						>
							<Grid
								item
								style={{
									fontSize: "5rem",
								}}>
								{data?.users_by_pk.name}
							</Grid>

							<Grid item style={{
								transform: 'scale(200%, 200%)'
							}}>
								{currentUser.id === user.id ? (
									<Link to={`/users/${user.id}/edit`}>
										<CircleButton backgroundColor="black" type="button">
											<IconButton>
												<Edit />
											</IconButton>
										</CircleButton>
									</Link>
								) : (
									<FollowButton followerId={currentUser.id} followingId={user.id} onClick={() => refetch()} />
								)}
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>

			<Grid
				className="user-popularity"
				container
				direction="column"
				style={{
					backgroundColor: "#111",
				}}>
				<Grid item>
					<Container>
						<Grid container justify="space-around" spacing={4}>
							<Grid item>
								<Info largerText={data?.users_by_pk.followers_aggregate.aggregate.count.toLocaleString() || ""} smallerText="Followers" />
							</Grid>

							<Grid item></Grid>

							<Grid item>
								<Info largerText={data?.users_by_pk.followings_aggregate.aggregate.count.toLocaleString() || ""} smallerText="Followings" />
							</Grid>
						</Grid>
					</Container>
				</Grid>
			</Grid>

			{
				data?.users_by_pk.works.length && (
					<Grid
						container
						style={{
							padding: '5rem',
						}}
					>
						<div className="page-scroll-spy-wrapper">
							<PageScrollSpy afterColor="black"/>
						</div>

						<Grid item>
							<div className="title-text">
								{
									data?.users_by_pk.name
								}'s works
							</div>

							<hr/>

							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, qui! Magnam illum nesciunt eveniet error! Labore facilis vel ex dolore enim doloremque in dolor nam aperiam sint! Placeat, excepturi expedita.
							</p>

							<Grid
								container
								spacing={2}
							>
								{
									data && data?.users_by_pk.works.map((work) => (
										<Grid
											item
											key={work.id}
											style={{
												width: '85%',
											}}
										>
											<Link to={`/works/${work.id}`}>
												<Card
													isListItem
													upperText={work.name}
													lowerText={work.description}
													imageUrl={work.imageUrl}
												/>
											</Link>
										</Grid>
									))
								}
							</Grid>
						</Grid>
					</Grid>
				)
			}
		</div>
	);
};