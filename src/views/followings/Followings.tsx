import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_FOLLOWINGS } from '../../graphql/followings';
import { GetFollowings, GetFollowingsVariables } from '../../types/api';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Link } from 'react-router-dom';

interface IFollowingsProps {
};

export const Followings: React.FC<IFollowingsProps> = (props) => {

	const { id } = useAuth0();

	const [ state, setState ] = useState({
		filter: '',
	});

	const { data } = useQuery<GetFollowings, GetFollowingsVariables>(GET_FOLLOWINGS, {
		variables: {
			id,
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			Followings works.

			<input type="text" onChange={(e) => {
				setState({
					...state,
					filter: e.currentTarget.value,
				})
			}} />

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
	);
};