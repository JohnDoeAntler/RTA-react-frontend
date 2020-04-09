import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { GET_AUDIO_DATAS } from './graphql';
import { GetAudioDatas, GetAudioDatasVariables } from '../../../types/api';
import axios from 'axios';

interface IAudiosProps {
}

export const Audios: React.FC<IAudiosProps> = (props) => {

	const { id } = useParams();

	const [ state, setState ] = useState<{
		file: File | null,
	}>({
		file: null,
	});	

	const { data, loading } = useQuery<GetAudioDatas, GetAudioDatasVariables>(GET_AUDIO_DATAS, {
		variables: {
			id,
		},
	});

	return (
		<div>
			Audios works.

			<pre>
				{
					JSON.stringify(data, null, 4)
				}
			</pre>

			<form onSubmit={(e) => {
				e.preventDefault();

				if (state.file) {
					const endpoint = `${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/audio`;
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