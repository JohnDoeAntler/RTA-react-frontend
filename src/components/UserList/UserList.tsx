import React, { useState, useRef } from 'react';
import { GetUsers } from '../../types/api';
import { UserItem } from '../UserItem/UserItem';
import { Grid } from '@material-ui/core';
import gsap, { Power4 } from 'gsap';

interface IUserListProps {

	data?: GetUsers;

	loading: boolean;

}

export const UserList: React.FC<IUserListProps> = ({data, loading}) => {

	const [index, setIndex] = useState(0);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={wrapper}
			onWheel={(e) => {
				e.preventDefault();

				if (e.deltaY > 0 && index + 3 < (data?.users.length || 0)) {
					setIndex(index + 1);
					gsap.fromTo(
						wrapper.current,
						0.5,
						{
							y: 50,
							ease: Power4.easeOut
						},
						{
							y: 0,
							ease: Power4.easeOut
						}
					);
				} else if (e.deltaY < 0 && index > 0) {
					setIndex(index - 1);
					gsap.fromTo(
						wrapper.current,
						0.5,
						{
							y: -50,
							ease: Power4.easeOut
						},
						{
							y: 0,
							ease: Power4.easeOut
						}
					);
				}
			}}
		>
			{
				!data && loading && "loading..."
			}
			{
				data && (
					<Grid
						container
						direction="column"
						spacing={1}
					>
						{
							data && data.users.slice(index, index + 3).map((el) => (
								<Grid item>
									<UserItem
										key={el.id}
										{...el}
										to={`/users/${el.id}`}
									/>
								</Grid>
							))
						}
					</Grid>
				)
			}
		</div>
	)
}