/** @format */

import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo";
import { GetIsFavourited, GetIsFavouritedVariables, FavouriteVariables, Unfavourite, UnfavouriteVariables, Favourite } from "../../types/api";
import { GET_IS_FAVOURITED, FAVOURITE, UNFAVOURITE } from "./graphql";

interface IFavouriteButtonProps {

	userId: string;

	workId: string;

	onFavourited?: () => void;

}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = (props) => {

	const [state, setState] = useState({
		isFavourited: false,
		isFavouriting: false,
	});

	const { loading } = useQuery<GetIsFavourited, GetIsFavouritedVariables>(GET_IS_FAVOURITED, {
		variables: {
			id: props.workId,
		},
		onCompleted: (data) => {
			setState({
				...state,
				isFavourited: data.works_by_pk.favourites.some((x) => x.userId === props.userId),
			});
		},
		fetchPolicy: "no-cache",
	});

	const [favourite] = useMutation<Favourite, FavouriteVariables>(FAVOURITE);
	const [unfavourite] = useMutation<Unfavourite, UnfavouriteVariables>(UNFAVOURITE);

	return (
		<button
			onClick={async () => {
				setState({
					...state,
					isFavouriting: true,
				});
				if (state.isFavourited) {
					await unfavourite({
						variables: {
							userId: props.userId,
							workId: props.workId
						},
					});
				} else {
					await favourite({
						variables: {
							id: props.workId,
						},
					});
				}
				setState({
					...state,
					isFavourited: !state.isFavourited,
					isFavouriting: false,
				});
				props.onFavourited && props.onFavourited();
			}}
			disabled={state.isFavouriting || loading}>
			{state.isFavouriting ? "favouriting" : state.isFavourited ? "unfavourite" : "favourite"}
		</button>
	);
};
