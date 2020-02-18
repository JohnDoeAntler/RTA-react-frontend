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
import { REPORT_WORK } from "../graphql";
import { ReportWork, ReportWorkVariables } from "../types/api";

interface ICommandDialogProps {
	userId: string;

	workId: string;

	open: boolean;

	handleClose: () => void;
}

export const ReportDialog: React.FC<ICommandDialogProps> = (props) => {
	const [report] = useMutation<ReportWork, ReportWorkVariables>(
		REPORT_WORK,
	);

	return (
		<Formik
			initialValues={{
				reason: "",
			}}
			onSubmit={(values) => {
				report({
					variables: {
						user: props.userId,
						work: props.workId,
						reason: values.reason,
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
							Report
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
								name="reason"
								label="Reason"
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
								Report
							</Button>
						</DialogActions>
					</Dialog>
				</Form>
			)}
		</Formik>
	);
};
