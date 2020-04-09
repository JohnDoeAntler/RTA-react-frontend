/** @format */

import { gql } from "apollo-boost";
//(where: { followers: { followerId: { _eq: "auth0|5e89a1ee6595110c10cdbbf7" } } })

export const GET_FOLLOWINGS = gql`
	query GetFollowings (
		$id: String!
		$filter: String!
	) {
		users (
			where: {
				_and: [
					{
						followers: {
							followerId: {
								_eq: $id
							} 
						},
					}, {
						name: {
							_like: $filter
						}
					}
				]
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
