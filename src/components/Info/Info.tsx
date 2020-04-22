import React from 'react';
import './Info.css';
import { Grid } from '@material-ui/core';

interface IInfoProps {
	
	largerText: string;

	smallerText: string;

}

export const Info: React.FC<IInfoProps> = (props) => {
	return (
		<div>
			<Grid
				container
				direction="column"
				alignItems="center"
				spacing={2}
			>
				<Grid item>
					<div className="info-upper-wrapper">
						<div className="info-larger-text">
							{
								props.largerText
							}
						</div>
						<div className="info-background-text">
							{
								props.smallerText
							}
						</div>
					</div>
				</Grid>

				<Grid item>
					<div className="info-smaller-text">
						{
							props.smallerText
						}
					</div>
				</Grid>
			</Grid>
		</div>
	)
}