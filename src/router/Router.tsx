/** @format */

import React, { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "../components/Navbar/Navbar";

interface IRoutesProps {}

export const Router: React.FC<IRoutesProps> = (props) => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes />
			</BrowserRouter>
		</>
	);
};
