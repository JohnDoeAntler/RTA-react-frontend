import React from "react";
import { isLoggedIn } from "../utils/UserHelper";
import { Caretaker } from "./Caretaker";
import { Guest } from "./Guest";

export const Home: React.FC = () => isLoggedIn() ? <Caretaker/> : <Guest/>;
