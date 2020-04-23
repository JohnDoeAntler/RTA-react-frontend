import React, { useState, useRef } from 'react';
import { GetWorks } from '../../types/api';
import { WorkItem } from '../WorkItem/WorkItem';
import { Grid } from '@material-ui/core';
import gsap, { Power4 } from 'gsap';
import { ScrollSpy } from '../ScrollSpy/ScrollSpy';
import './WorkList.css';

interface IWorkListProps {

	data?: GetWorks;

	loading: boolean;

}

export const WorkList: React.FC<IWorkListProps> = ({data, loading}) => {

	const [index, setIndex] = useState(0);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div className="work-list-wrapper">

			<div className="upper-triangle"></div>

			<div className="lower-triangle"></div>

			<div className="list-scroll-spy-wrapper">
				<ScrollSpy offset={(data?.works.length || 0) > 3 ? index / ((data?.works.length || 3) - 3) : 1} afterColor="black">
					<div className="scroll-spy-text">
						{
							((data?.works.length || 0) > 3 ? index / ((data?.works.length || 3) - 3) : 1) * 100
						}%
					</div>
				</ScrollSpy>
			</div>

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
		</div>
	)
}