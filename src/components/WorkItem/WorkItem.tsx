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
				<span className="work-item-title">
					{
						props.name
					}
				</span>
				<div>
					{
						props.description
					}
				</div>
			</div>
		</Link>
	)
}