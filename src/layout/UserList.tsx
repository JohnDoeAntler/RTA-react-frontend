/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-apollo";
import { BackButton } from "../component/BackButton";
import { UserListItem } from "../component/UserListItem";
import { UserListItemAnimator, UserListPageAnimator } from "../component/UserListPageAnimator";
import { GET_USER_LIST } from "../graphql";
import { GetUserList, GetUserListVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getScrollbarWidth } from "../utils/ScrollbarHelper";

export const UserList: React.FC = () => {
	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [state, setState] = useState({
		filter: "",
		height: 0,
	});

	//
	// ─── REF ────────────────────────────────────────────────────────────────────────
	//

	const upperPanel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setState({
			...state,
			height: upperPanel.current?.clientHeight || 0,
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upperPanel]);

	//
	// ─── USERS QUERY ────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<GetUserList, GetUserListVariables>(GET_USER_LIST, {
		variables: {
			where: {
				name_contains: state.filter,
			},
		},
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

					<Title>User List</Title>

					<Caption>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum rem tenetur vitae, quisquam saepe quod ex minus commodi. Officiis et
						tempore quis unde non natus velit reprehenderit, est minima error!
					</Caption>

					<Formik
						initialValues={{
							filter: "",
						}}
						onSubmit={(props) => {
							setState({
								...state,
								filter: props.filter,
							});
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
									autoFocus
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
					height: `calc(100vh - ${state.height}px)`,
					overflow: "hidden",
				}}>
				<Box
					style={{
						width: `calc(100% + ${getScrollbarWidth()}px)`,
						height: `calc(100vh - ${state.height}px)`,
						overflowY: "auto",
						overflowX: "hidden",
					}}>
					<Grid container spacing={2}>
						{data &&
							data.users &&
							data.users.map((user) => {
								return (
									<Grid key={user.id} item xs={12}>
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
