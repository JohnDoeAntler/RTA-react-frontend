import React from 'react';
import { useAuth0 } from '../../utils/react-auth0-spa';

interface IGuestProps {
};

export const Guest: React.FC<IGuestProps> = (props) => {

	const {
		loginWithRedirect,
	} = useAuth0();

	return (
		<div>
			guest works.

			<button onClick={async () => await loginWithRedirect()}>Login</button>
		</div>
	);
};