import { gql } from 'apollo-boost';

export const GET_USERS = gql`
	query GetUsers (
		$filter: String
	) {
		users (
			where: {
				name: {
					_ilike: $filter
				}
			}
		) {
			id
			name
			imageUrl

			followers_aggregate {
				aggregate {
					count
				}
			}
			
			followings_aggregate {
				aggregate {
					count
				}
			}

			works_aggregate {
				aggregate {
					count
				}
			} 
			
			created_at
			updated_at
		}
	}
`;

export const GET_USER_DETAIL = gql`
	query GetUserDetail (
		$id: String!
	) {
		users_by_pk (
			id: $id
		) {
			id
			name
			imageUrl
			created_at
			updated_at
			
			followers_aggregate {
				aggregate {
					count
				}
			}
			
			followings_aggregate {
				aggregate {
					count
				}
			}
			
			works {
				id
				name
				description
				imageUrl
				views
				usage
				
				created_at
				updated_at
			}
		}
	}
`;

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