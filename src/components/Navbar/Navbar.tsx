import React from 'react';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Link } from 'react-router-dom';

interface INavbarProps {
}

export const Navbar: React.FC<INavbarProps> = (props) => {

	const {
		id,
		logout
	} = useAuth0();

	return (
		<div>
			Navbar works.

			<Link to={`/`}>Home</Link>

			<Link to={`/notifications`}>Notifications</Link>

			<Link to={`/progresses`}>Progresses</Link>

			<Link to={`/user/${id}`}>Profile</Link>

			<button onClick={async () => await logout()}>Logout</button>
		</div>
	);
}
