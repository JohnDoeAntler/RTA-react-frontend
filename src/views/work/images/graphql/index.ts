import { gql } from 'apollo-boost';

export const GET_IMAGE_DATAS = gql`
	query GetImageDatas (
		$id: uuid!
	) {
		image_datas (
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