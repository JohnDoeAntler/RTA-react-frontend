/** @format */

import React, { useState } from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, IconButton } from "@material-ui/core";
import axios from "axios";
import { CircleButton } from "../CircleButton/CircleButton";
import { CallMerge } from "@material-ui/icons";

interface ISynthesizeButtonProps {
	workId: string;
}

export const SynthesizeButton: React.FC<ISynthesizeButtonProps> = (props) => {
	const { id } = useAuth0();

	const [state, setState] = useState<{
		file: File | null;
		open: boolean;
		isError: boolean;
	}>({
		file: null,
		open: false,
		isError: false,
	});

	return (
		<div>
			<CircleButton
				type="button"
				backgroundColor="black"
				alt="Send synthesization request."
				onClick={() =>
					setState({
						...state,
						open: true,
					})
				}>
				<IconButton>
					<CallMerge />
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
				<DialogTitle id="form-dialog-title">Synthesize</DialogTitle>
				<DialogContent>
					{state.isError ? (
						<DialogContentText>
							For work owner: Please confirm the training material on both audio and image is enough to be synthesized.
							<br />
							For user: Please confirm the uploaded video in appropriate format.
						</DialogContentText>
					) : (
						<>
							<DialogContentText>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam dicta repellat tenetur laboriosam sint provident tempore!
							</DialogContentText>

							<input
								type="file"
								id="raised-button-file"
								accept="video/mp4"
								style={{
									display: "none",
								}}
								onChange={(e) => {
									setState({
										...state,
										file: e.target.files && e.target.files[0],
									});
								}}
							/>

							<label htmlFor="raised-button-file">
								<Button component="span" fullWidth>
									{!!state.file ? state.file.name : "Upload"}
								</Button>
							</label>
						</>
					)}
				</DialogContent>
				<DialogActions>
					<Button
						color="primary"
						onClick={() => {
							setState({
								...state,
								open: false,
							});
						}}>
						Cancel
					</Button>

					{!state.isError && (
						<Button
							color="primary"
							disabled={!state.file}
							onClick={() => {
								if (state.file) {
									const endpoint = `${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/progress`;
									const formData = new FormData();
									formData.append("workId", props.workId || "");
									formData.append("userId", id);
									formData.append("file", state.file);
									const config = {
										headers: {
											"content-type": "multipart/form-data",
										},
									};
									axios
										.post(endpoint, formData, config)
										.then((x) => {
											setState({
												...state,
												open: false,
											});
										})
										.catch(() => {
											setState({
												...state,
												isError: true,
											});
										});
								}
							}}>
							Synthesize
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
};
