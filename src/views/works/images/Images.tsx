import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { GET_IMAGE_DATAS, IMAGE_DATA_DELETE } from '../../../graphql/works';
import { GetImageDatas, GetImageDatasVariables, ImageDataDelete, ImageDataDeleteVariables } from '../../../types/api';
import axios from 'axios';
import { Container, Grid, TextField, Tooltip, IconButton } from '@material-ui/core';
import { UserList } from '../../../components/UserList/UserList';
import { CircleButton } from '../../../components/CircleButton/CircleButton';
import { Add } from '@material-ui/icons';
import { AddImageButton } from '../../../components/AddImageButton/AddImageButton';

interface IImagesProps {
}

export const Images: React.FC<IImagesProps> = (props) => {

	const { id } = useParams();

	const { data, refetch } = useQuery<GetImageDatas, GetImageDatasVariables>(GET_IMAGE_DATAS, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	const [ imageDataDelete ] = useMutation<ImageDataDelete, ImageDataDeleteVariables>(IMAGE_DATA_DELETE);

	return (
		<Container>
			<Grid
				container
				alignItems="center"
				spacing={4}
				style={{
					height: "100vh",
				}}>
				<Grid item xs={12} sm={6}>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<span className="title-text">Image training datas</span>
						</Grid>

						<Grid item>
							<hr />

							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</Grid>

						<Grid item>
							<Tooltip title="Add image training data.">
								<AddImageButton
									workId={id || ''}
									onAddedImage={() => refetch()}
								/>
							</Tooltip>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					sm={6}
					xs={12}
				>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<pre>
								{
									data && data.image_datas.map((image) => (
										// eslint-disable-next-line jsx-a11y/anchor-is-valid
										<a href="#" onClick={() => {
											imageDataDelete({
												variables: {
													id: image.id,
												}
											})
										}}>
											<pre>
												{
													JSON.stringify(image, null, 4)
												}
											</pre>
										</a>
									))
								}
							</pre>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
		
	)
}

/**
 * <div>
			Images works.

			

			<form onSubmit={(e) => {
				e.preventDefault();

				if (state.file) {
					const endpoint = `${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/image`;
					const formData = new FormData();
					formData.append('id', id || "");
					formData.append('file', state.file);
					const config = {
						headers: {
							'content-type': 'multipart/form-data',
						},
					};
					axios.post(endpoint, formData, config).then(x => {
						console.log(x);
					});
				}
			}}>
				<input type="file" onChange={(e) => setState({
					file: e.currentTarget.files && e.currentTarget.files[0],
				})}/>

				<button type="submit">submit</button>
			</form>
		</div>
 */