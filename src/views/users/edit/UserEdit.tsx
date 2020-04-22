/** @format */

import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { GetUserEdit, GetUserEditVariables, UserEdit as Mutation, UserEditVariables as Variables } from "../../../types/api";
import { GET_USER_EDIT, USER_EDIT } from "../../../graphql/users";
import { Formik, Form } from "formik";
import { schema } from "../../../yup/users";
import { TextField, Grid, IconButton, Container } from "@material-ui/core";
import { CircleButton } from "../../../components/CircleButton/CircleButton";
import { Done } from "@material-ui/icons";

interface IUserEditProps {}

export const UserEdit: React.FC<IUserEditProps> = (props) => {
	const { id } = useParams();

	const [state, setState] = useState({
		isRedirected: false,
	});

	const { data } = useQuery<GetUserEdit, GetUserEditVariables>(GET_USER_EDIT, {
		variables: {
			id: id || "",
		},
		fetchPolicy: "no-cache",
	});

	const [userEdit] = useMutation<Mutation, Variables>(USER_EDIT);

	if (state.isRedirected) {
		return (
			<Redirect to={`/users/${id}`}/>
		);
	}

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
					<div className="title-text">Edit User</div>

					<hr />

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, facilis. Non minima, quod dolor voluptas pariatur esse fugiat, quae
						ad amet aperiam aliquid eos consectetur perspiciatis optio officia tempore! Sed.
					</p>

					{data && (
						<Formik
							initialValues={{
								name: data.users_by_pk.name,
								imageUrl: data.users_by_pk.imageUrl,
							}}
							validationSchema={schema}
							onSubmit={(props) => {
								userEdit({
									variables: {
										name: props.name,
										imageUrl: props.imageUrl,
										id: id || "",
									},
								}).then(() => {
									setState({
										...state,
										isRedirected: true,
									});
								}).catch((e) => {
									console.log(e);
								})
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
										name="imageUrl"
										label="Image URL"
										variant="filled"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										defaultValue={props.initialValues.imageUrl}
									/>

									{props.touched.imageUrl && props.errors.imageUrl ? (
										<p className="warning-text">{props.errors.imageUrl}</p>
									) : (
										<p>Ipsum dolore dolore veniam sint nulla pariatur tempor.</p>
									)}

									<Grid spacing={1} container>
										<Grid item>
											<CircleButton type="submit" backgroundColor="black">
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
