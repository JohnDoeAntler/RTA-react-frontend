import React from 'react';
import './CommentItem.css';
import { GetWork_works_by_pk_comments } from '../../types/api';
import { Link } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';

export const CommentItem: React.FC<GetWork_works_by_pk_comments> = (props) => {
	return (
		<div className="comment-wrapper">
			<div className="comment-border">
				<p>
					{
						props.content
					}
				</p>
				

				<hr/>

				<small>
						<Grid
							className="comment-user-wrapper"
							container
							spacing={1}
							alignItems="center"
						>
							<Grid item>
								<Link to={`/users/${props.user.id}`}>
									<Avatar className="comment-user-icon" src={props.user.imageUrl}/>
								</Link>
							</Grid>
							<Grid item>
								<Link to={`/users/${props.user.id}`}>
									<span className="comment-user">
										{
											props.user.name
										}
									</span>
								</Link>
								{
									props.created_at.split('T')[0]
								}
							</Grid>
						</Grid>
				</small>
			</div>
		</div>
	)
}