import React from 'react';
import './InfoBlock.css';
import { Grid } from '@material-ui/core';

interface IInfoBlockProps {

	upperText: string;

	lowerText: string;

	color?: string;

}

export const InfoBlock: React.FC<IInfoBlockProps> = (props) => {
	return (
		<div className="info-block-wrapper">
			<hr/>

			<Grid container direction="column" justify="center" alignItems="center">
				<Grid item>
					<div className="upper-text" style={{
						...(props.color && {
							color: props.color,
						}),
					}}>
						{
							props.upperText
						}
					</div>
				</Grid>
				<Grid item>
					<div className="lower-text">
						{
							props.lowerText
						}
					</div>
				</Grid>
			</Grid>

			<hr/>
		</div>
	)
}