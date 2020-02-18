/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { Redirect, useParams } from "react-router";
import { Reset } from "../component/Reset";
import { Submit } from "../component/Submit";
import { TitleLine } from "../component/TitleLine";
import {
	GET_USER_NAME_AND_IMAGEURL,
	UPDATE_USER_NAME_AND_IMAGEURL,
} from "../graphql";
import {
	GetUserNameAndImageUrl,
	GetUserNameAndImageUrlVariables,
	UpdateUserNameAndImageUrl,
	UpdateUserNameAndImageUrlVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { BackButton } from "../component/BackButton";

export const UserEdit: React.FC = () => {

	//
	// ─── PARAMS ─────────────────────────────────────────────────────────────────────
	//

	const { id } = useParams();

	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [state, setState] = useState({
		isUpdated: false,
	});

	//
	// ─── QUERY ──────────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<
		GetUserNameAndImageUrl,
		GetUserNameAndImageUrlVariables
	>(GET_USER_NAME_AND_IMAGEURL, {
		variables: {
			id,
		},
	});

	//
	// ─── MUTATION ───────────────────────────────────────────────────────────────────
	//

	const [update] = useMutation<
		UpdateUserNameAndImageUrl,
		UpdateUserNameAndImageUrlVariables
	>(UPDATE_USER_NAME_AND_IMAGEURL);

	//
	// ─── REDIRECTION ────────────────────────────────────────────────────────────────
	//

	if (state.isUpdated) {
		return <Redirect to={`/user/${id}`} />;
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<BackButton to={`/user/${id}`} />
			<Title>Edit User Information</Title>

			<TitleLine />

			{data?.user && (
				<Formik
					initialValues={data.user}
					onSubmit={(props) => {
						update({
							variables: {
								id,
								name: props.name,
								imageUrl: props.imageUrl,
							},
						}).then(() => {
							setState({
								isUpdated: true,
							});
						});
					}}
					enableReinitialize={true}
				>
					{(props) => (
						<Form>
							<Box my={3}>
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
								<Caption>
									{(props.touched.name &&
										props.errors.name) ||
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
									name="imageUrl"
									label="Image URL"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={props.initialValues.imageUrl}
								/>
								<Caption>
									{(props.touched.imageUrl &&
										props.errors.imageUrl) ||
										`
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Consequatur explicabo doloremque illum, mollitia eveniet dolor aspernatur earum,
										ipsam asperiores expedita ut id soluta ducimus facilis voluptas.
										Dolorum sunt officia voluptatum?
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
			)}
		</Grid>
	);
};
