import { gql } from 'apollo-boost';

export const REPORT = gql`
	mutation Report (
		$workId: uuid!
		$reason: String!
	) {
		insert_reports(
			objects: {
				workId: $workId,
				reason: $reason,
			}
		) {
			returning {
				id
			}
		}
	}
`;