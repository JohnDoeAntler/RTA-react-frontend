import React from 'react';
import './WorkItem.css';
import { Link } from 'react-router-dom';

interface IWorkItemProps {
	to: string;

	name: string;

	description: string;

	imageUrl: string;
}

export const WorkItem: React.FC<IWorkItemProps> = (props) => {
	return (
		<div className="work-item">
			<Link to={props.to}>
				<div className="work-item-img-wrapper">
					<img
						className="work-item-img"
						src={props.imageUrl}
					/>
				</div>
	
				<div style={{
					overflow: 'hidden',
				}}>
					<div className="work-item-title">
						{
							props.name
						}
					</div>

					<hr/>

					<div className="work-item-desc">
						{
							props.description
						}
					</div>
				</div>
			</Link>
		</div>
	)
}