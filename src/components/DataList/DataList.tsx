import React, { useState, useRef, useEffect } from 'react';
import { FallbackText } from '../FallbackText/FallbackText';
import { Grid } from '@material-ui/core';
import { DataCard } from '../DataCard/DataCard';
import gsap, { Power4 } from 'gsap';
import './DataList.css';
import { ListScrollSpy } from '../ListScrollSpy/ListScrollSpy';

interface IDataListProps {

	datas: ReadonlyArray<{
		id: string,
		fileUrl: string,
		created_at: any,
		updated_at: any,
	}>;

	remove: (options: {
		variables: {
			id: string,
		},
	}) => Promise<any>;

	onRemoved?: () => void;

}

export const DataList: React.FC<IDataListProps> = ({ datas, remove, onRemoved }) => {

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(0);
	}, [datas.length]);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div className="data-list-wrapper">

			<div className="upper-triangle"></div>

			<div className="lower-triangle"></div>

			<div className="scroll-spy-wrapper">
				<ListScrollSpy offset={(datas.length || 0) > 3 ? index / ((datas.length || 3) - 3) : 1} afterColor="black">
					<div className="scroll-spy-text">
						{Math.round(((datas.length || 0) > 3 ? index / ((datas.length || 3) - 3) : 1) * 100)}%
					</div>
				</ListScrollSpy>
			</div>

			<div
				ref={wrapper}
				onWheel={(e) => {
					e.preventDefault();
	
					if (e.deltaY > 0 && index + 3 < (datas.length || 0)) {
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
					datas.length ? (
						<Grid
							container
							direction="column"
							spacing={1}
						>
							{
								datas.slice(index, index + 3).map((el) => (
									<Grid
										item
										key={el.id}
									>
										<DataCard
											{...el}
											remove={remove}
											onRemoved={() => onRemoved && onRemoved()}
										/>
									</Grid>
								))
							}
						</Grid>
					) : (
						<FallbackText text="No data was found"/>
					)
				}
			</div>
		</div>
	)
}