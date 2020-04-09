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

export const IMAGE_DATA_DELETE = gql`
	mutation ImageDataDelete (
		$id: uuid!
	) {
		delete_image_datas (
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
