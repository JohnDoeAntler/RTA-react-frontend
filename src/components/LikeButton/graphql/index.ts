import { gql } from 'apollo-boost';

export const GET_IS_LIKED = gql`
	query GetIsLiked(
		$id: uuid!
	) {
		works_by_pk(
			id: $id
		) {
			likes {
				userId
			}
		}
	}
`;


export const LIKE = gql`
	mutation Like (
		$id: uuid!,
	) {
		insert_likes (
			objects: {
				workId: $id
			}
		) {
			affected_rows
		}
	}
`;

export const UNLIKE = gql`
	mutation Unlike (
		$userId: String!
		$workId: uuid!
	){
	delete_likes (
			where: {
				userId: {
					_eq: $userId
				}
				workId: {
					_eq: $workId
				}
			}
		) {
			affected_rows
		}
	}
`;