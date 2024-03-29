import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { GetIsFollowed, GetIsFollowedVariables, Follow, FollowVariables, UnFollow, UnFollowVariables } from '../../types/api';
import { GET_IS_FOLLOWED, FOLLOW, UNFOLLOW } from './graphql';
import { CircleButton } from '../CircleButton/CircleButton';
import { IconButton } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';

interface IFollowButtonProps {

	followerId: string;

	followingId: string;

	onClick?: () => void;

}

export const FollowButton: React.FC<IFollowButtonProps> = (props) => {

	const [ state, setState ] = useState({
		isFollowed: false,
		isFollowing: false,
	});

	const { loading } = useQuery<GetIsFollowed, GetIsFollowedVariables>(GET_IS_FOLLOWED, {
		variables: {
			followerId: props.followerId,
		},
		onCompleted: (data) => {
			setState({
				...state,
				isFollowed: data.followings.some((x) => x.followingId == props.followingId),
			})
		},
		fetchPolicy: 'no-cache',
	});

	const [ follow ] = useMutation<Follow, FollowVariables>(FOLLOW);
	const [ unfollow ] = useMutation<UnFollow, UnFollowVariables>(UNFOLLOW);

	return (
		<CircleButton
			type="button"
			backgroundColor={state.isFollowed ? '#00dddd' : 'black'}
			alt="Follow user."
			onClick={async () => {
				setState({
					...state,
					isFollowing: true,
				});
				if (state.isFollowed) {
					await unfollow({
						variables: {
							followerId: props.followerId,
							followingId: props.followingId,
						},
					});
				} else {
					await follow({
						variables: {
							followingId: props.followingId,
						},
					});
				}
				setState({
					...state,
					isFollowed: !state.isFollowed,
					isFollowing: false,
				});
				props.onClick && props.onClick();
			}}
			disabled={state.isFollowing || loading}
		>
			<IconButton>
				<PersonAdd/>
			</IconButton>
		</CircleButton>
	)
}

