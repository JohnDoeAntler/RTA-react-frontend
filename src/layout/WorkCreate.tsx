/** @format */

import {
	Box,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	TextField,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Query, useMutation } from "react-apollo";
import { Redirect } from "react-router";
import { BackButton } from "../component/BackButton";
import { Reset } from "../component/Reset";
import { Submit } from "../component/Submit";
import { TitleLine } from "../component/TitleLine";
import { CREATE_WORK, GET_CATEGORIES } from "../graphql";
import { CreateWork, CreateWorkVariables, GetCategories } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getId } from "../utils/UserHelper";

export const WorkCreate: React.FC = () => {
	const [state, setState] = useState({
		isCreated: false,
		createdId: "",
		toggle: false,
		categoryId: "",
	});

	const [create] = useMutation<CreateWork, CreateWorkVariables>(CREATE_WORK);

	const handleToggle = () => {
		setState({
			...state,
			toggle: !state.toggle,
		});
	};

	const handleCategoryId = (id: string) => {
		setState({
			...state,
			categoryId: id,
		});
	};

	if (state.isCreated) {
		return <Redirect to={`/work/${state.createdId}`} />;
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<BackButton to="/work/" />

			<Title>Create Work</Title>

			<TitleLine />

			<Formik
				initialValues={{
					name: "",
					description: "",
					visibility: false,
					categoryId: "",
					imageUrl: "",
				}}
				onSubmit={(props) => {
					create({
						variables: {
							id: getId(),
							name: props.name,
							description: props.description,
							visibility: state.toggle,
							imageUrl: props.imageUrl,
							categoryId: state.categoryId,
						},
					}).then((data) => {
						setState({
							...state,
							isCreated: true,
							createdId: data.data?.createWork.id || "",
						});
					});
				}}
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
								{(props.touched.name && props.errors.name) ||
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
								multiline
								name="description"
								label="Description"
								variant="filled"
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								defaultValue={props.initialValues.description}
							/>
							<Caption>
								{(props.touched.description &&
									props.errors.description) ||
									`
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur explicabo doloremque illum, mollitia eveniet dolor aspernatur earum,
									ipsam asperiores expedita ut id soluta ducimus facilis voluptas.
									Dolorum sunt officia voluptatum?
								`}
							</Caption>
						</Box>
						<Box my={3}>
							<FormControl fullWidth variant="filled">
								<InputLabel id="category-label">
									Category
								</InputLabel>
								<Query<GetCategories> query={GET_CATEGORIES}>
									{({ data }) => {
										return (
											<Select
												labelId="category-label"
												name="categoryId"
												value={state.categoryId}
												onChange={(e) =>
													handleCategoryId(
														e.target
															.value as string,
													)
												}
											>
												{data &&
													data.categories.map(
														(category) => (
															<MenuItem
																value={
																	category.id
																}
															>
																{category.name}
															</MenuItem>
														),
													)}
											</Select>
										);
									}}
								</Query>
							</FormControl>
							<Caption>
								{(props.touched.categoryId &&
									props.errors.categoryId) ||
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
						<Box my={3}>
							<FormControlLabel
								control={
									<Field
										label="Visibility"
										name="Visibility"
										component={Switch}
										onChange={handleToggle}
										checked={state.toggle}
									/>
								}
								label="Visibility"
							/>
							<Caption>
								Ex Lorem consequat culpa qui ut voluptate
								ullamco in labore.
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
	);
};
