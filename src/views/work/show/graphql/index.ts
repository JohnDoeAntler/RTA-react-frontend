/** @format */

import { gql } from "apollo-boost";

export const GET_WORK = gql`
	query GetWork(
		$id: uuid!
	) {
		works_by_pk(
			id: $id
		) {
			name
			description
			imageUrl
			visibility

			likes_aggregate {
				aggregate {
					count
				}
			}

			favourites_aggregate {
				aggregate {
					count
				}
			}

			views
			usage
			created_at
			updated_at

			comments {
				id
				content
				user {
					id
					name
					imageUrl
					created_at
					updated_at
				}
				created_at
				updated_at
			}

			user {
				id
				name
				imageUrl
				created_at
				updated_at
			}
		}
	}
`;