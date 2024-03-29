import React, { useState, useRef } from 'react';
import { GetWorks } from '../../types/api';
import { WorkItem } from '../WorkItem/WorkItem';
import { Grid } from '@material-ui/core';
import gsap, { Power4 } from 'gsap';
import { ListScrollSpy } from '../ListScrollSpy/ListScrollSpy';
import './WorkList.css';
import { FallbackText } from '../FallbackText/FallbackText';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';

interface IWorkListProps {

	works: ReadonlyArray<{
		id: string,
		name: string,
		description: string,
		imageUrl: string,
		views: number,
		usage: number,
		created_at: any,
		updated_at: any,
	}>;

	filter: string;

}

export const WorkList: React.FC<IWorkListProps> = ({works}) => {

	const [index, setIndex] = useState(0);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div className="work-list-wrapper">

			<div className="upper-triangle"></div>

			<div className="lower-triangle"></div>

			<div className="scroll-spy-wrapper">
				<ListScrollSpy offset={(works.length || 0) > 3 ? index / ((works.length || 3) - 3) : 1} afterColor="black">
					<div className="scroll-spy-text">
						{Math.round(((works.length || 0) > 3 ? index / ((works.length || 3) - 3) : 1) * 100)}%
					</div>
				</ListScrollSpy>
			</div>

			<div
				ref={wrapper}
				onWheel={(e) => {
					e.preventDefault();
	
					if (e.deltaY > 0 && index + 3 < (works.length || 0)) {
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
					works.length ? (
						<Grid
							container
							direction="column"
							spacing={1}
						>
							{
								works.slice(index, index + 3).map((el) => (
									<Grid
										item
										key={el.id}
									>
										<Link to={`/works/${el.id}`}>
											<Card
												imageUrl={el.imageUrl}
												upperText={el.name}
												lowerText={el.description}
												color={"#" + Math.random().toString(16).substr(-6)}
											/>
										</Link>
									</Grid>
								))
							}
						</Grid>
					) : (
						<FallbackText text="No work was found"/>
					)
				}
			</div>
		</div>
	)
}