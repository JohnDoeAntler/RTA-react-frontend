/** @format */

import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo";
import { WORK_NEW } from "../../../graphql/works";
import { WorkNew as Mutation, WorkNewVariables as Variables } from "../../../types/api";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { TextField, Checkbox, Container, Grid, FormControl, InputLabel, Select, MenuItem, IconButton } from "@material-ui/core";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Done, Replay } from "@material-ui/icons";

interface IWorkNewProps {}

const schema = Yup.object().shape({
	name: Yup.string().required().min(2),

	description: Yup.string().required().min(2),

	imageUrl: Yup.string().required().url(),

	visibility: Yup.string().oneOf(["public", "private"]),
});

export const WorkNew: React.FC<IWorkNewProps> = (props) => {
	const [createWork, { data, error, loading }] = useMutation<Mutation, Variables>(WORK_NEW);

	return (
		<Container>
			<Grid
				container
				direction="column"
				justify="center"
				style={{
					height: "100vh",
				}}>
				<Grid item>

					<div className="title-text">
						Create Work
					</div>

					<hr/>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae quis eveniet corporis? Neque, doloribus. Dicta dolorum doloribus odit asperiores, provident doloremque, necessitatibus quod animi iusto aspernatur inventore quam quasi.
					</p>

					<Formik
						initialValues={{
							name: "",
							description: "",
							imageUrl: "",
							visibility: "private",
						}}
						validationSchema={schema}
						onSubmit={(props) => {
							console.log("form submitted.");

							createWork({
								variables: {
									...props,
									visibility: props.visibility === "public",
								},
							})
							.then(() => {
								console.log("work created.");
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

								{
									(props.touched.name && props.errors.name) ? (
										<p className="warning-text">
											{
												props.errors.name
											}
										</p>
									) : (
										<p>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										</p>
									)
								}

								<TextField
									fullWidth
									name="description"
									label="Description"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={props.initialValues.description}
								/>

								{
									(props.touched.description && props.errors.description) ? (
										<p className="warning-text">
											{
												props.errors.description
											}
										</p>
									) : (
										<p>
											Culpa ullamco nulla nisi culpa cillum in dolor et.
										</p>
									)
								}

								<TextField
									fullWidth
									name="imageUrl"
									label="Image Url"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={props.initialValues.imageUrl}
								/>

								{
									(props.touched.imageUrl && props.errors.imageUrl) ? (
										<p className="warning-text">
											{
												props.errors.imageUrl
											}
										</p>
									) : (
										<p>
											Nulla in mollit ullamco proident sunt nisi est minim nostrud.
										</p>
									)
								}

								<FormControl variant="filled" fullWidth>
									<InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
									<Select
										name="visibility"
										labelId="demo-simple-select-filled-label"
										id="demo-simple-select-filled"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										defaultValue={props.initialValues.visibility}
									>
										<MenuItem value="public">Public</MenuItem>
										<MenuItem value="private">Private</MenuItem>
									</Select>
								</FormControl>

								{
									(props.touched.visibility && props.errors.visibility) ? (
										<p className="warning-text">
											{
												props.errors.visibility
											}
										</p>
									) : (
										<p>
											Cupidatat aliquip aute fugiat tempor ex culpa occaecat eiusmod consequat sunt veniam.
										</p>
									)
								}

								<Grid spacing={1} container>
									<Grid item>
										<CircleButton type="submit" backgroundColor="black">
											<IconButton>
												<Done />
											</IconButton>
										</CircleButton>
									</Grid>

									<Grid item>
										<CircleButton type="reset" backgroundColor="black">
											<IconButton>
												<Replay />
											</IconButton>
										</CircleButton>
									</Grid>
								</Grid>
							</Form>
						)}
					</Formik>
				</Grid>
			</Grid>
		</Container>
	);
};
