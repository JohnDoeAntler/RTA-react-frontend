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
import { LOGIN } from "../graphql";
import { Login as SignIn, LoginVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { PageAnimator } from "../component/PageAnimator";

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email("email is required to be valid."),

	password: Yup.string()
		.required()
		.min(8, "password is required to be at least 8 characters."),
});

export const Login: React.FC = () => {
	const [state, setState] = useState({
		redirect: false,
		open: false,
	});

	const [login, { error }] = useMutation<SignIn, LoginVariables>(LOGIN);

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
				<Title>Login</Title>

				<TitleLine />

				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={loginSchema}
					onSubmit={(props) => {
						login({
							variables: {
								email: props.email,
								password: props.password,
							},
						})
							.then((e) => {
								if (!!e.data) {
									localStorage.setItem("token", e.data.login.token);
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
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Consequatur explicabo doloremque illum, mollitia eveniet dolor aspernatur earum,
											ipsam asperiores expedita ut id soluta ducimus facilis voluptas.
											Dolorum sunt officia voluptatum?
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
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Unde porro veritatis sequi provident dolor,
											illum, magni blanditiis possimus iste,
											debitis quaerat sit obcaecati eligendi incidunt quia repudiandae quam quo numquam.
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
