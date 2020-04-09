import { gql } from 'apollo-boost';

export const GET_USER_EDIT = gql`
	query GetUserEdit (
		$id: String!
	) {
		users_by_pk (
			id: $id
		) {
			name
			imageUrl
		}
	}
`;

export const USER_EDIT = gql`
	mutation UserEdit (
		$id: String!
		$name: String
		$imageUrl: String
	) {
		update_users (
			where: {
				id: {
					_eq: $id
				}
			},
			_set: {
				name: $name
				imageUrl: $imageUrl
			}
		) {
			returning {
				id
			}
		}
	}
`;
