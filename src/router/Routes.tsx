import React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import { Home } from '../views/home/Home';
import { Users } from '../views/users/Users';
import { User } from '../views/user/show/User';
import { UserEdit } from '../views/user/edit/UserEdit';
import { Works } from '../views/works/Works';
import { WorkNew } from '../views/work/new/WorkNew';
import { WorkEdit } from '../views/work/edit/WorkEdit';
import { Images } from '../views/work/images/Images';
import { Audios } from '../views/work/audios/Audios';
import { Work } from '../views/work/show/Work';
import { Favourites } from '../views/favourites/Favourites';
import { Followings } from '../views/followings/Followings';
import { Notifications } from '../views/notifications/Notifications';
import { Progresses } from '../views/progresses/Progresses';
import { ProgressNew } from '../views/progress/new/ProgressNew';

export const Routes = withRouter((props) => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />

			<Route path="/users" component={Users} exact />
			<Route path="/user/:id/edit/" component={UserEdit} exact />
			<Route path="/user/:id" component={User} exact />

			<Route path="/works" component={Works} exact />
			<Route path="/work/new" component={WorkNew} exact />
			<Route path="/work/:id/edit" component={WorkEdit} exact />
			<Route path="/work/:id/images" component={Images} exact />
			<Route path="/work/:id/audios" component={Audios} exact />
			<Route path="/work/:id" component={Work} exact />
			<Route path="/work/:id/progress/new" component={ProgressNew} exact />

			<Route path="/favourites" component={Favourites} exact />
			<Route path="/followings" component={Followings} exact />

			<Route path="/notifications" component={Notifications} exact />

			<Route path="/progresses" component={Progresses} exact />
		</Switch>
	);
});
