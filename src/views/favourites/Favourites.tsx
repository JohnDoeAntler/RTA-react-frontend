import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GetFavourites, GetFavouritesVariables } from '../../types/api';
import { GET_FAVOURITES } from '../../graphql/favourites';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Link } from 'react-router-dom';

interface IFavouritesProps {
};

export const Favourites: React.FC<IFavouritesProps> = (props) => {

	const { id } = useAuth0();

	const [ state, setState ] = useState({
		filter: '',
	})

	const { data, loading } = useQuery<GetFavourites, GetFavouritesVariables>(GET_FAVOURITES, {
		variables: {
			id,
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			Favourites works.

			<input type="text" onChange={(e) => {
				setState({
					...state,
					filter: e.currentTarget.value,
				})
			}} />

			{
				data && data.favourites.map((favourite) => {
					return (
						<Link to={`/works/${favourite.work.id}`}>
							<pre>
								{
									JSON.stringify(favourite, null, 4)
								}
							</pre>
						</Link>
					)
				})
			}
		</div>
	);
};
