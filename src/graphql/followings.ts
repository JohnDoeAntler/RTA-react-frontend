import { gql } from "apollo-boost";

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