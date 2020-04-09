import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { PROGRESS_NEW } from './graphql';
import { ProgressNew as Mutation, ProgressNewVariables as Variables } from '../../../types/api';

interface IProgressNewProps {

}

export const ProgressNew: React.FC<IProgressNewProps> = (props) => {

	const { id } = useParams();

	const [ state, setState ] = useState({
		drivingVideoUrl: '',
	});

	const [ progressNew ] = useMutation<Mutation, Variables>(PROGRESS_NEW);

	return (
		<div>
			ProgressNew works.

			<form onSubmit={(e) => {
				e.preventDefault();

				progressNew({
					variables: {
						drivingVideoUrl: state.drivingVideoUrl,
						workId: id,
					}
				});
			}}>
				<div>
					Driving Video Url
					<input type="text"/>
				</div>

				<button type="submit">submit</button>
			</form>
		</div>
	)
}