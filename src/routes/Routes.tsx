/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Favourites } from "../layout/Favourites";
import { Followings } from "../layout/Followings";
import { Home } from "../layout/Home";
import { ImageDataEdit } from "../layout/ImagaDataEdit";
import { Login } from "../layout/Login";
import { SignUp } from "../layout/SignUp";
import { UserDetail } from "../layout/UserDetail";
import { UserEdit } from "../layout/UserEdit";
import { UserList } from "../layout/UserList";
import { VoiceDataEdit } from "../layout/VoiceDataEdit";
import { WorkCreate } from "../layout/WorkCreate";
import { WorkDetail } from "../layout/WorkDetail";
import { WorkEdit } from "../layout/WorkEdit";
import { WorkList } from "../layout/WorkList";

export const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/work/new" component={WorkCreate} exact />

				<Route path="/user/edit/:id" component={UserEdit} exact />

				<Route path="/work/edit/:id" component={WorkEdit} exact />
				<Route
					path="/work/images/:id"
					component={ImageDataEdit}
					exact
				/>
				<Route
					path="/work/voices/:id"
					component={VoiceDataEdit}
					exact
				/>

				<Route path="/" component={Home} exact />
				<Route path="/work" component={WorkList} exact />
				<Route path="/user" component={UserList} exact />
				<Route path="/work/:id" component={WorkDetail} exact />
				<Route path="/user/:id" component={UserDetail} exact />
				<Route path="/login" component={Login} exact />
				<Route path="/register" component={SignUp} exact />
				<Route path="/favourites/:id" component={Favourites} exact />
				<Route path="/followings/:id" component={Followings} exact />
			</Switch>
		</Router>
	);
};
