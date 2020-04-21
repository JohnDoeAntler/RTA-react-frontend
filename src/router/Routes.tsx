import React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import { Home } from '../views/home/Home';
import { Users } from '../views/users/list/Users';
import { User } from '../views/users/show/User';
import { UserEdit } from '../views/users/edit/UserEdit';
import { Works } from '../views/works/list/Works';
import { WorkNew } from '../views/works/new/WorkNew';
import { WorkEdit } from '../views/works/edit/WorkEdit';
import { Images } from '../views/works/images/Images';
import { Audios } from '../views/works/audios/Audios';
import { Work } from '../views/works/show/Work';
import { Favourites } from '../views/favourites/Favourites';
import { Followings } from '../views/followings/Followings';
import { Notifications } from '../views/notifications/Notifications';
import { Progresses } from '../views/progresses/list/Progresses';
import { ProgressNew } from '../views/progresses/new/ProgressNew';

export const Routes = withRouter((props) => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />

			<Route path="/users" component={Users} exact />
			<Route path="/users/:id/edit/" component={UserEdit} exact />
			<Route path="/users/:id" component={User} exact />

			<Route path="/works" component={Works} exact />
			<Route path="/works/new" component={WorkNew} exact />
			<Route path="/works/:id/edit" component={WorkEdit} exact />
			<Route path="/works/:id/images" component={Images} exact />
			<Route path="/works/:id/audios" component={Audios} exact />
			<Route path="/works/:id/progress/new" component={ProgressNew} exact />
			<Route path="/works/:id" component={Work} exact />

			<Route path="/favourites" component={Favourites} exact />
			<Route path="/followings" component={Followings} exact />

			<Route path="/notifications" component={Notifications} exact />

			<Route path="/progresses" component={Progresses} exact />
		</Switch>
	);
});
