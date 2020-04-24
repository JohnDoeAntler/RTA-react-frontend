import React, { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap';
import './Cursor.css';

interface ICursorProps {
}

export const Cursor: React.FC<ICursorProps> = (props) => {

	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const listener = (e: MouseEvent) => {
			gsap.to(
				el.current,
				1,
				{
					left: e.clientX,
					top: e.clientY,
					ease: Expo.easeOut,
				},
			)

			const list = document.elementsFromPoint(e.clientX, e.clientY);

			if (list.some(el => ['IMG', 'BUTTON', 'A'].includes(el.tagName))) {
				gsap.to(
					el.current,
					1,
					{
						scale: 10,
						ease: Expo.easeOut,
					},
				)
			} else{
				gsap.to(
					el.current,
					1,
					{
						scale: 1,
						ease: Expo.easeOut,
					},
				)
			}
		};

		document.addEventListener('mousemove', listener);

		return () => document.removeEventListener('mousemove', listener);
	}, []);

	return (
		<div
			ref={el}
			className="cursor"
		></div>
	);
}