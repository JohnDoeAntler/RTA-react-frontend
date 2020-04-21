import { gql } from "apollo-boost";

export const GET_WORKS = gql`
	query GetWorks($filter: String) {
		works (
			where: {
				_or: [
					{
						name: {
							_ilike: $filter
						},
					}, {
						description: {
							_ilike: $filter
						}
					}
				]
			}
		) {
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
	}
`;

export const GET_WORK = gql`
	query GetWork(
		$id: uuid!
	) {
		works_by_pk(
			id: $id
		) {
			name
			description
			imageUrl
			visibility

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

			comments {
				id
				content
				user {
					id
					name
					imageUrl
					created_at
					updated_at
				}
				created_at
				updated_at
			}

			user {
				id
				name
				imageUrl
				created_at
				updated_at
			}
		}
	}
`;

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

export const GET_IMAGE_DATAS = gql`
	query GetImageDatas (
		$id: uuid!
	) {
		image_datas (
			where: {
				workId: {
					_eq: $id
				}
			}
		) {
			id
			fileUrl
		}
	}
`;

export const IMAGE_DATA_DELETE = gql`
	mutation ImageDataDelete (
		$id: uuid!
	) {
		delete_image_datas (
			where: {
				id: {
					_eq: $id
				}
			}
		) {
			affected_rows
		}
	}
`;

export const GET_AUDIO_DATAS = gql`
	query GetAudioDatas (
		$id: uuid!
	) {
		audio_datas (
			where: {
				workId: {
					_eq: $id
				}
			}
		) {
			id
			fileUrl
		}
	}
`;

export const AUDIO_DATA_DELETE = gql`
	mutation AudioDataDelete (
		$id: uuid!
	) {
		delete_audio_datas (
			where: {
				id: {
					_eq: $id
				}
			}
		) {
			affected_rows
		}
	}
`;