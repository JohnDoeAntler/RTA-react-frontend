/** @format */

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";

interface IContentDialogProps {
	open: boolean;

	handleClose: () => void;

	title: string;

	content: string;
}

export const ContentDialog: React.FC<IContentDialogProps> = (props) => {
	return (
		<Dialog open={props.open} onClose={props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
			<DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{props.content}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} color="primary" autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
