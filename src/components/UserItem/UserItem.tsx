import React from 'react';
import './UserItem.css';
import { Link } from 'react-router-dom';

interface IUserItemProps {

	to: string;

	name: string;

	imageUrl: string;

}

export const UserItem: React.FC<IUserItemProps> = (props) => {
	return (
		<div className="user-item">
			<Link to={props.to}>
				<div className="user-item-img-wrapper">
					<img
						className="user-item-img"
						src={props.imageUrl}
					/>
				</div>
	
				<div style={{
					overflow: 'hidden',
				}}>
					<div className="user-item-title">
						{
							props.name
						}
					</div>
				</div>
			</Link>
		</div>
	)
}