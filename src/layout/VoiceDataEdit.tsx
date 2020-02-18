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
	CREATE_VOICE_DATA,
	DELETE_VOICE_DATA,
	GET_VOICE_DATA,
} from "../graphql";
import {
	CreateVoiceData,
	CreateVoiceDataVariables,
	DeleteVoiceData,
	DeleteVoiceDataVariables,
	GetVoiceData,
	GetVoiceDataVariables,
} from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";

export const VoiceDataEdit: React.FC = () => {
	const { id } = useParams();

	const [state, setState] = useState({
		isCreated: false,
	});

	const [create] = useMutation<CreateVoiceData, CreateVoiceDataVariables>(
		CREATE_VOICE_DATA,
	);

	const [deleteById] = useMutation<DeleteVoiceData, DeleteVoiceDataVariables>(
		DELETE_VOICE_DATA,
	);

	if (state.isCreated) {
		window.location.reload();
	}

	return (
		<Grid container className="panel" direction="column" justify="center">
			<BackButton to={`/work/${id}`} />

			<Title>Edit Voice Data</Title>

			<TitleLine />

			<Query<GetVoiceData, GetVoiceDataVariables>
				query={GET_VOICE_DATA}
				variables={{ id }}
				fetchPolicy="no-cache"
			>
				{({ data, refetch }) => (
					<GridList cols={4.5} style={{ flexWrap: "nowrap" }}>
						{data &&
							data?.work.voiceDatas.map((tile) => (
								<GridListTile>
									<a href={tile.fileUrl}>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"
											alt="alt text."
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</a>
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
								label="New Voice Data URL"
								variant="filled"
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								defaultValue={props.initialValues.fileUrl}
							/>
							<Caption>
								{(props.touched.fileUrl &&
									props.errors.fileUrl) ||
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
