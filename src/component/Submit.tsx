import { Check } from "@material-ui/icons";
import React from "react";
import "./Submit.css";

export const Submit = () => {
	return (
		<button className="submit-button" type="submit">
			<Check className="submit-button-icon"/>
		</button>
	);
};
