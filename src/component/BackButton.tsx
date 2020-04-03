/** @format */

import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

interface IBackButtonProps {
	to: string;
}

export const BackButton: React.FC<IBackButtonProps> = (props) => {

	const [state, setState] = useState({
		isClicked: false,
	});

	const style: React.CSSProperties = {
		position: "fixed",
		left: "calc(calc(100% - 1280px) / 4)",
		top: "50%",
		transform: "translate(-50%, -50%)",
	};

	if (state.isClicked) {
		return (
			<Redirect {...props}/>
		)
	}

	return (
		<IconButton
			onClick={() =>
				setState({
					...state,
					isClicked: true,
				})
			}
			style={style}>
			<KeyboardArrowLeft />
		</IconButton>
	);
};
