import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { WORK_NEW } from './graphql';
import { WorkNew as Mutation, WorkNewVariables as Variables } from '../../../types/api';

interface IWorkNewProps {
};

export const WorkNew: React.FC<IWorkNewProps> = (props) => {

	const [ state, setState ] = useState({
		name: '',
		description: '',
		imageUrl: '',
		visibility: false,
	});

	const [ createWork, { data, error, loading } ] = useMutation<Mutation, Variables>(WORK_NEW);

	return (
		<div>
			WorkNew works.

			<form onSubmit={(e) => {
				e.preventDefault();
				createWork({
					variables: {
						...state,
					}
				}).then(() => {
					console.log("work created.");
				}).catch((e) => {
					console.error(e);
				})
			}}>
				<div>
					name
					<input type="text" onChange={(e) => setState({
						...state,
						name: e.currentTarget.value
					})}/>
				</div>

				<div>
					description
					<input type="text" onChange={(e) => setState({
						...state,
						description: e.currentTarget.value
					})}/>
				</div>

				<div>
					imageUrl
					<input type="text" onChange={(e) => setState({
						...state,
						imageUrl: e.currentTarget.value
					})}/>
				</div>

				<div>
					visibility
					<input type="checkbox" onChange={(e) => setState({
						...state,
						visibility: e.currentTarget.checked
					})}/>
				</div>

				<button type="submit">submit</button>
			</form>
		</div>
	);
};
