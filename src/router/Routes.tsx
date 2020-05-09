import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch, RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
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
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap, { Expo } from 'gsap';
import './Routes.css';

interface IRoutesProps {

	isMenuOpened: boolean;

}

export const Routes: React.FC<IRoutesProps> = (props) => {

	const history = useHistory();

	const [ isInitial, setInitial] = useState(true);

	const black = useRef<HTMLDivElement>(null);

	const white = useRef<HTMLDivElement>(null);

	const wrapper = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!props.isMenuOpened && !isInitial) {
			gsap.to(
				wrapper.current,
				0.5,
				{
					x: '20vw',
					ease: Expo.easeIn,
				}
			).then(() => {
				gsap.fromTo(
					wrapper.current,
					1,
					{
						x: '-20vw',
						ease: Expo.easeOut,
						delay: 0.2,
					}, {
						x: '0',
						ease: Expo.easeOut,
						delay: 0.2,
					}
				)
			});

			gsap.fromTo(black.current, 0.5, {
				x: "-100%",
				ease: Expo.easeIn,
				opacity: 1,
			}, {
				x: "0",
				ease: Expo.easeIn,
			}).then(() => {
				gsap.to(
					black.current,
					1,
					{
						x: '100%',
						ease: Expo.easeOut,
						delay: 0.1,
					}
				)
			});
		} else {
			setInitial(false);
		}
	}, [history.location.key]);

	return (
		<div>
			<div ref={black} className="black-transition"></div>

			<div ref={wrapper} className="transition-wrapper">
				<TransitionGroup>
					<CSSTransition classNames="fade" key={history.location.key} timeout={props.isMenuOpened ? 0 : 500}>
						<Switch location={history.location}>
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
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>
	);
};
