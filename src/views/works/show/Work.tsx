/** @format */

import { Container, Grid, IconButton } from "@material-ui/core";
import { Audiotrack, Edit, Photo } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { useQuery, useMutation } from "react-apollo";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../../components/Card/Card";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { CommentButton } from "../../../components/CommentButton/CommentButton";
import { CommentList } from "../../../components/CommentList/CommentList";
import { FavouriteButton } from "../../../components/FavouriteButton/FavouriteButton";
import { Info } from "../../../components/Info/Info";
import { LikeButton } from "../../../components/LikeButton/LikeButton";
import { ReportButton } from "../../../components/ReportButton/ReportButton";
import { SynthesizeButton } from "../../../components/SynthesizeButton/SynthesizeButton";
import { GET_WORK, INC_VIEWS } from "../../../graphql/works";
import { GetWork, GetWorkVariables, IncViews, IncViewsVariables } from "../../../types/api";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import "./Work.css";
import { PageScrollSpy } from "../../../components/PageScrollSpy/PageScrollSpy";
import { PageInfo } from "../../../components/PageInfo/PageInfo";
import { InfoBlock } from "../../../components/InfoBlock/InfoBlock";
import { TitleLine } from "../../../components/TitleLine/TitleLine";
import gsap, { Power1, Expo } from 'gsap';

interface IWorkProps {}

export const Work: React.FC<IWorkProps> = (props) => {
	const user = useAuth0();

	//
	// ─── WORK ID ────────────────────────────────────────────────────────────────────
	//
	const params = useParams<{
		id: string;
	}>();

	const [ incViews ] = useMutation<IncViews, IncViewsVariables>(INC_VIEWS);

	// views increment
	useEffect(() => {
		incViews({
			variables: {
				id: params.id,
			}
		});
	}, []);

	const { data, refetch } = useQuery<GetWork, GetWorkVariables>(GET_WORK, {
		variables: {
			id: params.id,
		},
		fetchPolicy: "no-cache",
	});

	const ref = useRef<HTMLDivElement>(null);
	const image = useRef<HTMLImageElement>(null);
	const transistor = useRef<HTMLDivElement>(null);
	const title = useRef<HTMLDivElement>(null);
	const titleText = useRef<HTMLDivElement>(null);

	useEffect(() => {

		let currentPos = window.pageYOffset;

		const callDistort = function () {
			const newPos = window.pageYOffset;
			const diff = newPos - currentPos;
			const speed = diff * 0.05;

			gsap.to(
				ref.current,
				.5,
				{
					skewY: speed * .5,
					ease: Power1.easeOut,
				}
			)
			currentPos = newPos;
			requestAnimationFrame(callDistort);
		};

		callDistort();

		gsap.fromTo(
			image.current,
			1.5,
			{
				scale: 1.5,
				y: "10rem",
				ease: Expo.easeInOut,
			}, {
				scale: 1,
				y: "0rem",
				ease: Expo.easeInOut,
			}
		)

		gsap.fromTo(
			transistor.current,
			2,
			{
				height: "100%",
				ease: Expo.easeInOut,
			},
			{
				height: "0%",
				ease: Expo.easeInOut,
			}
		);

		gsap.fromTo(
			transistor.current,
			1,
			{
				y: "0",
				ease: Expo.easeInOut,
				delay: 2,
			},
			{
				y: "-100%",
				ease: Expo.easeInOut,
				delay: 2,
			}
		);

		title.current && title.current.style.setProperty("overflow", "hidden");
		title.current && title.current.style.setProperty("height", "5rem");

		gsap.fromTo(
			titleText.current,
			1,
			{
				y: "100%",
				ease: Expo.easeInOut,
				delay: .5,
			}, {
				y: "0%",
				ease: Expo.easeInOut,
				delay: .5,
			}
		)


	}, []);


	return (
		<div>
			<div className="page-scroll-spy-wrapper">
				<PageScrollSpy afterColor="black"/>
			</div>

			<div ref={ref}>
				<div className="work-background-text-wrapper">
					<div className="work-background-text">{data?.works_by_pk.name.repeat(3)}</div>
				</div>
	
				<PageInfo text="Work Detail Page"/>
	
				<div ref={image} className="work-image-wrapper">
					<div ref={transistor} className="transistor"></div>

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
										<div ref={title}>
											<div ref={titleText} className="work-title-text">
												{data?.works_by_pk.name}
											</div>
										</div>
	
										<TitleLine/>
	
										<div
											style={{
												width: "50%",
												paddingLeft: ".8rem",
												borderLeft: "1rem solid #dd7"
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
																<CircleButton type="button" backgroundColor="black" alt="View image training files.">
																	<Link to={`/works/${params.id}/images`}>
																		<IconButton>
																			<Photo />
																		</IconButton>
																	</Link>
																</CircleButton>
															</Grid>
	
															<Grid item>
																<CircleButton type="button" backgroundColor="black" alt="View audio training files.">
																	<Link to={`/works/${params.id}/audios`}>
																		<IconButton>
																			<Audiotrack />
																		</IconButton>
																	</Link>
																</CircleButton>
															</Grid>
	
															<Grid item>
																<CircleButton type="button" backgroundColor="black" alt="Edit work information.">
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
												<Card
													upperText={`Author: ${data?.works_by_pk.user.name || ''}`}
													imageUrl={data?.works_by_pk.user.imageUrl || ''}
													lowerText={data?.works_by_pk.user.created_at.split('T')[0]}
													color="#0dd"
												/>
											</Link>
										</div>	
									</Grid>
	
									<Grid item>
										<div style={{
											width: '50%',
										}}>
											<Grid container spacing={1}>
												<Grid item xs={12} md={6}>
													<InfoBlock color="#ff7" upperText={data?.works_by_pk.likes_aggregate.aggregate.count.toLocaleString() || ''} lowerText="likes"/>
												</Grid>
		
												<Grid item xs={12} md={6}>
													<InfoBlock color="#f77" upperText={data?.works_by_pk.favourites_aggregate.aggregate.count.toLocaleString() || ''} lowerText="favourites"/>
												</Grid>
											</Grid>
										</div>
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
					<Grid container direction="column">
						<Grid item>
							<Grid
								container
								spacing={4}
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
		</div>
	);
};
