import React, { useRef, useEffect, useState } from 'react';
import Lottie, { AnimationItem } from "lottie-web";
import './ClickWave.css';

interface IClickWaveProps {
}

export const ClickWave: React.FC<IClickWaveProps> = (props) => {

	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {

		const anim = Lottie.loadAnimation({
			container: el.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: true,
			path: "/animations/click.json",
		});

		const listener = (e: MouseEvent) => {
			anim.goToAndPlay(0, true);

			console.log(document.elementFromPoint(e.clientX, e.clientY));

			if (el.current) {
				el.current.style.setProperty('left', `${e.clientX}px`);
				el.current.style.setProperty('top', `${e.clientY}px`);
			}
		}

		window.addEventListener('click', (e) => listener(e));

		return () => {
			anim.destroy();
			window.removeEventListener('click', (e) => listener(e));
		};

	}, []);

	return (
		<div ref={el} className="click-wave"></div>
	)
}
