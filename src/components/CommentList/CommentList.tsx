import React from 'react';
import { Grid } from '@material-ui/core';
import { GetWork } from '../../types/api';
import { CommentItem } from '../CommentItem/CommentItem';

interface ICommentListProps {
	data?: GetWork;
}

export const CommentList: React.FC<ICommentListProps> = ({data}) => {
	return (
		<div style={{
			height: '75vh',
		}}>
			<div className="title-text">
				Comments
			</div>

			<hr/>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis quia labore quis alias. Saepe, amet libero quis, laudantium rerum autem totam voluptatem cumque corporis facilis inventore ex voluptatum nulla!
			</p>

			<Grid
				container
				direction="column"
				spacing={2}
				style={{
					width: '100%',
				}}
			>
				{
					data && data.works_by_pk.comments.map(x => (
						<Grid item key={x.id}>
							<CommentItem {...x}/>
						</Grid>
					))
				}
			</Grid>
		</div>
	);
}