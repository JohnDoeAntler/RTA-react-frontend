import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

interface IBackButtonProps {

	to: string;

}

export const BackButton: React.FC<IBackButtonProps> = (props) => {

	const style: React.CSSProperties = {
		position: "fixed",
		left: "calc(calc(100% - 1280px) / 4)",
		top: "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<Link to={props.to}>
			<IconButton style={style}>
				<KeyboardArrowLeft/>
			</IconButton>
		</Link>
	);
};
