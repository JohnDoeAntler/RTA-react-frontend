import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-web';
import './LoadingAnimation.css';

interface ILoadingAnimationProps {

	isInitializing: boolean;

}

let isLoading = true;

export const LoadingAnimation: React.FC<ILoadingAnimationProps> = (props) => {

	const el = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		
		const anim = Lottie.loadAnimation({
			container: el.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: true,
			path: "/animations/loading.json",
		});

		anim.addEventListener('complete', () => {
			if (isLoading) {
				anim.goToAndPlay(0);
			}
		})

		return () => anim.destroy();

	}, []);

	useEffect(() => {
		if (!props.isInitializing) {
			isLoading = false;
		}
	}, [props.isInitializing]);

	return (
		<div className="loading-animation" ref={el}></div>
	)
}