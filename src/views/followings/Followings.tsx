import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_FOLLOWINGS } from '../../graphql/followings';
import { GetFollowings, GetFollowingsVariables } from '../../types/api';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Link } from 'react-router-dom';
import { Container, Grid, TextField } from '@material-ui/core';
import { UserList } from '../../components/UserList/UserList';

interface IFollowingsProps {
};

export const Followings: React.FC<IFollowingsProps> = (props) => {

	const { id } = useAuth0();

	const [ state, setState ] = useState({
		filter: '',
		delayedFilter: '',
	});

	const { data } = useQuery<GetFollowings, GetFollowingsVariables>(GET_FOLLOWINGS, {
		variables: {
			id,
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			setState({
				...state,
				delayedFilter: state.filter,
			});
		}
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
							<span className="title-text">Search Followings</span>
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
								data && <UserList users={data.users} filter={state.delayedFilter}/>
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};