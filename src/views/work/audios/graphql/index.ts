import { gql } from 'apollo-boost';

export const GET_AUDIO_DATAS = gql`
	query GetAudioDatas (
		$id: uuid!
	) {
		audio_datas (
			where: {
				workId: {
					_eq: $id
				}
			}
		) {
			id
			fileUrl
		}
	}
`;

export const AUDIO_DATA_DELETE = gql`
	mutation AudioDataDelete (
		$id: uuid!
	) {
		delete_audio_datas (
			where: {
				id: {
					_eq: $id
				}
			}
		) {
			affected_rows
		}
	}
`;