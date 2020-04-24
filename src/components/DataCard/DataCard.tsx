/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React from "react";
import "./DataCard.css";
import { Grid } from "@material-ui/core";
import { useMutation } from "react-apollo";
import { ImageDataDelete, ImageDataDeleteVariables } from "../../types/api";
import { IMAGE_DATA_DELETE } from "../../graphql/works";
import { UnderLineText } from "../UnderLineText/UnderLineText";

interface IDataCardProps {

	id: string;

	fileUrl: string;

	created_at: any;

	updated_at: any;

	onRemoved?: () => void;

}

export const DataCard: React.FC<IDataCardProps> = (props) => {
	
	const [imageDataDelete] = useMutation<ImageDataDelete, ImageDataDeleteVariables>(IMAGE_DATA_DELETE);

	return (
		<div className="data-card-wrapper">
			<Grid container wrap="nowrap">
				<Grid item>
					<div
						className="data-card-border"
						style={{
							backgroundColor: "#" + Math.random().toString(16).substr(-6),
						}}></div>
				</Grid>

				<Grid item>
					<div className="data-card-info">
						<div className="user-item-name">{props.id}</div>

						<hr />

						<Grid
							container
							direction="column"
							spacing={2}
						>
							<Grid item>{`created at: ${props.created_at}`}</Grid>

							<Grid item>{`updated at: ${props.updated_at}`}</Grid>

							<Grid item>
								<Grid container spacing={2}>
									<Grid item>
										<a href={`${process.env.REACT_APP_FILE_SERVER_ENDPOINT}/${props.fileUrl}`}>
											<UnderLineText color="white">
												<span
													style={{
														color: "white",
														fontFamily: "Poppins",
														textTransform: "uppercase",
													}}>
													view
												</span>
											</UnderLineText>
										</a>
									</Grid>

									<Grid item>
										<a
											href="#"
											onClick={() => {
												imageDataDelete({
													variables: {
														id: props.id,
													},
												}).then(() => {
													props.onRemoved && props.onRemoved();
												});
											}}>
											<UnderLineText color="white">
												<span
													style={{
														color: "white",
														fontFamily: "Poppins",
														textTransform: "uppercase",
													}}>
													delete
												</span>
											</UnderLineText>
										</a>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
