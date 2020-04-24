/** @format */

import React, { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "../components/Navbar/Navbar";
import { BackgroundGrid } from "../components/BackgroundGrid/BackgroundGrid";
import { GradientPass } from "../components/GradientPass/GradientPass";

interface IRoutesProps {}

export const Router: React.FC<IRoutesProps> = (props) => {
	return (
		<BrowserRouter>
			<GradientPass />

			<Navbar />
			<Routes />

			<BackgroundGrid />
		</BrowserRouter>
	);
};
