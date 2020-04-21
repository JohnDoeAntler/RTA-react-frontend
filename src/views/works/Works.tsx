/** @format */

import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { GetWorks, GetWorksVariables } from "../../types/api";
import { GET_WORKS } from "./graphql";
import { Link } from "react-router-dom";
import { Grid, Container, TextField, Tooltip } from "@material-ui/core";
import "./Works.css";
import { WorkItem } from "../../components/WorkItem/WorkItem";
import { CircleButton } from "../../components/CircleButton/CircleButton";
import { Add } from "@material-ui/icons";

interface IWorksProps {}

export const Works: React.FC<IWorksProps> = (props) => {
	const [state, setState] = useState({
		filter: "",
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
				spacing={8}
				style={{
					height: "100vh",
				}}>
				<Grid item xs={6}>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<span className="works-title-text">Search Works</span>
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
							<Link to="/work/new">
								<Tooltip title="Add work.">
									<CircleButton backgroundColor="black">
										<Add />
									</CircleButton>
								</Tooltip>
							</Link>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={6}
					style={{
						borderLeft: "1px solid rgba(0, 0, 0, .1)",
					}}>
					<Grid container direction="column" spacing={2}>
						{data &&
							data.works.map((work) => (
								<Grid item>
									<WorkItem key={work.id} {...work} to={`/work/${work.id}`}></WorkItem>
								</Grid>
							))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
/**
 * 
		<div>
			<Link to="/work/new">
				New
			</Link>

			<input type="text" onChange={(e) => {
				setState({
					...state,
					filter: e.currentTarget.value,
				})
			}}/>

		</div>
 */
