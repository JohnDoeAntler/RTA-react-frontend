/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState, useRef } from "react";
import { useQuery } from "react-apollo";
import { BackButton } from "../component/BackButton";
import { WorkListItem } from "../component/WorkListItem";
import { GET_WORK_LIST } from "../graphql";
import { GetWorkList, GetWorkListVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getId } from "../utils/UserHelper";
import { getScrollbarWidth } from "../utils/ScrollbarHelper";

export const Favourites: React.FC = () => {

	//
	// ─── REF ────────────────────────────────────────────────────────────────────────
	//
		
	const upperPanel = useRef<HTMLDivElement>(null);

	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [filter, setFilter] = useState("");

	//
	// ─── QUERY ──────────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<GetWorkList, GetWorkListVariables>(GET_WORK_LIST, {
		variables: {
			where: {
				name_contains: filter,
				favouritedBy_some: {
					id: getId(),
				},
			},
		},
		fetchPolicy: "network-only",
	});

	return (
		<Grid container className="panel" direction="column">
			<BackButton to="/" />
			<Grid item>
				<div ref={upperPanel}>
					<Box height="1rem" />

					<Title>Favourites</Title>

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
				<Box p={`${getScrollbarWidth()/2}px`} style={{
					width: `calc(100% + ${getScrollbarWidth()}px)`,
					height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
					overflowY: "auto",
				}}>
					<Box pr={`${getScrollbarWidth()}px`}>
						<Grid container direction="column" spacing={2}>
							{data &&
								data.works &&
								data.works.map((work) => {
									return (
										<Grid key={work.id} item>
											<WorkListItem showUser={true} {...work} />
										</Grid>
									);
								})}
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
