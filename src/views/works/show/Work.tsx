/** @format */

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { GET_WORK } from "../../../graphql/works";
import { GetWorkVariables, GetWork } from "../../../types/api";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import { LikeButton } from "../../../components/LikeButton/LikeButton";
import { FavouriteButton } from "../../../components/FavouriteButton/FavouriteButton";
import { CommentButton } from "../../../components/CommentButton/Commentbutton";
import { ReportButton } from "../../../components/ReportButton/ReportButton";
import { SynthesizeButton } from "../../../components/SynthesizeButton/SynthesizeButton";
import { Grid, Container, IconButton } from "@material-ui/core";
import "./Work.css";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Photo, Audiotrack, Edit, ThumbUp, Star, Report, Comment as CommentIcon, CallMerge } from "@material-ui/icons";
import { Info } from "../../../components/Info/Info";

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
							<div className="work-title-text">{data?.works_by_pk.name}</div>

							<hr />

							<p
								style={{
									width: "50%",
								}}>
								{data?.works_by_pk.description}
							</p>

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

							<p className="title-text">- Likes: {data?.works_by_pk.likes_aggregate.aggregate.count.toLocaleString()}</p>

							<p className="title-text">- Favourites: {data?.works_by_pk.favourites_aggregate.aggregate.count.toLocaleString()}</p>
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

			<pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	);
};
