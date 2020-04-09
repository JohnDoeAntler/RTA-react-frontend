/** @format */

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
