/** @format */

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useMutation } from "react-apollo";
import { COMMENT_WORK } from "../graphql";
import { CommentWork, CommentWorkVariables } from "../types/api";

interface ICommandDialogProps {

	userId: string;

	workId: string;

	open: boolean;

	handleClose: () => void;
}

export const CommentDialog: React.FC<ICommandDialogProps> = (props) => {
	const [comment] = useMutation<CommentWork, CommentWorkVariables>(
		COMMENT_WORK,
	);

	return (
		<Formik
			initialValues={{
				content: "",
			}}
			onSubmit={(values) => {
				comment({
					variables: {
						user: props.userId,
						work: props.workId,
						content: values.content,
					},
				}).then(() => {
					props.handleClose();
				});
			}}
		>
			{({ handleChange, handleBlur, submitForm, values }) => (
				<Form>
					<Dialog
						open={props.open}
						onClose={props.handleClose}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">
							Comment
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Labore velit deserunt et minim. Pariatur ullamco
								do ea excepteur ex. Exercitation anim commodo
								pariatur eiusmod tempor nisi voluptate magna
								nulla laborum laborum.
							</DialogContentText>
							<TextField
								fullWidth
								multiline
								name="content"
								label="Content"
								variant="filled"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={props.handleClose} color="primary">
								Cancel
							</Button>
							<Button onClick={submitForm} color="primary">
								Comment
							</Button>
						</DialogActions>
					</Dialog>
				</Form>
			)}
		</Formik>
	);
};
