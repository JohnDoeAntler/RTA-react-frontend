/** @format */

import { Box, Grid, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState, useRef } from "react";
import { useQuery } from "react-apollo";
import { BackButton } from "../component/BackButton";
import { UserListItem } from "../component/UserListItem";
import { GET_USER_LIST } from "../graphql";
import { GetUserList, GetUserListVariables } from "../types/api";
import { Caption } from "../typography/Caption";
import { Title } from "../typography/Title";
import { getScrollbarWidth } from "../utils/ScrollbarHelper";

export const UserList: React.FC = () => {

	//
	// ─── STATE ──────────────────────────────────────────────────────────────────────
	//

	const [filter, setFilter] = useState("");

	//
	// ─── REF ────────────────────────────────────────────────────────────────────────
	//

	const upperPanel = useRef<HTMLDivElement>(null);

	//
	// ─── USERS QUERY ────────────────────────────────────────────────────────────────
	//

	const { data } = useQuery<GetUserList, GetUserListVariables>(
		GET_USER_LIST,
		{
			variables: {
				where: {
					name_contains: filter,
				},
			},
		},
	);

	return (
		<Grid container className="panel" direction="column">
			<BackButton to="/" />
			<Grid item lg="auto">
				<div ref={upperPanel}>
					<Box height="1rem" />

					<Title>User List</Title>

					<Caption>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Earum rem tenetur vitae, quisquam saepe quod ex
						minus commodi. Officiis et tempore quis unde non natus
						velit reprehenderit, est minima error!
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
									placeholder="Search by name"
									variant="filled"
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
							</Form>
						)}
					</Formik>

					<Caption>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Aliquid alias consequatur nam fugiat dolore
						laudantium ab quasi eligendi sunt, vero beatae? Modi,
						exercitationem. Ipsa, natus eaque accusantium rem porro
						tempore!
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
				}}
			>
				<Box style={{
					width: `calc(100% + ${getScrollbarWidth()}px)`,
					height: `calc(100vh - ${upperPanel.current?.clientHeight || 0}px)`,
					overflowY: "auto",
					overflowX: "hidden",
				}}>
					<Grid container spacing={2}>
						{data &&
							data.users &&
							data.users.map((user) => {
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
