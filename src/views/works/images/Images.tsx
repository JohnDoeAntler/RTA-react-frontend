import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { AddImageButton } from '../../../components/AddImageButton/AddImageButton';
import { DataList } from '../../../components/DataList/DataList';
import { GET_IMAGE_DATAS, IMAGE_DATA_DELETE } from '../../../graphql/works';
import { GetImageDatas, GetImageDatasVariables, ImageDataDelete, ImageDataDeleteVariables } from '../../../types/api';

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

	const [imageDataDelete] = useMutation<ImageDataDelete, ImageDataDeleteVariables>(IMAGE_DATA_DELETE);

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
							<AddImageButton
								workId={id || ''}
								onAddedImage={() => refetch()}
							/>
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
							{
								data && (
									<DataList
										datas={data.image_datas}
										remove={imageDataDelete}
										onRemoved={() => refetch()}
									/>
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
		
	)
}