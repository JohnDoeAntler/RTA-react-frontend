import { gql } from 'apollo-boost';

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
