import { gql } from 'apollo-boost';

export const GET_WORK_EDIT = gql`
	query GetWorkEdit (
		$id: uuid!
	) {
		works_by_pk (
			id: $id
		) {
			name
			description
			imageUrl
			visibility
		}
	}
`;

export const WORK_EDIT = gql`
	mutation WorkEdit (
		$id: uuid!
		$name: String
		$description: String
		$imageUrl: String
		$visibility: Boolean
	) {
		update_works (
			where: {
				id: {
					_eq: $id
				}
			}
			_set: {
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