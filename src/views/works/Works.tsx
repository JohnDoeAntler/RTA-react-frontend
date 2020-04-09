import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GetWorks, GetWorksVariables } from '../../types/api';
import { GET_WORKS } from './graphql';
import { Link } from 'react-router-dom';

interface IWorksProps {
};

export const Works: React.FC<IWorksProps> = (props) => {

	const [ state, setState ] = useState({
		filter: '',
	})

	const { data, loading } = useQuery<GetWorks, GetWorksVariables>(GET_WORKS, {
		variables: {
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			<Link to="/work/new">
				New
			</Link>

			<input type="text" onChange={(e) => {
				setState({
					...state,
					filter: e.currentTarget.value,
				})
			}}/>

			{
				data && data.works.map((work) => (
					<Link to={`/work/${work.id}`}>
						<pre>
							{
								JSON.stringify(work, null, 4)
							}
						</pre>
					</Link>
				))
			}
		</div>
	);
};