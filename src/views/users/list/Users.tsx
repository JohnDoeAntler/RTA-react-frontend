import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_USERS } from '../../../graphql/users';
import { GetUsers, GetUsersVariables } from '../../../types/api';
import { Container, Grid, TextField } from '@material-ui/core';
import { UserList } from '../../../components/UserList/UserList';

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
		<Container>
			<Grid
				container
				alignItems="center"
				spacing={4}
				style={{
					height: "100vh",
				}}>
				<Grid item xs={12} sm={6}>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<span className="title-text">Search Users</span>
						</Grid>

						<Grid item>
							<hr />

							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</Grid>

						<Grid item>
							<TextField
								fullWidth
								label="Filter"
								variant="filled"
								onChange={(e) => {
									setState({
										...state,
										filter: e.currentTarget.value,
									});
								}}
							/>
						</Grid>

						<Grid item>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit officiis fugit culpa architecto sapiente, quas maiores dolorem sint,
							expedita esse, nihil ducimus. Hic obcaecati ex, tempore animi odit quo iusto.
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					sm={6}
					xs={12}
				>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							{
								data && <UserList users={data.users}/>
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
};