import { Refresh } from "@material-ui/icons";
import React from "react";
import "./Reset.css";

export const Reset = () => {
	return (
		<button className="reset-button" type="reset">
			<Refresh className="reset-button-icon"/>
		</button>
	);
};
