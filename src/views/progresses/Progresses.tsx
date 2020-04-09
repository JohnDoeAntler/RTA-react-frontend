import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_PROGRESSES } from './graphql';
import { GetProgresses, GetProgressesVariables } from '../../types/api';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../utils/react-auth0-spa';

interface IProgressesProps {
};

export const Progresses: React.FC<IProgressesProps> = (props) => {

	const { id } = useAuth0();

	const { data, loading } = useQuery<GetProgresses, GetProgressesVariables>(GET_PROGRESSES, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			Progresses works.

			{
				data && data.progresses.map((progress) => {
					return (
						<Link to={`/work/${progress.work.id}`}>
							<pre>
								{
									JSON.stringify(progress, null, 4)
								}
							</pre>
						</Link>
					)
				})
			}
		</div>
	);
};
