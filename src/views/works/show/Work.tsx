/** @format */

import { Container, Grid, IconButton } from "@material-ui/core";
import { Audiotrack, Edit, Photo } from "@material-ui/icons";
import React from "react";
import { useQuery } from "react-apollo";
import { Link, useParams } from "react-router-dom";
import { UserItem } from "../../../components/Card/Card";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { CommentButton } from "../../../components/CommentButton/CommentButton";
import { CommentList } from "../../../components/CommentList/CommentList";
import { FavouriteButton } from "../../../components/FavouriteButton/FavouriteButton";
import { Info } from "../../../components/Info/Info";
import { LikeButton } from "../../../components/LikeButton/LikeButton";
import { ReportButton } from "../../../components/ReportButton/ReportButton";
import { SynthesizeButton } from "../../../components/SynthesizeButton/SynthesizeButton";
import { GET_WORK } from "../../../graphql/works";
import { GetWork, GetWorkVariables } from "../../../types/api";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import "./Work.css";

interface IWorkProps {}

export const Work: React.FC<IWorkProps> = (props) => {
	const user = useAuth0();

	//
	// ─── WORK ID ────────────────────────────────────────────────────────────────────
	//
	const params = useParams<{
		id: string;
	}>();

	const { data, refetch } = useQuery<GetWork, GetWorkVariables>(GET_WORK, {
		variables: {
			id: params.id,
		},
		fetchPolicy: "no-cache",
	});

	return (
		<div>
			<div className="work-image-wrapper">
				<img className="work-image" src={data?.works_by_pk.imageUrl || ""} alt="work logo." />
			</div>

			<div>
				<Grid
					container
					direction="column"
					justify="center"
					style={{
						height: "100vh",
					}}>
					<Grid item>
						<Container>
							<Grid
								container
								direction="column"
								spacing={2}
							>
								<Grid item>
									<div className="work-title-text">{data?.works_by_pk.name}</div>

									<hr />

									<div
										style={{
											width: "50%",
										}}>
										{data?.works_by_pk.description}
									</div>
								</Grid>

								<Grid item style={{
									zIndex: 1,
								}}>
									<div>
										<Grid container spacing={1}>
											{
												// owner only button
												user.id === data?.works_by_pk.user.id && (
													<>
														<Grid item>
															<CircleButton type="button" backgroundColor="black">
																<Link to={`/works/${params.id}/images`}>
																	<IconButton>
																		<Photo />
																	</IconButton>
																</Link>
															</CircleButton>
														</Grid>

														<Grid item>
															<CircleButton type="button" backgroundColor="black">
																<Link to={`/works/${params.id}/audios`}>
																	<IconButton>
																		<Audiotrack />
																	</IconButton>
																</Link>
															</CircleButton>
														</Grid>

														<Grid item>
															<CircleButton type="button" backgroundColor="black">
																<Link to={`/works/${params.id}/edit`}>
																	<IconButton>
																		<Edit />
																	</IconButton>
																</Link>
															</CircleButton>
														</Grid>
													</>
												)
											}

											<Grid item>
												<LikeButton userId={user.id} workId={params.id} onLiked={() => refetch()} />
											</Grid>

											<Grid item>
												<FavouriteButton userId={user.id} workId={params.id} onFavourited={() => refetch()} />
											</Grid>

											<Grid item>
												<CommentButton workId={params.id} onCommented={() => refetch()} />
											</Grid>

											{user.id !== data?.works_by_pk.user.id && (
												<Grid item>
													<ReportButton workId={params.id} />
												</Grid>
											)}

											<Grid item>
												<SynthesizeButton workId={params.id} />
											</Grid>
										</Grid>
									</div>
								</Grid>

								<Grid item>
									<div style={{
										width: '50%',
									}}>
										<Link to={`/users/${data?.works_by_pk.user.id}`}>
											<UserItem
												upperText={`Author: ${data?.works_by_pk.user.name || ''}`}
												imageUrl={data?.works_by_pk.user.imageUrl || ''}
												lowerText={data?.works_by_pk.user.created_at.split('T')[0]}
											/>
										</Link>
									</div>	
								</Grid>

								<Grid item>
									<span className="title-text">- Likes: {data?.works_by_pk.likes_aggregate.aggregate.count.toLocaleString()}</span>
								</Grid>

								<Grid item>
									<span className="title-text">- Favourites: {data?.works_by_pk.favourites_aggregate.aggregate.count.toLocaleString()}</span>
								</Grid>
							</Grid>
							
							

						</Container>
					</Grid>
				</Grid>
			</div>

			<Grid
				container
				direction="column"
				style={{
					backgroundColor: "#111",
				}}
				>
				<Grid item>
					<Container>
						<Grid container justify="space-around" spacing={4}>
							<Grid item>
								<Info largerText={data?.works_by_pk.views.toLocaleString() || ""} smallerText="Views" />
							</Grid>

							<Grid item>
								<Info largerText="/" smallerText="" />
							</Grid>

							<Grid item>
								<Info largerText={data?.works_by_pk.usage.toLocaleString() || ""} smallerText="Usage" />
							</Grid>
						</Grid>
					</Container>
				</Grid>
			</Grid>

			<Container className="comments-wrapper">
				<Grid container direction="column" justify="center" style={{
					height: '100vh'
				}}>
					<Grid item>
						<Grid
							container
							spacing={4}
							alignItems="center"
						>
							<Grid item xs={12} sm={6}>
								<div className="comments-picture-wrapper">
									<img
										className="comments-picture"
										src={data?.works_by_pk.imageUrl || ''}
										alt=""
									/>
								</div>
							</Grid>

							<Grid item xs={12} sm={6}>
								<CommentList data={data}/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
