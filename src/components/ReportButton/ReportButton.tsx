/** @format */

import React, { useState } from "react";
import { ReportVariables, Report } from "../../types/api";
import { REPORT } from "./graphql";
import { useMutation } from "react-apollo";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, IconButton } from "@material-ui/core";
import { CircleButton } from "../CircleButton/CircleButton";
import { Report as ReportIcon } from '@material-ui/icons';

interface IReportButtonProps {
	workId: string;
}

export const ReportButton: React.FC<IReportButtonProps> = (props) => {
	const [state, setState] = useState({
		open: false,
		reason: "",
	});

	const [report] = useMutation<Report, ReportVariables>(REPORT);

	return (
		<div>
			<CircleButton
				type="button"
				backgroundColor="black"
				onClick={() => {
					setState({
						...state,
						open: true,
					})}}>
				<IconButton>
					<ReportIcon />
				</IconButton>
			</CircleButton>

			<Dialog
				open={state.open}
				onClose={() => {
					setState({
						...state,
						open: false,
					});
				}}
				aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Report</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam dicta repellat tenetur laboriosam sint provident tempore!
					</DialogContentText>
					<TextField
						type="text"
						label="Reason"
						margin="dense"
						onChange={(e) => {
							setState({
								...state,
								reason: e.currentTarget.value,
							});
						}}
						fullWidth
						autoFocus
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setState({
								...state,
								open: false,
							});
						}}
						color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							report({
								variables: {
									workId: props.workId,
									reason: state.reason,
								},
							}).then(() => {
								setState({
									...state,
									open: false,
								});
							});
						}}
						color="primary"
						disabled={!state.reason}>
						Report
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
