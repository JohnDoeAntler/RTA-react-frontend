/** @format */

import React, { useState } from "react";
import { ExitToApp } from "@material-ui/icons";
import { ConfirmDialog } from "./ConfirmDialog";
import { IconButton } from "@material-ui/core";

interface ILogoutButtonProps {}

export const LogoutButton: React.FC<ILogoutButtonProps> = (props) => {

	const style: React.CSSProperties = {
		position: "fixed",
		left: "calc(calc(100% - 1280px) / 4)",
		top: "50%",
		transform: "translate(-50%, -50%)",
	};

	const [state, setState] = useState({
		open: false,
	});

	const handleOpen = () =>
		setState({
			...state,
			open: true,
		});

	const handleClose = (confirm: boolean) => {
		setState({
			...state,
			open: false,
		});
		if (confirm) {
			localStorage.removeItem("token");
			window.location.reload();
		}
	};

	return (
		<>
			<IconButton style={style} onClick={handleOpen}>
				<ExitToApp/>
			</IconButton>
			<ConfirmDialog open={state.open} handleClose={handleClose} title="Confirm Logout" content="Are you confirm to logout?" />
		</>
	);
};
