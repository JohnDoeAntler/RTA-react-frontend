/** @format */

import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";

interface IConfirmDialogProps {

	title: string;

	content: string;

	open: boolean;

	handleClose: (confirm: boolean) => void;

}

export const ConfirmDialog: React.FC<IConfirmDialogProps> = (props) => {
	return (
		<div>
			<Dialog open={props.open} onClose={() => props.handleClose(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{props.content}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => props.handleClose(false)} color="primary">
						Cancel
					</Button>
					<Button onClick={() => props.handleClose(true)} color="primary" autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
