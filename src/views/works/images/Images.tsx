import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { GET_IMAGE_DATAS, IMAGE_DATA_DELETE } from '../../../graphql/works';
import { GetImageDatas, GetImageDatasVariables, ImageDataDelete, ImageDataDeleteVariables } from '../../../types/api';
import axios from 'axios';

interface IImagesProps {
}

export const Images: React.FC<IImagesProps> = (props) => {

	const { id } = useParams();

	const [ state, setState ] = useState<{
		file: File | null,
	}>({
		file: null,
	});	

	const { data, loading } = useQuery<GetImageDatas, GetImageDatasVariables>(GET_IMAGE_DATAS, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	const [ imageDataDelete ] = useMutation<ImageDataDelete, ImageDataDeleteVariables>(IMAGE_DATA_DELETE);

	return (
		<div>
			Images works.

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
	)
}