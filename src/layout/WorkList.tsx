/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { useQuery } from "react-apollo";
import { BackButton } from "../component/BackButton";
import { CircleButton } from "../component/CircleButton";
import { WorkListItem } from "../component/WorkListItem";
import { GET_WORK_LIST } from "../graphql";
import { GetWorkList, GetWorkListVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { getScrollbarWidth } from "../utils/ScrollbarHelper";

export interface IWorkListProps {
	id?: string | null;
}

const initialState: IWorkListProps = {
	id: null,
};

export const WorkList: React.FC<IWorkListProps> = (props = initialState) => {
	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [filter, setFilter] = useState("");

	//
	// ─── REF ────────────────────────────────────────────────────────────────────────
	//

	const upperPanel = useRef<HTMLDivElement>(null);

	//
	// ─── WORKS QUERY ────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<GetWorkList, GetWorkListVariables>(
		GET_WORK_LIST,
		props.id === null
			? {
					variables: {
						where: {
							name_contains: filter,
						},
					},
					fetchPolicy: "no-cache",
			  }
			: {
					variables: {
						where: {
							name_contains: filter,
							user: {
								id: props.id,
							},
						},
					},
					fetchPolicy: "no-cache",
			  },
	);

	return (
		<Grid container className="panel" direction="column">
			{!!!props.id && <BackButton to="/" />}
			<Grid item>
				<div ref={upperPanel}>
					<Box height="1rem" />

					<Title>Work List</Title>

					<Caption>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum rem tenetur vitae, quisquam saepe quod ex minus commodi. Officiis et
						tempore quis unde non natus velit reprehenderit, est minima error!
					</Caption>

					<Formik
						initialValues={{
							filter: "",
						}}
						onSubmit={(props) => {
							setFilter(props.filter);
						}}
					>
						{(props) => (
							<Form>
								<TextField
									fullWidth
									type="text"
									name="filter"
									label="Search"
									placeholder="Search by work name."
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
							</Form>
						)}
					</Formik>

					<Caption>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid alias consequatur nam fugiat dolore laudantium ab quasi eligendi sunt,
						vero beatae? Modi, exercitationem. Ipsa, natus eaque accusantium rem porro tempore!
					</Caption>

					{!!!props.id && (
						<>
							<Subtitle>Action</Subtitle>

							<Box my=".5rem" mb="1rem">
								<CircleButton backgroundColor="#303030" popoverText="Create work">
									<Add />
								</CircleButton>
							</Box>
						</>
					)}

					<hr />

					<Box height="1rem" />
				</div>
			</Grid>

			<Grid
				item
				style={{
					height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
					overflow: "hidden",
				}}
			>
				<Box p={`${getScrollbarWidth() || 3}px`} style={{
					width: `calc(100% + ${getScrollbarWidth()}px)`,
					height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
					overflowY: "auto",
				}}>
					<Box pr={`${(getScrollbarWidth() || 3)*2}px`} pb={`${getScrollbarWidth()*4}px`}>
						<Grid container direction="column" spacing={2}>
							{
								data?.works &&
								data.works.map((work) => (
									<Grid key={work.id} item>
										<WorkListItem showUser={!!!props.id} {...work} />
									</Grid>
								))}
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
