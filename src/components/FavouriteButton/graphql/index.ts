import { gql } from "apollo-boost";

export const GET_IS_FAVOURITED = gql`
	query GetIsFavourited (
		$id: uuid!
	) {
		works_by_pk(
			id: $id
		) {
			favourites {
				userId
			}
		}
	}
`;

export const FAVOURITE = gql`
	mutation Favourite (
		$id: uuid!,
	) {
		insert_favourites (
			objects: {
				workId: $id
			}
		) {
			affected_rows
		}
	}
`;

export const UNFAVOURITE = gql`
	mutation Unfavourite(
		$userId: String!
		$workId: uuid!
	){
		delete_favourites (
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