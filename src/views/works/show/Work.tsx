/** @format */

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { GET_WORK } from "../../../graphql/works";
import {
	GetWorkVariables,
	GetWork,
} from "../../../types/api";
import { useAuth0 } from "../../../utils/react-auth0-spa";
import { LikeButton } from "../../../components/LikeButton/LikeButton";
import { FavouriteButton } from "../../../components/FavouriteButton/FavouriteButton";
import { CommentButton } from "../../../components/CommentButton/Commentbutton";
import { ReportButton } from "../../../components/ReportButton/ReportButton";
import { SynthesizeButton } from "../../../components/SynthesizeButton/SynthesizeButton";

interface IWorkProps {}

export const Work: React.FC<IWorkProps> = (props) => {
	const user = useAuth0();

	//
	// ─── WORK ID ────────────────────────────────────────────────────────────────────
	//
	const params = useParams<{
		id: string;
	}>();

	const { data, loading, refetch } = useQuery<GetWork, GetWorkVariables>(GET_WORK, {
		variables: {
			id: params.id,
		},
		fetchPolicy: 'no-cache',
	});


	if (loading) {
		return (
			<div>
				Loading work...
			</div>
		)
	}

	return (
		<div>
			{
				user.id === data?.works_by_pk.user.id && (
					<>
						<div>
							<Link to={`/works/${params.id}/images`}>Images</Link>
						</div>
	
						<div>
							<Link to={`/works/${params.id}/audios`}>Audios</Link>
						</div>
	
						<div>
							<Link to={`/works/${params.id}/edit`}>Edit</Link>
						</div>
					</>
				)
			}

			<LikeButton userId={user.id} workId={params.id} onClick={() => refetch()} />

			<FavouriteButton userId={user.id} workId={params.id} onClick={() => refetch()} />

			<CommentButton workId={params.id}/>

			{
				(user.id !== data?.works_by_pk.user.id) && <ReportButton workId={params.id}/>
			}

			<SynthesizeButton workId={params.id}/>

			<pre>
				{
					JSON.stringify(data, null, 4)
				}
			</pre>
		</div>
	);
};
