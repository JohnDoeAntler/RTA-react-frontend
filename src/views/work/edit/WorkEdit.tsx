import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { WORK_EDIT, GET_WORK_EDIT } from './graphql';
import { useMutation, useQuery } from 'react-apollo';
import { WorkEdit as Mutation, WorkEditVariables as Variables, GetWorkEdit, GetWorkEditVariables } from '../../../types/api';

interface IWorkEditProps {
};

export const WorkEdit: React.FC<IWorkEditProps> = (props) => {

	const { id } = useParams();

	const [ state, setState ] = useState({
		name: '',
		description: '',
		imageUrl: '',
		visibility: false,
	});

	const { loading } = useQuery<GetWorkEdit, GetWorkEditVariables>(GET_WORK_EDIT, {
		variables: {
			id
		},
		onCompleted: (data) => {
			setState({
				...data.works_by_pk,
			});
		},
		fetchPolicy: 'no-cache'
	});

	const [ workEdit ] = useMutation<Mutation, Variables>(WORK_EDIT);

	if (loading) {
		return (
			<div>
				Loading work...
			</div>
		)
	}

	return (
		<div>
			WorkEdit works.

			<form onSubmit={(e) => {
				e.preventDefault();

				workEdit({
					variables: {
						name: state.name,
						description: state.description,
						imageUrl: state.imageUrl,
						visibility: state.visibility,
						id,
					}
				}).catch((e) => {
					console.log(e)
				})
			}}>
				<div>
					name
					<input type="text" value={state.name} onChange={(e) => setState({
						...state,
						name: e.currentTarget.value
					})}/>
				</div>

				<div>
					description
					<input type="text" value={state.description} onChange={(e) => setState({
						...state,
						description: e.currentTarget.value
					})}/>
				</div>

				<div>
					imageUrl
					<input type="text" value={state.imageUrl} onChange={(e) => setState({
						...state,
						imageUrl: e.currentTarget.value
					})}/>
				</div>

				<div>
					visibility
					<input type="checkbox" checked={state.visibility} onChange={(e) => setState({
						...state,
						visibility: e.currentTarget.checked
					})}/>
				</div>

				<button type="submit">submit</button>
			</form>
		</div>
	);
};