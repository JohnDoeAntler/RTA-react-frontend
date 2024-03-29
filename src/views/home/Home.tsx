/** @format */

import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import gsap, { Expo } from 'gsap';
import "./Home.css";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {

	const img = useRef<HTMLImageElement>(null);

	return (
		<div className="home-wrapper">
			<Grid
				direction="column"
				justify="center"
				container
				style={{
					height: '100%',
				}}
			>
				<Grid item className="home-text-wrapper">
					<div style={{
						fontFamily: 'Poppins'
					}}>
						- HOME PAGE -
					</div>

					<hr/>

					<Grid container direction="column" className="home-title-text">
						<Grid item>
							Reminiscence
						</Grid>
						<Grid item>
							Therapy
						</Grid>
						<Grid item>
							App
						</Grid>
					</Grid>

					<hr/>

					<div style={{
						marginTop: '1rem',
						width: '40vw',
					}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur esse quas harum eum molestiae voluptatibus alias? Repudiandae cum earum autem ea esse, quo quaerat vitae officia non quam perspiciatis! 
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quae sapiente qui vel deserunt id quo, distinctio sunt rerum enim tempora vitae voluptate quibusdam quia repellat nam ipsam omnis vero.
					</div>
				</Grid>
			</Grid>

			<div className="home-img-wrapper">
				<img ref={img} className="home-img" src="https://images.pexels.com/photos/3617559/pexels-photo-3617559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
			</div>
		</div>
	);
};
