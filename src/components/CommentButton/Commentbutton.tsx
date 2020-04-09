/** @format */

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useMutation } from "react-apollo";
import { COMMENT } from "./graphql";
import { Comment, CommentVariables } from '../../types/api';

interface ICommentButtonProps {
	workId: string;
}

export const CommentButton: React.FC<ICommentButtonProps> = (props) => {

	const [state, setState] = useState({
		open: false,
		content: "",
	});

	const [ comment ] = useMutation<Comment, CommentVariables>(COMMENT);

	return (
		<div>
			<Button
				variant="outlined"
				color="primary"
				onClick={() =>
					setState({
						...state,
						open: true,
					})
				}
			>
				Comment
			</Button>

			<Dialog
				open={state.open}
				onClose={() => {
					setState({
						...state,
						open: false,
					});
				}}
				aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Comment</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam dicta repellat tenetur laboriosam sint provident tempore!
					</DialogContentText>
					<TextField
						type="text"
						label="Content"
						margin="dense"
						onChange={(e) => {
							setState({
								...state,
								content: e.currentTarget.value
							})
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
					<Button onClick={() => {
						comment({
							variables: {
								workId: props.workId,
								content: state.content,
							}
						}).then(() => {
							setState({
								...state,
								open: false,
							});
						})
					}} color="primary" disabled={!state.content}>
						Comment
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
