/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-apollo";
import { BackButton } from "../component/BackButton";
import { UserListItem } from "../component/UserListItem";
import { UserListItemAnimator, UserListPageAnimator } from "../component/UserListPageAnimator";
import { GET_FOLLOWINGS } from "../graphql";
import { GetFollowings, GetFollowingsVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getScrollbarWidth } from "../utils/ScrollbarHelper";
import { getId } from "../utils/UserHelper";

export const Followings: React.FC = () => {
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

	const { data } = useQuery<GetFollowings, GetFollowingsVariables>(GET_FOLLOWINGS, {
		variables: {
			id: getId(),
			filter,
		},
		fetchPolicy: "no-cache",
	});

	useEffect(() => {
		UserListItemAnimator();
	});

	return (
		<Grid container className="panel" direction="column">
			<UserListPageAnimator />

			<BackButton to="/" />

			<Grid item lg="auto">
				<div ref={upperPanel}>
					<Box height="1rem" />

					<Title>Followings</Title>

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
						}}>
						{(props) => (
							<Form>
								<TextField
									fullWidth
									type="text"
									name="filter"
									label="Search"
									placeholder="Search by name"
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
				lg="auto"
				style={{
					height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
					overflow: "hidden",
				}}>
				<Box
					style={{
						width: `calc(100% + ${getScrollbarWidth()}px)`,
						height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
						overflowY: "auto",
						overflowX: "hidden",
					}}>
					<Grid container spacing={2}>
						{data &&
							data.user.following.map((user) => {
								return (
									<Grid key={user.id} item lg={12}>
										<UserListItem {...user} />
									</Grid>
								);
							})}
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
};
