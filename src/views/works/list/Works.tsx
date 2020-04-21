/** @format */

import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { GetWorks, GetWorksVariables } from "../../../types/api";
import { GET_WORKS } from "../../../graphql/works";
import { Link } from "react-router-dom";
import { Grid, Container, TextField, Tooltip, IconButton } from "@material-ui/core";
import "./Works.css";
import { WorkItem } from "../../../components/WorkItem/WorkItem";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Add, ArrowForwardIos, ArrowBackIos, ArrowLeft, ArrowRight } from "@material-ui/icons";

interface IWorksProps {}

export const Works: React.FC<IWorksProps> = (props) => {
	const [state, setState] = useState({
		filter: "",
		index: 0,
	});

	const { data, loading } = useQuery<GetWorks, GetWorksVariables>(GET_WORKS, {
		variables: {
			filter: `%${state.filter}%`,
		},
		fetchPolicy: "no-cache",
	});

	return (
		<Container>
			<Grid
				container
				alignItems="center"
				spacing={4}
				style={{
					height: "100vh",
				}}>
				<Grid item xs={6}>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<span className="title-text">Search Works</span>
						</Grid>

						<Grid item>
							<hr />

							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</Grid>

						<Grid item>
							<TextField
								fullWidth
								label="Filter"
								variant="filled"
								onChange={(e) => {
									setState({
										...state,
										filter: e.currentTarget.value,
									});
								}}
							/>
						</Grid>

						<Grid item>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit officiis fugit culpa architecto sapiente, quas maiores dolorem sint,
							expedita esse, nihil ducimus. Hic obcaecati ex, tempore animi odit quo iusto.
						</Grid>

						<Grid item>
							<Link to="/works/new">
								<Tooltip title="Add work.">
									<CircleButton type="button" backgroundColor="black">
										<IconButton>
											<Add />
										</IconButton>
									</CircleButton>
								</Tooltip>
							</Link>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={6}
				>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							{ !data && loading && <div>loading</div>}
							{
								data && (
									<div>
										<WorkItem
											key={data.works[state.index % data.works.length].id}
											{...data.works[state.index % data.works.length]}
											to={`/works/${data.works[state.index % data.works.length].id}`}
										/>

										<Grid spacing={1} container alignItems="center">
											<Grid item>
												<CircleButton type="button" backgroundColor="black" onClick={() => {
													setState({
														...state,
														index: state.index + 1,
													});
												}}>
													<IconButton>
														<ArrowLeft/>
													</IconButton>
												</CircleButton>
											</Grid>
											<Grid item>
												{
													(state.index % data.works.length) + 1
												}/{
													data.works.length
												}
											</Grid>
											<Grid item>
												<CircleButton type="button" backgroundColor="black" onClick={() => {
													setState({
														...state,
														index: state.index + 1,
													})
												}}>
													<IconButton>
														<ArrowRight/>
													</IconButton>
												</CircleButton>
											</Grid>
										</Grid>
									</div>
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};