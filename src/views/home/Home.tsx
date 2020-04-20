/** @format */

import React from "react";
import { Grid, Container } from "@material-ui/core";
import { UnderLineText } from "../../components/UnderLineText/UnderLineText";
import { Link } from "react-router-dom";
import './Home.css';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
	return (
		<Container>
			<Grid
				direction="column"
				justify="center"
				style={{
					height: "100vh",
				}}
				spacing={2}
				container
			>

				<Grid item>
					<span className="title-text">
						Reminiscence
					</span>
				</Grid>

				<Grid item>
					<span className="title-text">
						Therapy
					</span>
				</Grid>

				<Grid item>
					<span className="title-text">
						App
					</span>
				</Grid>

				<Grid item>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, assumenda labore. Iste sunt illum ipsa quidem nesciunt at. Voluptates
					quisquam laudantium sit soluta exercitationem delectus odio aspernatur repellendus est quae.
				</Grid>

				<Grid item>
					<hr/>
				</Grid>

				<Grid item>
					<Grid
						className="link-text"
						spacing={4}
						container
						>
						<Grid item>
							<UnderLineText>
								<Link to="/users">users</Link>
							</UnderLineText>
						</Grid>

						<Grid item>
							<UnderLineText>
								<Link to="/works">works</Link>
							</UnderLineText>
						</Grid>

						<Grid item>
							<UnderLineText>
								<Link to="/followings">followings</Link>
							</UnderLineText>
						</Grid>

						<Grid item>
							<UnderLineText>
								<Link to="/favourites">favourites</Link>
							</UnderLineText>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
