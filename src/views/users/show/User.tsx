/** @format */

import { Avatar, Container, Grid, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";
import { useQuery } from "react-apollo";
import { Link, useParams } from "react-router-dom";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { FollowButton } from "../../../components/FollowButton/FollowButton";
import { InfoBlock } from "../../../components/InfoBlock/InfoBlock";
import { WorkList } from "../../../components/WorkList/WorkList";
import { GET_USER_DETAIL } from "../../../graphql/users";
import { GetUserDetail, GetUserDetailVariables } from "../../../types/api";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import "./User.css";

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
				<div className="user-background-text">{data?.users_by_pk.name.repeat(3)}</div>
			</div>

			<Container>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Grid
							container
							justify="center"
							alignItems="center"
							direction="column"
							spacing={4}
							style={{
								width: "100%",
								height: "100vh",
							}}>
							<Grid item>
								<div className="user-icon-wrapper">
									<Avatar className="user-icon" src={data?.users_by_pk.imageUrl || ""} />

									<div className="user-icon-border"></div>
								</div>
							</Grid>

							<Grid item>
								<div className="title-text" style={{
									textAlign: 'center'
								}}>{data?.users_by_pk.name}</div>

								<hr/>

								<Grid container spacing={1}>
									<Grid item xs={12} md={6}>
										<InfoBlock color="#f77" upperText={data?.users_by_pk.followings_aggregate.aggregate.count.toLocaleString() || ''} lowerText="followings"/>
									</Grid>

									<Grid item xs={12} md={6}>
										<InfoBlock color="#7ff"upperText={data?.users_by_pk.followers_aggregate.aggregate.count.toLocaleString() || ''} lowerText="followers"/>
									</Grid>
								</Grid>

								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sapiente nihil totam deserunt quo expedita omnis
									consectetur consequuntur recusandae quas, fugiat libero iste est tenetur ipsa fugit. Aspernatur, asperiores quaerat.
								</p>

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
					</Grid>

					<Grid item xs={12} sm={6}>
						<Grid
							container
							direction="column"
							justify="center"
							style={{
								height: "100vh",
							}}>
							<Grid item>
								<div className="title-text">{data?.users_by_pk.name}'s works</div>

								<hr />

								<div
									style={{
										padding: "2rem",
									}}></div>

								<Grid container direction="column" spacing={2}>
									<Grid item>{data && <WorkList works={data.users_by_pk.works} filter=""/>}</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
