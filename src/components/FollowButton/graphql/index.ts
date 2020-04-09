import { gql } from 'apollo-boost';

export const GET_IS_FOLLOWED = gql`
	query GetIsFollowed (
		$followerId: String!
	) {
		followings (
			where: {
				followerId: {
					_eq: $followerId
				}
			}
		) {
			followingId
		}
	}
`;

export const FOLLOW = gql`
	mutation Follow (
		$followingId: String!,
	) {
		insert_followings (
			objects: {
				followingId: $followingId
			}
		) {
			affected_rows
		}
	}
`;

export const UNFOLLOW = gql`
	mutation UnFollow (
		$followerId: String!
		$followingId: String!
	){
		delete_followings (
			where: {
				followerId: {
					_eq: $followerId
				}
				followingId: {
					_eq: $followingId
				}
			}
		) {
			affected_rows
		}
	}
`;