import React from 'react';
import './Info.css';
import { Grid } from '@material-ui/core';

interface IInfoProps {
	
	largerText: string;

	smallerText: string;

	largerTextSize?: string;

	smallerTextSize?: string;

	color?: string;

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
						<div className="info-larger-text" style={{
							...(props.color && {
								color: props.color,
							}),
							...(props.largerTextSize && {
								fontSize: props.largerTextSize,
							})
						}}>
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
					<div className="info-smaller-text" style={{
							...(props.color && {
								color: props.color,
							}),
							...(props.smallerTextSize && {
								fontSize: props.smallerTextSize,
							})
					}}>
						{
							props.smallerText
						}
					</div>
				</Grid>
			</Grid>
		</div>
	)
}