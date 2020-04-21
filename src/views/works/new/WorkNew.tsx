/** @format */

import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo";
import { WORK_NEW } from "../../../graphql/works";
import { WorkNew as Mutation, WorkNewVariables as Variables } from "../../../types/api";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { TextField, Checkbox, Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
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

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repudiandae quis eveniet corporis? Neque, doloribus. Dicta dolorum doloribus odit asperiores, provident doloremque, necessitatibus quod animi iusto aspernatur inventore quam quasi.
					</p>

					<Formik
						initialValues={{
							name: "",
							description: "",
							imageUrl: "",
							visibility: false,
						}}
						validationSchema={schema}
						onSubmit={(props) => {
							createWork({
								variables: {
									...props,
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

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae nesciunt dolores consequatur totam nam
									accusamus a ipsum, pariatur eveniet quis velit tempore quas quo rerum dignissimos dolorem amet ab?
								</p>

								<TextField
									fullWidth
									name="description"
									label="Description"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={props.initialValues.description}
									autoFocus
								/>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum eius, dignissimos nostrum numquam totam maxime sequi!
									Debitis a fugiat error neque soluta? Quo illum fugiat dolorem itaque molestias provident!
								</p>

								<TextField
									fullWidth
									name="imageUrl"
									label="Image Url"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={props.initialValues.imageUrl}
									autoFocus
								/>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error in, sit illum, sunt, dolorem maiores amet sequi ullam
									deserunt quod facere voluptate ad ducimus eius repudiandae corrupti blanditiis reiciendis.
								</p>

								<FormControl variant="filled" fullWidth>
									<InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
									<Select
										name="visibility"
										labelId="demo-simple-select-filled-label"
										id="demo-simple-select-filled"
										onChange={props.handleChange}>
										<MenuItem value="public">Public</MenuItem>
										<MenuItem value="private">Private</MenuItem>
									</Select>
								</FormControl>

								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, iste deserunt voluptatibus velit atque ex odio ipsam
									temporibus eaque cum, ab inventore necessitatibus facilis, minima provident deleniti eligendi pariatur reprehenderit?
								</p>

								<Grid spacing={1} container>
									<Grid item>
										<CircleButton backgroundColor="black" onClick={() => props.submitForm()}>
											<Done />
										</CircleButton>
									</Grid>

									<Grid item>
										<CircleButton backgroundColor="black" onClick={() => props.submitForm()}>
											<Replay />
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
