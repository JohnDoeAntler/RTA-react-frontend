import React, { useRef, useEffect, useState } from 'react';
import gsap, { Power4 } from 'gsap';
import './PageScrollSpy.css';

interface IPageScrollSpyProps {

	beforeColor?: string;

	afterColor?: string;

	radius?: number;

	width?: number;

}

export const PageScrollSpy: React.FC<IPageScrollSpyProps> = (props) => {

	const radius = props.radius || 40;
	const width = props.width || 2;
	const beforeColor = props.beforeColor || "rgba(127, 127, 127, 0.4)";
	const afterColor = props.afterColor || "rgba(127, 127, 127, 0.8)";

	const strokeDasharray = Math.PI * radius * 2;

	const size = (radius + width) * 2;
	const pos = radius + width;

	const el = useRef<SVGCircleElement>(null);

	const [offset, setOffset] = useState(0);
	
	useEffect(() => {
		const listener = () => {
			setOffset(window.scrollY / (document.documentElement.offsetHeight - document.documentElement.clientHeight));
		};

		window.addEventListener('scroll', listener);

		return () => {
			window.removeEventListener('scroll', listener);
		}
	}, []);

	useEffect(() => {
		gsap.to(
			el.current,
			0.5,
			{
				strokeDashoffset: (1 - offset) * strokeDasharray,
				ease: Power4.easeOut,
			}
		);
	}, [offset]);

	return (
		<div className="page-scroll-spy-wrapper" style={{
			width: size,
			height: size,
		}}>
			<div className="page-scroll-spy-children">
				<div className="page-scroll-spy-text">
					{Math.round(offset * 100)}%
				</div>
			</div>

			<svg width={size} height={size}>
				<circle cx={pos} cy={pos} r={radius} stroke={beforeColor} strokeWidth={width} fill="transparent" strokeDasharray={strokeDasharray}/>
	
				<circle ref={el} cx={pos} cy={pos} r={radius} stroke={afterColor} strokeWidth={width} fill="transparent" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDasharray} />
			</svg>
		</div>
	)
}