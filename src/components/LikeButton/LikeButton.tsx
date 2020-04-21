/** @format */

import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { GetIsLiked, GetIsLikedVariables, Like, LikeVariables, UnlikeVariables, Unlike } from "../../types/api";
import { GET_IS_LIKED, LIKE, UNLIKE } from "./graphql";
import { IconButton } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import { CircleButton } from "../CircleButton/CircleButton";

interface ILikeButtonProps {
	userId: string;

	workId: string;

	onLiked?: () => void;
}

export const LikeButton: React.FC<ILikeButtonProps> = (props) => {
	const [state, setState] = useState({
		isLiked: false,
		isLiking: false,
	});

	const { loading } = useQuery<GetIsLiked, GetIsLikedVariables>(GET_IS_LIKED, {
		variables: {
			id: props.workId,
		},
		onCompleted: (data) => {
			setState({
				...state,
				isLiked: data.works_by_pk.likes.some((x) => x.userId === props.userId),
			});
		},
		fetchPolicy: "no-cache",
	});

	const [like] = useMutation<Like, LikeVariables>(LIKE);
	const [unlike] = useMutation<Unlike, UnlikeVariables>(UNLIKE);

	return (
		<CircleButton
			type="button"
			backgroundColor={state.isLiked ? "#dddd00" : "black"}
			onClick={async () => {
				setState({
					...state,
					isLiking: true,
				});
				if (state.isLiked) {
					await unlike({
						variables: {
							userId: props.userId,
							workId: props.workId,
						},
					});
				} else {
					await like({
						variables: {
							id: props.workId,
						},
					});
				}
				setState({
					...state,
					isLiked: !state.isLiked,
					isLiking: false,
				});
				props.onLiked && props.onLiked();
			}}
			disabled={state.isLiking || loading}
		>
			<IconButton>
				<ThumbUp />
			</IconButton>
		</CircleButton>
	);
};
