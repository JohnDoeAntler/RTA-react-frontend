/** @format */

import { Grid, IconButton, LinearProgress } from "@material-ui/core";
import { Input, Portrait, Movie } from "@material-ui/icons";
import React from "react";
import { GetProgresses_progresses } from "../../types/api";
import { CircleButton } from "../CircleButton/CircleButton";
import "./ProgressItem.css";
import { Link } from "react-router-dom";

interface IProgressItemProps extends GetProgresses_progresses {}

export const ProgressItem: React.FC<IProgressItemProps> = (props) => {
	return (
		<Grid container direction="column" spacing={2}>
			<Grid item>
				<div className="progress-item-wrapper">
					<Grid container wrap="nowrap">
						<Grid item>
							<div
								className="progress-item-border"
								style={{
									backgroundColor: !!props.resultUrl ? "#0fc" : "red",
								}}></div>
						</Grid>

						<Grid item>
							<div className="progress-item-img-wrapper">
								<img className="progress-item-img" src={props.work.imageUrl} alt="" />
							</div>
						</Grid>

						<Grid item>
							<div className="progress-item-info">
								<div className="user-item-name">
									<span
										className="user-item-name-state"
										style={{
											fontSize: "1.2rem",
										}}>
										{props.isProcessing ? (!!props.resultUrl ? "Completed - " : "Processing - ") : "Awaiting - "}
									</span>
									synthesization of {props.work.name}
								</div>
								<hr />
								STATUS: {props.progress}
							</div>
						</Grid>
					</Grid>
				</div>
			</Grid>

			<Grid item>
				<div>
					<Grid container spacing={1} wrap="nowrap">
						<Grid item>
							<Link to={`/works/${props.work.id}`}>
								<CircleButton type="button" backgroundColor="black">
									<IconButton>
										<Portrait />
									</IconButton>
								</CircleButton>
							</Link>
						</Grid>

						<Grid item>
							<a href={`${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/${props.drivingVideoUrl}`} rel="noreferrer noopener" target="_blank">
								<CircleButton type="button" backgroundColor="black">
									<IconButton>
										<Input />
									</IconButton>
								</CircleButton>
							</a>
						</Grid>

						{props.resultUrl && (
							<Grid item>
								<a href={`${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/${props.resultUrl}`} rel="noreferrer noopener" target="_blank">
									<CircleButton type="button" backgroundColor="black">
										<IconButton>
											<Movie />
										</IconButton>
									</CircleButton>
								</a>
							</Grid>
						)}
					</Grid>
				</div>
			</Grid>
		</Grid>
	);
};
