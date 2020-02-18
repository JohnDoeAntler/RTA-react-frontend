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
import { useMutation, useQuery } from "react-apollo";
import { Redirect, useParams } from "react-router";
import { BackButton } from "../component/BackButton";
import { Reset } from "../component/Reset";
import { Submit } from "../component/Submit";
import { TitleLine } from "../component/TitleLine";
import { GET_WORK_FOR_EDITING, UPDATE_WORK } from "../graphql";
import {
	GetWorkForEditing,
	GetWorkForEditingVariables,
	UpdateWork,
	UpdateWorkVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";

export const WorkEdit: React.FC = () => {
	const { id } = useParams();

	const [state, setState] = useState({
		isUpdated: false,
		toggle: false,
		categoryId: "",
	});

	const { data } = useQuery<GetWorkForEditing, GetWorkForEditingVariables>(
		GET_WORK_FOR_EDITING,
		{
			variables: {
				id,
			},
			onCompleted: (data) => {
				setState({
					...state,
					toggle: data.work.visibility,
					categoryId: data.work.category.id,
				});
			},
			fetchPolicy: "no-cache",
		},
	);

	const [update] = useMutation<UpdateWork, UpdateWorkVariables>(UPDATE_WORK);

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

	if (state.isUpdated) {
		return <Redirect to={`/work/${id}`} />;
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<BackButton to={`/work/${id}`} />
			<Title>Edit Work</Title>

			<TitleLine />

			{data?.work && (
				<Formik
					initialValues={{
						name: data?.work.name || "",
						description: data?.work.description || "",
						visibility: data?.work.visibility,
						categoryId: data?.work.category.id || "",
						imageUrl: data?.work.imageUrl || "",
					}}
					onSubmit={(props) => {
						update({
							variables: {
								id,
								name: props.name,
								description: props.description,
								visibility: state.toggle,
								imageUrl: props.imageUrl,
								categoryId: state.categoryId,
							},
						}).then(() => {
							setState({
								...state,
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
									multiline
									name="description"
									label="Description"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									defaultValue={
										props.initialValues.description
									}
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
									<Select
										labelId="category-label"
										name="categoryId"
										value={state.categoryId}
										onChange={(e) =>
											handleCategoryId(
												e.target.value as string,
											)
										}
									>
										{data.categories.map((category) => (
											<MenuItem key={category.id} value={category.id}>
												{category.name}
											</MenuItem>
										))}
									</Select>
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
			)}
		</Grid>
	);
};
