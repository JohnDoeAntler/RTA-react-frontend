import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_PROGRESSES } from '../../../graphql/progresses';
import { GetProgresses, GetProgressesVariables } from '../../../types/api';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../../utils/react-auth0-spa';
import './Progresses.css';
import { Grid } from '@material-ui/core';
import { FallbackText } from '../../../components/FallbackText/FallbackText';
import { ProgressItem } from '../../../components/ProgressItem/ProgressItem';

interface IProgressesProps {
};

export const Progresses: React.FC<IProgressesProps> = (props) => {

	const { id } = useAuth0();

	const { data, refetch } = useQuery<GetProgresses, GetProgressesVariables>(GET_PROGRESSES, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div className="progresses-wrapper">

			<div className="title-text">
				Progresses
			</div>

			<hr/>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolor quaerat nam debitis voluptatum ea mollitia vel ad eius ex ut saepe itaque dolore. Maiores laborum asperiores debitis quae saepe.
			</p>

			<Grid
				container
				spacing={2}
			>
				{
					data?.progresses.length ? data?.progresses.map(el => (
						<Grid item key={el.id} style={{
							width: '100%',
						}}>
							<ProgressItem {...el}/>
						</Grid>
					)) : (
						<Grid item style={{
							width: '100%',
						}}>
							<FallbackText text="No progress was found."/>
						</Grid>
					)
				}
			</Grid>
		</div>
	);
};
