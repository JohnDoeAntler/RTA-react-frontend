import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { GET_AUDIO_DATAS, AUDIO_DATA_DELETE } from '../../../graphql/works';
import { GetAudioDatas, GetAudioDatasVariables, AudioDataDelete, AudioDataDeleteVariables } from '../../../types/api';
import { Container, Grid, Tooltip } from '@material-ui/core';
import { AddAudioButton } from '../../../components/AddAudioButton/AddAudioButton';

interface IAudiosProps {
}

export const Audios: React.FC<IAudiosProps> = (props) => {

	const { id } = useParams();

	const { data, refetch } = useQuery<GetAudioDatas, GetAudioDatasVariables>(GET_AUDIO_DATAS, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	const [ audioDataDelete ] = useMutation<AudioDataDelete, AudioDataDeleteVariables>(AUDIO_DATA_DELETE);

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
							<span className="title-text">Audio training datas</span>
						</Grid>

						<Grid item>
							<hr />

							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</Grid>

						<Grid item>
							<Tooltip title="Add image training data.">
								<AddAudioButton
									workId={id || ''}
									onAddedAudio={() => refetch()}
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
									data && data.audio_datas.map((audio) => (
										// eslint-disable-next-line jsx-a11y/anchor-is-valid
										<a href="#" onClick={() => {
											audioDataDelete({
												variables: {
													id: audio.id,
												}
											})
										}}>
											<pre>
												{
													JSON.stringify(audio, null, 4)
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