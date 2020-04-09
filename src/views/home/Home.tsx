import React from 'react';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { GetUser, GetUserVariables } from '../../types/api';
import { Link } from 'react-router-dom';

interface IHomeProps {
};

export const Home: React.FC<IHomeProps> = (props) => {

	const {
		id,
	} = useAuth0();

	const query = gql`
		query GetUser (
			$id: String!
		) {
			users_by_pk (
				id: $id
			) {
				id
				name
				imageUrl
				created_at
				updated_at
			}
		}
	`;

	const { data, error, loading } = useQuery<GetUser, GetUserVariables>(query, {
		variables: {
			id,
		}
	});

	console.log(id);

	if (loading) {
		return (
			<div>
				loading.
			</div>
		)
	} else {
		console.log(data)
	}

	return (
		<div>
			Hello, {data?.users_by_pk.name}

			<div>
				<Link to="/users">Users</Link>
			</div>

			<div>
				<Link to="/works">Works</Link>
			</div>

			<div>
				<Link to="/followings">Followings</Link>
			</div>

			<div>
				<Link to="/favourites">Favourites</Link>
			</div>
		</div>
	);
};