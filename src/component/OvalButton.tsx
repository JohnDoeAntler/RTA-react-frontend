import React from "react";
import { Link } from "react-router-dom";
import "./OvalButton.css";

export interface IOvalButtonProps {

	to: string;

	text: string;

}

export const OvalButton: React.FC<IOvalButtonProps> = (props) => {
	return (
		<Link to={props.to}>
			<div className="oval-button">
				<div className="oval-button-circle"></div>
				<div className="oval-button-border"></div>
				<div className="oval-button-text">{props.text}</div>
			</div>
		</Link>
	);
};
