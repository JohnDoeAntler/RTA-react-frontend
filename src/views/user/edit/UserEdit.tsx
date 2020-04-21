import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import { GetUserEdit, GetUserEditVariables, UserEdit as Mutation, UserEditVariables as Variables } from '../../../types/api';
import { GET_USER_EDIT, USER_EDIT } from '../../../graphql/users';

interface IUserEditProps {
};

export const UserEdit: React.FC<IUserEditProps> = (props) => {

	const { id } = useParams();

	const [ state, setState ] = useState({
		name: '',
		imageUrl: '',
	});

	const { loading } = useQuery<GetUserEdit, GetUserEditVariables>(GET_USER_EDIT, {
		variables: {
			id: id || '',
		},
		onCompleted: (data) => {
			setState({
				...data.users_by_pk
			});
		},
		fetchPolicy: 'no-cache',
	});

	const [ userEdit ] = useMutation<Mutation, Variables>(USER_EDIT);

	if (loading) {
		return (
			<div>
				Loading user...
			</div>
		)
	}

	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();

				userEdit({
					variables: {
						name: state.name,
						imageUrl: state.imageUrl,
						id: id || '',
					}
				})
			}}>
				<div>
					name
					<input type="text" value={state.name} onChange={(e) => {
						setState({
							...state,
							name: e.currentTarget.value
						})
					}}/>
				</div>

				<div>
					imageUrl
					<input type="text" value={state.imageUrl} onChange={(e) => {
						setState({
							...state,
							imageUrl: e.currentTarget.value
						})
					}}/>
				</div>

				<button type="submit">submit</button>
			</form>
		</div>
	);
};