import { gql } from 'apollo-boost';

export const COMMENT = gql`
	mutation Comment (
		$workId: uuid!
		$content: String!
	) {
		insert_comments(
			objects: {
				workId: $workId,
				content: $content,
			}
		) {
			returning {
				id
			}
		}
	}
`;