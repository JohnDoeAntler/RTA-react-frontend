/** @format */

import React, { useEffect } from "react";
import { PageTransition } from "../component/PageTransition";

interface IRouterMiddlewareProps {
	location: string;
}

export const RouterMiddleware: React.FC<IRouterMiddlewareProps> = (props) => {

	useEffect(() => {
		console.log("location has been updated.");
	}, [props.location]);

	return (
		<div>
			<PageTransition />
		</div>
	);
};
