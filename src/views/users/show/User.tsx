import React from "react";
import { useParams, Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { GetUserDetailVariables, GetUserDetail } from "../../../types/api";
import { GET_USER_DETAIL } from "../../../graphql/users";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import { FollowButton } from "../../../components/FollowButton/FollowButton";

interface IUserProps {}

export const User: React.FC<IUserProps> = (props) => {

	const currentUser = useAuth0();

	const user = useParams<{
		id: string
	}>();

	const { data, loading, refetch } = useQuery<GetUserDetail, GetUserDetailVariables>(GET_USER_DETAIL, {
		variables: {
			id: user.id || '',
		},
		fetchPolicy: 'no-cache',
	});

	if (loading) {
		return (
			<div>
				loading user...
			</div>
		)
	}

	return (
		<div>
			{
				currentUser.id === user.id ? <Link to={`/user/${user.id}/edit`}>Edit</Link> : <FollowButton followerId={currentUser.id} followingId={user.id} onClick={() => refetch()} />
			}

			<pre>
				{
					JSON.stringify(data, null, 4)
				}
			</pre>
		</div>
	);
};
