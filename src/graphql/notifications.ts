
import { gql } from 'apollo-boost';

export const GET_NOTIFICATIONS = gql`
	query GetNotifications (
		$id: String!
	) { 
		notifications (
			where: {
				userId: {
					_eq: $id
				}
			}
		) {
			id
			content
			created_at
			updated_at
		}
	}
`;