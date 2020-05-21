/** @format */

import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { WORK_EDIT, GET_WORK_EDIT } from "../../../graphql/works";
import { useMutation, useQuery } from "react-apollo";
import { WorkEdit as Mutation, WorkEditVariables as Variables, GetWorkEdit, GetWorkEditVariables } from "../../../types/api";
import { Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from "@material-ui/core";
import { Formik, Form } from "formik";
import { schema } from "../../../yup/works";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Done, Replay } from "@material-ui/icons";

interface IWorkEditProps {}

export const WorkEdit: React.FC<IWorkEditProps> = (props) => {
	const { id } = useParams();

	const [state, setState] = useState({
		isRedirected: false,
	});

	const { data } = useQuery<GetWorkEdit, GetWorkEditVariables>(GET_WORK_EDIT, {
		variables: {
			id,
		},
		fetchPolicy: "no-cache",
	});

	const [workEdit] = useMutation<Mutation, Variables>(WORK_EDIT);

	return (
		<Container>
			{
				state.isRedirected && <Redirect to={`/works/${id}`} />
			}
			<Grid
				container
				direction="column"
				justify="center"
				style={{
					height: "100vh",
				}}>
				<Grid item>
					<div className="title-text">Edit Work</div>

					<hr />

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae quis eveniet corporis? Neque, doloribus. Dicta dolorum
						doloribus odit asperiores, provident doloremque, necessitatibus quod animi iusto aspernatur inventore quam quasi.
					</p>

					{data && (
						<Formik
							initialValues={{
								name: data.works_by_pk.name,
								description: data.works_by_pk.description,
								imageUrl: data.works_by_pk.imageUrl,
								visibility: data.works_by_pk.visibility ? "public" : "private",
							}}
							validationSchema={schema}
							onSubmit={(props) => {
								workEdit({
									variables: {
										...props,
										id,
										visibility: props.visibility === "public",
									},
								})
									.then((e) => {
										setState({
											...state,
											isRedirected: true,
										});
									})
									.catch((e) => {
										console.error(e);
									});
							}}>
							{(props) => (
								<Form>
									<TextField
										fullWidth
										name="name"
										label="Name"
										variant="filled"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										defaultValue={props.initialValues.name}
										autoFocus
									/>

									{props.touched.name && props.errors.name ? (
										<p className="warning-text">{props.errors.name}</p>
									) : (
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
									)}

									<TextField
										fullWidth
										name="description"
										label="Description"
										variant="filled"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										defaultValue={props.initialValues.description}
									/>

									{props.touched.description && props.errors.description ? (
										<p className="warning-text">{props.errors.description}</p>
									) : (
										<p>Culpa ullamco nulla nisi culpa cillum in dolor et.</p>
									)}

									<TextField
										fullWidth
										name="imageUrl"
										label="Image Url"
										variant="filled"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										defaultValue={props.initialValues.imageUrl}
									/>

									{props.touched.imageUrl && props.errors.imageUrl ? (
										<p className="warning-text">{props.errors.imageUrl}</p>
									) : (
										<p>Nulla in mollit ullamco proident sunt nisi est minim nostrud.</p>
									)}

									<FormControl variant="filled" fullWidth>
										<InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
										<Select
											name="visibility"
											labelId="demo-simple-select-filled-label"
											id="demo-simple-select-filled"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.visibility}>
											<MenuItem value="public">Public</MenuItem>
											<MenuItem value="private">Private</MenuItem>
										</Select>
									</FormControl>

									{props.touched.visibility && props.errors.visibility ? (
										<p className="warning-text">{props.errors.visibility}</p>
									) : (
										<p>Cupidatat aliquip aute fugiat tempor ex culpa occaecat eiusmod consequat sunt veniam.</p>
									)}

									<Grid spacing={1} container>
										<Grid item>
											<CircleButton type="submit" backgroundColor="black" alt="Edit work information.">
												<IconButton>
													<Done />
												</IconButton>
											</CircleButton>
										</Grid>
									</Grid>
								</Form>
							)}
						</Formik>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};
