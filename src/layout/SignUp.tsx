/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Redirect } from "react-router";
import * as Yup from "yup";
import { BackButton } from "../component/BackButton";
import { ContentDialog } from "../component/ContentDialog";
import { Reset } from "../component/Reset";
import { Submit } from "../component/Submit";
import { TitleLine } from "../component/TitleLine";
import { SIGNUP } from "../graphql";
import { Register, RegisterVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { PageAnimator } from "../component/PageAnimator";

const signUpSchema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email("email is required to be valid."),

	password: Yup.string()
		.required()
		.min(8, "password is required to be at least 8 characters."),

	confirm: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null, "confirm password is required to be match."]),

	name: Yup.string()
		.required()
		.min(4, "name is required to be at least 8 characters."),
});

export const SignUp: React.FC = () => {
	const [state, setState] = useState({
		redirect: false,
		open: false,
	});

	const [signup, { error }] = useMutation<Register, RegisterVariables>(SIGNUP);

	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// };

	const handleClose = () => {
		setState({
			...state,
			open: false,
		});
	};

	if (state.redirect) {
		return <Redirect to="/" />;
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<PageAnimator />

			<BackButton to="/" />

			<Grid item>
				<Title>Register</Title>

				<TitleLine />

				<Formik
					initialValues={{
						email: "",
						password: "",
						confirm: "",
						name: "",
					}}
					validationSchema={signUpSchema}
					onSubmit={(props) => {
						signup({
							variables: {
								email: props.email,
								password: props.password,
								name: props.name,
							},
						})
							.then((e) => {
								if (!!e.data) {
									localStorage.setItem("token", e.data.signup.token);
									setState({
										...state,
										redirect: true,
									});
								}
							})
							.catch((e) => {
								setState({
									...state,
									open: true,
								});
							});
					}}>
					{(props) => (
						<Form autoComplete="off">
							<Box my={3}>
								<TextField fullWidth name="email" label="Email" variant="filled" onChange={props.handleChange} onBlur={props.handleBlur} />
								<Caption>
									{(props.touched.email && props.errors.email ) ? (<span className="error-message">{props.errors.email}</span>) : 
										`
											Lorem ipsum dolor sit, amet consectetur adipisicing
											elit. Hic id architecto possimus, deleniti
											temporibus a nemo odit ducimus dolorum. Eum
											voluptatibus maxime optio officia provident
											cupiditate laudantium consectetur commodi quam!
										`}
								</Caption>
							</Box>

							<Box my={3}>
								<TextField
									fullWidth
									name="password"
									type="password"
									label="Password"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
								<Caption>
									{(props.touched.password && props.errors.password ) ? (<span className="error-message">{props.errors.password}</span>) : 
										`
											Lorem ipsum dolor, sit amet consectetur adipisicing
											elit. Dolorem quibusdam quisquam quidem hic quos,
											laborum recusandae eius commodi nulla quis iusto
											voluptatibus, expedita adipisci rem cumque fuga.
											Nisi, magni reprehenderit!
										`}
								</Caption>
							</Box>

							<Box my={3}>
								<TextField
									fullWidth
									name="confirm"
									type="password"
									label="Confirm Password"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
								<Caption>
									{(props.touched.confirm && props.errors.confirm ) ? (<span className="error-message">{props.errors.confirm}</span>) : 
										`
											Lorem ipsum dolor, sit amet consectetur adipisicing
											elit. Dolorem quibusdam quisquam quidem hic quos,
											laborum recusandae eius commodi nulla quis iusto
											voluptatibus, expedita adipisci rem cumque fuga.
											Nisi, magni reprehenderit!
										`}
								</Caption>
							</Box>

							<Box my={3}>
								<TextField fullWidth name="name" label="Name" variant="filled" onChange={props.handleChange} onBlur={props.handleBlur} />
								<Caption>
									{(props.touched.name && props.errors.name ) ? (<span className="error-message">{props.errors.name}</span>) : 
										`
											Lorem ipsum dolor, sit amet consectetur adipisicing
											elit. Dolorem quibusdam quisquam quidem hic quos,
											laborum recusandae eius commodi nulla quis iusto
											voluptatibus, expedita adipisci rem cumque fuga.
											Nisi, magni reprehenderit!
										`}
								</Caption>
							</Box>

							<Grid container spacing={1}>
								<Grid item>
									<Submit />
								</Grid>
								<Grid item>
									<Reset />
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</Grid>

			<ContentDialog open={state.open} handleClose={handleClose} title="Error Dialog" content={error?.message || ""} />
		</Grid>
	);
};
