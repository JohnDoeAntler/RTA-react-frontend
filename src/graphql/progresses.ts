import { gql } from 'apollo-boost';

export const GET_PROGRESSES = gql`
	query GetProgresses(
		$id: String!
	) {
		progresses(
			where: {
				userId: {
					_eq: $id
				}
			}
		) {
			id
			progress
			drivingVideoUrl
			resultUrl
			isProcessing

			work {
				id
				name
				description
				imageUrl

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
			}

			created_at
			updated_at
		}
	}
`;

export const PROGRESS_NEW = gql`
	mutation ProgressNew(
		$drivingVideoUrl: String!
		$workId: uuid!
	) {
		insert_progresses(
			objects: {
				drivingVideoUrl: $drivingVideoUrl,
				workId: $workId
			}
		) {
			returning {
				id
			}
		}
	}
`;