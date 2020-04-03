/** @format */

import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import {
	Edit,
	Favorite,
	FavoriteBorder,
	InsertComment,
	LibraryMusic,
	PhotoLibrary,
	Report,
	Theaters,
	ThumbUpAlt,
	ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Expo, TweenLite } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Avatar } from "../component/Avatar";
import { BackButton } from "../component/BackButton";
import { CircleButton } from "../component/CircleButton";
import { Comment } from "../component/Comment";
import { CommentDialog } from "../component/CommentDialog";
import { FluidImage } from "../component/FluidImage";
import { PageAnimator } from "../component/PageAnimator";
import { ReportDialog } from "../component/ReportDialog";
import { TitleLine } from "../component/TitleLine";
import { FAVOURITE_WORK, GET_WORK, LIKE_WORK, UNFAVOURITE_WORK, UNLIKE_WORK } from "../graphql";
import {
	FavouriteWork,
	FavouriteWorkVariables,
	GetWork,
	GetWorkVariables,
	LikeWork,
	LikeWorkVariables,
	UnfavouriteWork,
	UnfavouriteWorkVariables,
	UnlikeWork,
	UnlikeWorkVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Description } from "../typography/Description";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { getId } from "../utils/UserHelper";

export const WorkDetail: React.FC = () => {
	//
	// ─── PARAMS ─────────────────────────────────────────────────────────────────────
	//

	const { id } = useParams();

	//
	// ─── REF ────────────────────────────────────────────────────────────────────────
	//

	const upperPanel = useRef<HTMLDivElement>(null);

	//
	// ─── MEDIA QUERY HOOK ───────────────────────────────────────────────────────────
	//

	const theme = useTheme();

	const isXs = useMediaQuery(theme.breakpoints.down("xs"));

	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [state, setState] = useState({
		likeDisabled: false,
		favouriteDisabled: false,
		commentOpen: false,
		reportOpen: false,
	});

	const handleCommentOpen = () =>
		setState({
			...state,
			commentOpen: true,
		});
	const handleCommentClose = () => {
		setState({
			...state,
			commentOpen: false,
		});
		refetch();
	};

	const handleReportOpen = () =>
		setState({
			...state,
			reportOpen: true,
		});

	const handleReportClose = () => {
		setState({
			...state,
			reportOpen: false,
		});
		refetch();
	};

	//
	// ─── WORK QUERY ─────────────────────────────────────────────────────────────────
	//

	const { data, refetch } = useQuery<GetWork, GetWorkVariables>(GET_WORK, {
		variables: {
			id: id || "",
		},
		fetchPolicy: "no-cache",
	});

	//
	// ─── WORK RELATIONSHIP ──────────────────────────────────────────────────────────
	//

	const isLiked = data?.work.likedBy.some((e) => e.id === getId());
	const isFavourited = data?.work.favouritedBy.some((e) => e.id === getId());

	//
	// ─── MUTATION ───────────────────────────────────────────────────────────────────
	//

	const [like] = useMutation<LikeWork, LikeWorkVariables>(LIKE_WORK);

	const [unlike] = useMutation<UnlikeWork, UnlikeWorkVariables>(UNLIKE_WORK);

	const [favourite] = useMutation<FavouriteWork, FavouriteWorkVariables>(FAVOURITE_WORK);

	const [unfavourite] = useMutation<UnfavouriteWork, UnfavouriteWorkVariables>(UNFAVOURITE_WORK);

	//
	// ─── COMMENT ANIMATION ──────────────────────────────────────────────────────────
	//

	useEffect(() => {
		TweenLite.from(".comment", {
			marginTop: "10px",
			opacity: 0.0,
			stagger: 0.01,
			ease: Expo.easeOut,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.work.comments]);

	return (
		<Grid container className="panel" direction="column" alignItems="stretch">
			<PageAnimator />

			<BackButton to="/work" />

			<Grid item>
				<div ref={upperPanel}>
					<Box height="1rem" />

					<Title>{data && data.work.name}</Title>

					<TitleLine />

					<FluidImage height="40vh" src={data?.work.imageUrl || ""} />

					<Caption>{data?.work.description || ""}</Caption>
				</div>
			</Grid>
			<Grid item>
				<Grid container spacing={isXs ? 0 : 4}>
					<Grid item xs={12} sm={6}>
						<Subtitle>Action</Subtitle>

						<Box my="1rem">
							<Grid container spacing={1}>
								{getId() === data?.work.user.id ? (
									<>
										<Grid item>
											<Link to={`/work/edit/${id}`}>
												<CircleButton backgroundColor="#303030" popoverText="Edit work">
													<Edit />
												</CircleButton>
											</Link>
										</Grid>
										<Grid item>
											<Link to={`/work/images/${id}`}>
												<CircleButton backgroundColor="#303030" popoverText="Edit Image Data">
													<PhotoLibrary />
												</CircleButton>
											</Link>
										</Grid>
										<Grid item>
											<Link to={`/work/voices/${id}`}>
												<CircleButton backgroundColor="#303030" popoverText="Edit Voice Data">
													<LibraryMusic />
												</CircleButton>
											</Link>
										</Grid>
									</>
								) : (
									<>
										<Grid item>
											{isLiked ? (
												<CircleButton
													backgroundColor="#ff3030"
													popoverText="Unlike"
													disabled={state.likeDisabled}
													onClick={() => {
														setState({
															...state,
															likeDisabled: true,
														});
														unlike({
															variables: {
																me: getId(),
																target: id,
															},
														}).then(() => {
															refetch().then(() => {
																setState({
																	...state,
																	likeDisabled: false,
																});
															});
														});
													}}>
													<ThumbUpAlt />
												</CircleButton>
											) : (
												<CircleButton
													backgroundColor="#303030"
													popoverText="Like"
													disabled={state.likeDisabled}
													onClick={() => {
														setState({
															...state,
															likeDisabled: true,
														});
														like({
															variables: {
																me: getId(),
																target: id,
															},
														}).then(() => {
															refetch().then(() => {
																setState({
																	...state,
																	likeDisabled: false,
																});
															});
														});
													}}>
													<ThumbUpAltOutlined />
												</CircleButton>
											)}
										</Grid>
										<Grid item>
											{isFavourited ? (
												<CircleButton
													backgroundColor="#dddd00"
													popoverText="Remove from my favourite."
													disabled={state.favouriteDisabled}
													onClick={() => {
														setState({
															...state,
															favouriteDisabled: true,
														});
														unfavourite({
															variables: {
																me: getId(),
																target: id,
															},
														}).then(() => {
															refetch().then(() => {
																setState({
																	...state,
																	favouriteDisabled: false,
																})
															});
														});
													}}>
													<Favorite />
												</CircleButton>
											) : (
												<CircleButton
													backgroundColor="#303030"
													popoverText="Add to my favourite."
													disabled={state.favouriteDisabled}
													onClick={() => {
														setState({
															...state,
															favouriteDisabled: true,
														});
														favourite({
															variables: {
																me: getId(),
																target: id,
															},
														}).then(() => {
															refetch().then(() => {
																setState({
																	...state,
																	favouriteDisabled: false,
																})
															});
														});
													}}>
													<FavoriteBorder />
												</CircleButton>
											)}
										</Grid>
										<Grid item>
											<CircleButton backgroundColor="#303030" popoverText="Comment" onClick={handleCommentOpen}>
												<InsertComment />
											</CircleButton>
										</Grid>
										<Grid item>
											<CircleButton backgroundColor="#303030" popoverText="Report" onClick={handleReportOpen}>
												<Report />
											</CircleButton>
										</Grid>
									</>
								)}
								<Grid item>
									<CircleButton backgroundColor="#303030" popoverText="Synthesize video">
										<Theaters />
									</CircleButton>
								</Grid>
							</Grid>
						</Box>

						<hr />

						<Subtitle>Author</Subtitle>

						<Box my="1rem">
							<Link to={`/user/${data?.work.user.id || ""}`}>
								<Grid container alignItems="center">
									<Grid item>
										<Avatar src={data?.work.user.imageUrl || ""} size={80} alt={data?.work.user.name || ""} />
									</Grid>
									<Grid item>
										<Box width="1rem" />
									</Grid>
									<Grid item>
										<Subtitle>{data?.work.user.name || ""}</Subtitle>
										<Description>joined at: {data && data.work.user.createdAt.split("T")[0]}</Description>
									</Grid>
								</Grid>
							</Link>
						</Box>

						<hr />

						<Subtitle>Information</Subtitle>

						<Subtitle>
							<ul>
								<li>Likes: {data?.work.likedBy.length}</li>
								<li>Favourites: {data?.work.favouritedBy.length}</li>
								<li>Views: {data?.work.views}</li>
								<li>Usage: {data?.work.usage}</li>
							</ul>
						</Subtitle>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Subtitle>Comment</Subtitle>

						<Box height="1rem" />

						<Grid container>
							{data && data.work.comments.length > 0 ? (
								data?.work.comments.map((comment) => {
									return (
										<Grid key={comment.id} item xs={12}>
											<Comment {...comment} />
										</Grid>
									);
								})
							) : (
								<Grid item xs={12}>
									<Box
										p="2rem"
										style={{
											backgroundColor: "rgba(0, 0, 0, 0.02)",
											textAlign: "center",
										}}>
										<Description>No comment as found.</Description>
									</Box>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<CommentDialog userId={getId()} workId={id || ""} open={state.commentOpen} handleClose={handleCommentClose} />

			<ReportDialog userId={getId()} workId={id || ""} open={state.reportOpen} handleClose={handleReportClose} />
		</Grid>
	);
};
