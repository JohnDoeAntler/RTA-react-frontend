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