import React, { useState, useRef, useEffect } from 'react';
import { GetWorks, GetUserDetail_users_by_pk } from '../../types/api';
import { WorkItem } from '../WorkItem/WorkItem';
import { Grid } from '@material-ui/core';
import gsap, { Power4 } from 'gsap';

interface IWorkListProps {
	data?: GetWorks | GetUserDetail_users_by_pk;

	loading: boolean;
}

export const WorkList: React.FC<IWorkListProps> = ({data, loading}) => {

	const [index, setIndex] = useState(0);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={wrapper}
			onWheel={(e) => {
				e.preventDefault();

				if (e.deltaY > 0 && index + 3 < (data?.works.length || 0)) {
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
							data && data.works.slice(index, index + 3).map((el) => (
								<Grid item>
									<WorkItem
										key={el.id}
										{...el}
										to={`/works/${el.id}`}
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