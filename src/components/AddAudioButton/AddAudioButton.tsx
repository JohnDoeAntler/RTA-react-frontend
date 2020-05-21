import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton } from "@material-ui/core";
import axios from "axios";
import { CircleButton } from "../CircleButton/CircleButton";
import { LibraryAdd } from "@material-ui/icons";

interface IAddAudioButtonProps {

	workId: string;

	onAddedAudio?: () => void;

}

export const AddAudioButton: React.FC<IAddAudioButtonProps> = (props) => {

	const [state, setState] = useState<{
		file: File | null;
		open: boolean;
	}>({
		file: null,
		open: false,
	});

	return (
		<div>
			<CircleButton
				type="button"
				backgroundColor="black"
				alt="Add audio training file."
				onClick={() =>
					setState({
						...state,
						open: true,
					})
				}>
				<IconButton>
					<LibraryAdd/>
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
				<DialogTitle id="form-dialog-title">Add Audio</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quisquam dicta repellat tenetur laboriosam sint provident tempore!
					</DialogContentText>

					<input
						type="file"
						id="raised-button-file"
						accept="audio/*"
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
					<Button
						color="primary"
						disabled={!state.file}
						onClick={() => {
							if (state.file) {
								const endpoint = `${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/audio`;
								const formData = new FormData();
								formData.append('id', props.workId || "");
								formData.append('file', state.file);
								const config = {
									headers: {
										'content-type': 'multipart/form-data',
									},
								};
								axios.post(endpoint, formData, config).then(x => {
									props.onAddedAudio && props.onAddedAudio();
									setState({
										...state,
										open: false,
									});
								});
							}
						}}>
						Add Audio
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
