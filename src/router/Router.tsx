/** @format */

import React, { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "../components/Navbar/Navbar";
import { BackgroundGrid } from "../components/BackgroundGrid/BackgroundGrid";
import { GradientPass } from "../components/GradientPass/GradientPass";
import { ClickWave } from "../components/ClickWave/ClickWave";

interface IRoutesProps {}

export const Router: React.FC<IRoutesProps> = (props) => {
	return (
		<BrowserRouter>
			<ClickWave/>
			<GradientPass />

			<Navbar />
			<Routes />

			<BackgroundGrid />
		</BrowserRouter>
	);
};
