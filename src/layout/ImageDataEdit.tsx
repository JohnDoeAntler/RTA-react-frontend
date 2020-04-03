/** @format */

import {
	Box,
	Grid,
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
	TextField,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Query, useMutation } from "react-apollo";
import { useParams } from "react-router-dom";
import { BackButton } from "../component/BackButton";
import { Reset } from "../component/Reset";
import { Submit } from "../component/Submit";
import { TitleLine } from "../component/TitleLine";
import {
	CREATE_IMAGE_DATA,
	DELETE_IMAGE_DATA,
	GET_IMAGE_DATA,
} from "../graphql";
import {
	CreateImageData,
	CreateImageDataVariables,
	DeleteImageData,
	DeleteImageDataVariables,
	GetImageData,
	GetImageDataVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { PageAnimator } from "../component/PageAnimator";
import * as Yup from "yup";

const schema = Yup.object().shape({

	fileUrl: Yup
		.string()
		.required()
		.url(),

});

export const ImageDataEdit: React.FC = () => {
	const { id } = useParams();

	const [state, setState] = useState({
		isCreated: false,
	});

	const [create] = useMutation<CreateImageData, CreateImageDataVariables>(
		CREATE_IMAGE_DATA,
	);

	const [deleteById] = useMutation<DeleteImageData, DeleteImageDataVariables>(
		DELETE_IMAGE_DATA,
	);

	if (state.isCreated) {
		window.location.reload();
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<PageAnimator/>

			<BackButton to={`/work/${id}`} />

			<Title>Edit Image Data</Title>

			<TitleLine />

			<Query<GetImageData, GetImageDataVariables>
				query={GET_IMAGE_DATA}
				variables={{ id }}
				fetchPolicy="no-cache"
			>
				{({ data, refetch }) => (
					<GridList cols={4.5} style={{ flexWrap: "nowrap" }}>
						{data &&
							data?.work.imageDatas.map((tile) => (
								<GridListTile>
									<img src={tile.fileUrl} alt="alt text." />
									<GridListTileBar
										actionIcon={
											<IconButton
												color="secondary"
												onClick={() => {
													deleteById({
														variables: {
															id: tile.id,
														},
													}).then(() => {
														refetch();
													});
												}}
											>
												<Delete />
											</IconButton>
										}
									/>
								</GridListTile>
							))}
					</GridList>
				)}
			</Query>

			<Formik
				initialValues={{
					fileUrl: "",
				}}
				validationSchema={schema}
				onSubmit={(props) =>
					create({
						variables: {
							workId: id,
							fileUrl: props.fileUrl,
						},
					}).then(() => {
						setState({
							isCreated: true,
						});
					})
				}
			>
				{(props) => (
					<Form>
						<Box my={3}>
							<TextField
								fullWidth
								name="fileUrl"
								label="New Image Data URL"
								variant="filled"
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								defaultValue={props.initialValues.fileUrl}
								autoFocus
							/>
							<Caption>
								{(props.touched.fileUrl && props.errors.fileUrl ) ? (<span className="error-message">{props.errors.fileUrl}</span>) : 
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
		</Grid>
	);
};
