/** @format */

import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { GetWorks, GetWorksVariables } from "../../../types/api";
import { GET_WORKS } from "../../../graphql/works";
import { Link } from "react-router-dom";
import { Grid, Container, TextField, Tooltip, IconButton } from "@material-ui/core";
import "./Works.css";
import { WorkItem } from "../../../components/WorkItem/WorkItem";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Add, ArrowForwardIos, ArrowBackIos, ArrowLeft, ArrowRight } from "@material-ui/icons";
import { WorkList } from "../../../components/WorkList/WorkList";

interface IWorksProps {}

export const Works: React.FC<IWorksProps> = (props) => {

	const [state, setState] = useState({
		filter: '',
		delayedFilter: '',
	});

	const { data, loading } = useQuery<GetWorks, GetWorksVariables>(GET_WORKS, {
		variables: {
			filter: `%${state.filter}%`,
		},
		fetchPolicy: "no-cache",
		onCompleted: () => {
			setState({
				...state,
				delayedFilter: state.filter,
			});
		}
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
				<Grid item xs={12} sm={6}>
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
								<CircleButton type="button" backgroundColor="black" alt="Create work.">
									<IconButton>
										<Add />
									</IconButton>
								</CircleButton>
							</Link>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					sm={6}
					xs={12}
				>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							{
								data && (
									<WorkList works={data.works} filter={state.delayedFilter}/>
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};