import { gql } from 'apollo-boost';

export const WORK_NEW = gql`
	mutation WorkNew (
		$name: String!
		$description: String!
		$imageUrl: String!
		$visibility: Boolean!
	) {
		insert_works(
			objects: {
				name: $name,
				description: $description,
				imageUrl: $imageUrl,
				visibility: $visibility
			}
		) {
			returning {
				id
			}
		}
	}
`;