/** @format */

import React, { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "../components/Navbar/Navbar";
import { BackgroundGrid } from "../components/BackgroundGrid/BackgroundGrid";
import { GradientPass } from "../components/GradientPass/GradientPass";
import { ClickWave } from "../components/ClickWave/ClickWave";
import { Cursor } from "../components/Cursor/Cursor";

interface IRoutesProps {}

export const Router: React.FC<IRoutesProps> = (props) => {
	return (
		<BrowserRouter>
			<Cursor />
			<ClickWave />
			<GradientPass />

			<Navbar />
			<Routes />

			<BackgroundGrid />
		</BrowserRouter>
	);
};
