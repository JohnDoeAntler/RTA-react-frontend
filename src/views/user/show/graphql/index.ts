import { gql } from "apollo-boost";

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
