/** @format */

import React, { useState } from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, IconButton } from "@material-ui/core";
import axios from "axios";
import { CircleButton } from "../CircleButton/CircleButton";
import { CallMerge, LibraryAdd } from "@material-ui/icons";

interface IAddImageButtonProps {
	workId: string;

	onAddedImage?: () => void;
}

export const AddImageButton: React.FC<IAddImageButtonProps> = (props) => {
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
				alt="Add image training file."
				onClick={() =>
					setState({
						...state,
						open: true,
						isError: false,
					})
				}>
				<IconButton>
					<LibraryAdd />
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
				<DialogTitle id="form-dialog-title">Add Image</DialogTitle>
				<DialogContent>
					{state.isError ? (
						<DialogContentText>Please confirm the uploaded file is in png or jpeg format.</DialogContentText>
					) : (
						<>
							<DialogContentText>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam dicta repellat tenetur laboriosam sint provident tempore!
							</DialogContentText>

							<input
								type="file"
								id="raised-button-file"
								accept="image/*"
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
									const endpoint = `${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/image`;
									const formData = new FormData();
									formData.append("id", props.workId || "");
									formData.append("file", state.file);
									const config = {
										headers: {
											"content-type": "multipart/form-data",
										},
									};
									axios
										.post(endpoint, formData, config)
										.then((x) => {
											props.onAddedImage && props.onAddedImage();
											setState({
												...state,
												open: false,
												file: null,
											});
										})
										.catch(() => {
											setState({
												...state,
												isError: true,
												file: null,
											});
										});
								}
							}}>
							Add Image
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
};
