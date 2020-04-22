/** @format */

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

interface IUserItemProps {

	upperText: string;

	imageUrl: string;

	lowerText: any;

}

export const UserItem: React.FC<IUserItemProps> = (props) => {
	return (
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
					{props.upperText}
				</div>

				<hr/>

				<div style={{
					color: 'white'
				}}>
					joined at: {props.lowerText}
				</div>
			</div>
		</div>
	);
};
