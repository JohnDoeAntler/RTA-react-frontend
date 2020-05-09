import React, { useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';
import './BackgroundGrid.css';

interface IBackgroundGridProps {
}

export const BackgroundGrid: React.FC<IBackgroundGridProps> = (props) => {

	const bg = useRef<HTMLDivElement>(null);

	useEffect(() => {

		const listener = (e: MouseEvent) => {
			gsap.to(
				bg.current,
				0.5,
				{
					backgroundPositionX: e.clientX / 50,
					backgroundPositionY: e.clientY / 50,
					ease: Expo.easeOut
				}
			)
		};

		document.addEventListener('mousemove', listener);

		return () => document.removeEventListener('mousemove', listener);
	}, []);

	return (
		<div
			ref={bg}
			className="background-grid"
		>
		</div>
	)
}