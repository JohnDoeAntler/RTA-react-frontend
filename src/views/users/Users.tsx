import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_USERS } from './graphql';
import { GetUsers, GetUsersVariables } from '../../types/api';
import { Link } from 'react-router-dom';

interface IUsersProps {
};

export const Users: React.FC<IUsersProps> = (props) => {

	const [ state, setState ] = useState({
		filter: "",
	});

	const { data } = useQuery<GetUsers, GetUsersVariables>(GET_USERS, {
		variables: {
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			Users works.

			<input type="text" onChange={(e) => {
				setState({
					...state,
					filter: e.currentTarget.value,
				})
			}}/>

			{
				data && data.users.map((user) => {
					return (
						<Link to={`/user/${user.id}`}>
							<pre>
								{
									JSON.stringify(user, null, 4)
								}
							</pre>
						</Link>
					)
				})
			}
		</div>
	)
};