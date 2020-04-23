/** @format */

import React, { useState, useRef } from "react";
import { GetUsers } from "../../types/api";
import { Card } from "../Card/Card";
import { Grid } from "@material-ui/core";
import gsap, { Power4 } from "gsap";
import { Link } from "react-router-dom";
import "./UserList.css";
import { ScrollSpy } from "../ScrollSpy/ScrollSpy";
import { FallbackText } from "../FallbackText/FallbackText";

interface IUserListProps {

	users: ReadonlyArray<{
		id: string,
		name: string,
		imageUrl: string,
		created_at: any,
		updated_at: any,
	}>;

}

export const UserList: React.FC<IUserListProps> = ({ users }) => {
	const [index, setIndex] = useState(0);

	const wrapper = useRef<HTMLDivElement>(null);

	return (
		<div className="user-list-wrapper">
			<div className="upper-triangle"></div>

			<div className="lower-triangle"></div>

			<div className="list-scroll-spy-wrapper">
				<ScrollSpy offset={(users.length || 0) > 3 ? index / ((users.length || 3) - 3) : 1} afterColor="black">
					<div className="scroll-spy-text">{Math.round(((users.length || 0) > 3 ? index / ((users.length || 3) - 3) : 1) * 100)}%</div>
				</ScrollSpy>
			</div>

			<div
				ref={wrapper}
				onWheel={(e) => {
					e.preventDefault();

					if (e.deltaY > 0 && index + 3 < (users.length || 0)) {
						setIndex(index + 1);
						gsap.fromTo(
							wrapper.current,
							0.5,
							{
								y: 50,
								ease: Power4.easeOut,
							},
							{
								y: 0,
								ease: Power4.easeOut,
							},
						);
					} else if (e.deltaY < 0 && index > 0) {
						setIndex(index - 1);
						gsap.fromTo(
							wrapper.current,
							0.5,
							{
								y: -50,
								ease: Power4.easeOut,
							},
							{
								y: 0,
								ease: Power4.easeOut,
							},
						);
					}
				}}>
				{
					users.length ? (
						<Grid
							container
							direction="column"
							spacing={1}
						>
							{
								users.slice(index, index + 3).map((el) => (
									<Grid item key={el.id}>
										<Link to={`/users/${el.id}`}>
											<Card
												imageUrl={el.imageUrl}
												upperText={el.name}
												lowerText={el.created_at.split("T")[0]}
												color={"#" + Math.random().toString(16).substr(-6)}
												isListItem
											/>
										</Link>
									</Grid>
								))}
						</Grid>
					) : (
						<FallbackText text="No user was found"/>
					)
				}
			</div>
		</div>
	);
};
