import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_NOTIFICATIONS } from './graphql';
import { GetNotifications, GetNotificationsVariables } from '../../types/api';
import { useAuth0 } from '../../utils/react-auth0-spa';

interface INotificationsProps {
};

export const Notifications: React.FC<INotificationsProps> = (props) => {

	const { id } = useAuth0();

	const { data, loading } = useQuery<GetNotifications, GetNotificationsVariables>(GET_NOTIFICATIONS, {
		variables: {
			id,
		},
		fetchPolicy: 'no-cache',
	});

	return (
		<div>
			Notifications works.

			<pre>
				{
					JSON.stringify(data, null, 4)
				}
			</pre>
		</div>
	);
};
