/** @format */

import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";

interface IUserItemProps {

	to: string;

	name: string;

	imageUrl: string;

	created_at: any;

	updated_at: any;

}

export const UserItem: React.FC<IUserItemProps> = (props) => {
	return (
		<Link to={props.to}>
			<div className="user-item">
				<div className="user-item-img-wrapper">
					<img
						className="user-item-img"
						src={props.imageUrl}
						alt=""
					/>
				</div>

				<div className="user-item-info">
					<div className="user-item-name">
						{props.name}
					</div>

					<hr/>

					<div style={{
						color: 'white'
					}}>
						joined at: {props.created_at && props.created_at.split('T')[0]}
					</div>
				</div>
			</div>
		</Link>
	);
};
