import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GetFavourites, GetFavouritesVariables } from '../../types/api';
import { GET_FAVOURITES } from '../../graphql/favourites';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Link } from 'react-router-dom';
import { WorkList } from '../../components/WorkList/WorkList';
import { Container, Grid, TextField, IconButton } from '@material-ui/core';
import { CircleButton } from '../../components/CircleButton/CircleButton';
import { Add } from '@material-ui/icons';
import { TitleLine } from '../../components/TitleLine/TitleLine';

interface IFavouritesProps {
};

export const Favourites: React.FC<IFavouritesProps> = (props) => {

	const { id } = useAuth0();

	const [ state, setState ] = useState({
		filter: '',
		delayedFilter: '',
	})

	const { data } = useQuery<GetFavourites, GetFavouritesVariables>(GET_FAVOURITES, {
		variables: {
			id,
			filter: `%${state.filter}%`,
		},
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			setState({
				...state,
				delayedFilter: state.filter,
			})
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
							<span className="title-text">Search Favourites</span>
						</Grid>

						<Grid item>
							<TitleLine/>

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
								data && (
									<WorkList works={data.favourites.map(x => x.work).map(x => x)} filter={state.delayedFilter}/>
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
