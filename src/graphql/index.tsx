import { gql } from "apollo-boost";

export const GET_USER = gql`
	query GetUser (
		$id: ID!
	) {
		user (
			where: {
				id: $id
			}
		) {
			id
			email
			name
			role
			imageUrl
			createdAt
			updatedAt
		}
	}
`;

export const GET_WORK = gql`
	query GetWork (
		$id: ID!
	) {
		work (
			where: {
				id: $id
			}
		) {
			id
			name
			description
			visibility
			views
			usage
			likedBy {
				id
			}
			favouritedBy {
				id
			}
			category {
				id
				name
			}
			user {
				id
				email
				name
				role
				imageUrl
				createdAt
				updatedAt
			}
			comments {
				id
				content
				user {
					id
					name
					imageUrl
				}
				createdAt
			}
			imageUrl
			createdAt
			updatedAt
		}
	}
`;

export const LOGIN = gql`
	mutation Login (
		$email: String!,
		$password: String!
	) {
		login (
			email: $email
			password: $password
		) {
			token
			user {
				id
				email
				name
				role
			}
		}
	}
`;

export const SIGNUP = gql`
	mutation Register (
		$email: String!,
		$password: String!,
		$name: String!,
	) {
		signup (
			email: $email
			password: $password
			name: $name
		) {
			token
			user {
				id
				email
				name
				role
			}
		}
	}
`;

export const GET_USER_LIST = gql`
	query GetUserList (
		$where: UserWhereInput
		$orderBy: UserOrderByInput
		$skip: Int
		$after: String
		$before: String
		$first: Int
		$last: Int
	) {
		users (
			where: $where
			orderBy: $orderBy
			skip: $skip
			after: $after
			before: $before
			first: $first
			last: $last
		) {
			id
			email
			name
			role
			imageUrl
			createdAt
			updatedAt
		}
	}
`;

export const GET_WORK_LIST = gql`
	query GetWorkList (
		$where: WorkWhereInput
		$orderBy: WorkOrderByInput
		$skip: Int
		$after: String
		$before: String
		$first: Int
		$last: Int
	) {
		works (
			where: $where
			orderBy: $orderBy
			skip: $skip
			after: $after
			before: $before
			first: $first
			last: $last
		) {
			id
			name
			description
			visibility
			views
			usage
			imageUrl
			user {
				id
				email
				name
				role
				imageUrl
				createdAt
				updatedAt
			}
			category {
				id
				name
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;

export const IS_FOLLOWING = gql`
	query IsFollowing(
		$me: ID
		$target: ID
	) {
		usersConnection (
			where: {
				id: $me,
				following_some: {
					id: $target
				}
			}
		){
			aggregate {
				count
			}
		}
	}
