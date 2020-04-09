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