`;

export const FOLLOW_USER = gql`
	mutation FollowUser(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				following: {
					connect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const UNFOLLOW_USER = gql`
	mutation UnfollowUser(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				following: {
					disconnect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const IS_LIKED = gql`
	query IsLiked(
		$me: ID
		$target: ID
	) {
		usersConnection (
			where: {
				id: $me,
				liked_some: {
					id: $target
				}
			}
		){
			aggregate {
				count
			}
		}
	}
`;

export const LIKE_WORK = gql`
	mutation LikeWork(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				liked: {
					connect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const UNLIKE_WORK = gql`
	mutation UnlikeWork(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				liked: {
					disconnect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const IS_FAVOURITED = gql`
	query IsFavourited(
		$me: ID
		$target: ID
	) {
		usersConnection (
			where: {
				id: $me,
				favourited_some: {
					id: $target
				}
			}
		){
			aggregate {
				count
			}
		}
	}
`;

export const FAVOURITE_WORK = gql`
	mutation FavouriteWork(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				favourited: {
					connect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const UNFAVOURITE_WORK = gql`
	mutation UnfavouriteWork(
		$me: ID
		$target: ID
	) {
		updateUser(
			where: {
				id: $me
			}
			data: {
				favourited: {
					disconnect: {
						id: $target
					}
				}
			}
		){
			id
		}
	}
`;

export const COMMENT_WORK = gql`
	mutation CommentWork(
		$user: ID
		$work: ID
		$content: String!
	) {
		createComment (
			data: {
				work: {
					connect: {
						id: $work
					}
				}
				user: {
					connect: {
						id: $user
					}
				}
				content: $content
			}
		){
			id
		}
	}
`;

export const GET_FOLLOWINGS = gql`
	query GetFollowings(
		$id: ID
		$filter: String
	) {
		user(where: { id: $id } ) {
			following (
				where: {
					name_contains: $filter
				}
			) {
				id
				name
				imageUrl
				createdAt
			}
		}
	}
`;

export const GET_USER_NAME_AND_IMAGEURL = gql`
	query GetUserNameAndImageUrl (
		$id: ID
	) {
		user (
			where: {
				id: $id
			}
		) {
			name
			imageUrl
		}
	}
`;

export const UPDATE_USER_NAME_AND_IMAGEURL = gql`
	mutation UpdateUserNameAndImageUrl (
		$id: ID
		$name: String
		$imageUrl: String
	) {
		updateUser (
			where: {
				id: $id
			}
			data: {
				name: $name
				imageUrl: $imageUrl
			}
		) {
			id
		}
	}
`;

export const GET_WORK_FOR_EDITING = gql`
	query GetWorkForEditing (
		$id: ID
	) {
		work: work (
			where: {
				id: $id
			}
		) {
			name
			description
			category {
				id
			}
			imageUrl
			visibility
		}
		categories {
			id
			name
		}
	}
`;

export const UPDATE_WORK = gql`
	mutation UpdateWork (
		$id: ID
		$name: String
		$description: String
		$visibility: Boolean
		$imageUrl: String
		$categoryId: ID
	) {
		updateWork(
			where: {
				id: $id
			}
			data: {
				name: $name
				description: $description
				visibility: $visibility
				imageUrl: $imageUrl
				category: {
					connect: {
						id: $categoryId
					}
				}
			}
		) {
			id
		}
	}
`;

export const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			id
			name
		}
	}
`;

export const CREATE_WORK = gql`
	mutation CreateWork (
		$id: ID
		$name: String!
		$description: String!
		$visibility: Boolean!
		$imageUrl: String!
		$categoryId: ID
	) {
		createWork (
			data: {
				name: $name
				description: $description
				visibility: $visibility
				imageUrl: $imageUrl
				views: 0
				usage: 0
				category: {
					connect: {
						id: $categoryId
					}
				}
				user: {
					connect: {
						id: $id
					}
				}
			}
		) {
			id
		}
	}
`;

export const GET_IMAGE_DATA = gql`
	query GetImageData (
		$id: ID
	) {
		work(
			where: {
				id: $id
			}
		) {
			imageDatas {
				id
				fileUrl
				createdAt
			}
		}
	}
`;

export const CREATE_IMAGE_DATA = gql`
	mutation CreateImageData (
		$workId: ID
		$fileUrl: String!
	) {
		createImageData (
			data: {
				work: {
					connect: {
						id: $workId
					}
				}
				fileUrl: $fileUrl
			}
		) {
			id
		}
	}
`;

export const DELETE_IMAGE_DATA = gql`
	mutation DeleteImageData (
		$id: ID
	) {
		deleteImageData(
			where: {
				id: $id
			}
		) {
			id
		}
	}
`;

export const GET_VOICE_DATA = gql`
	query GetVoiceData (
		$id: ID
	) {
		work(
			where: {
				id: $id
			}
		) {
			voiceDatas {
				id
				fileUrl
				createdAt
			}
		}
	}
`;

export const CREATE_VOICE_DATA = gql`
	mutation CreateVoiceData (
		$workId: ID
		$fileUrl: String!
	) {
		createVoiceData (
			data: {
				work: {
					connect: {
						id: $workId
					}
				}
				fileUrl: $fileUrl
			}
		) {
			id
		}
	}
`;

export const DELETE_VOICE_DATA = gql`
	mutation DeleteVoiceData (
		$id: ID
	) {
		deleteVoiceData(
			where: {
				id: $id
			}
		) {
			id
		}
	}
`;

export const REPORT_WORK = gql`
	mutation ReportWork(
		$user: ID
		$work: ID
		$reason: String!
	) {
		createReport (
			data: {
				work: {
					connect: {
						id: $work
					}
				}
				user: {
					connect: {
						id: $user
					}
				}
				reason: $reason
			}
		){
			id
		}
	}
`;