import React, { useRef, useEffect } from 'react';
import gsap, { Power4} from 'gsap';
import './ScrollSpy.css';

interface IScrollSpyProps {

	beforeColor?: string;

	afterColor?: string;

	radius?: number;

	width?: number;

	offset?: number;

}

export const ScrollSpy: React.FC<IScrollSpyProps> = (props) => {

	const radius = props.radius || 40;
	const width = props.width || 2;
	const offset = props.offset || 0;
	const beforeColor = props.beforeColor || "rgba(127, 127, 127, 0.4)";
	const afterColor = props.afterColor || "rgba(127, 127, 127, 0.8)";

	const strokeDasharray = Math.PI * radius * 2;
	const strokeDashoffset = (1 - offset) * strokeDasharray;

	const size = (radius + width) * 2;
	const pos = radius + width;

	const el = useRef<SVGCircleElement>(null);

	useEffect(() => {
		gsap.to(
			el.current,
			0.5,
			{
				strokeDashoffset,
				ease: Power4.easeOut,
			}
		)
	}, [offset]);

	return (
		<div className="scroll-spy-wrapper">
			<div className="scroll-spy-children">
				{
					props.children
				}
			</div>

			<svg width={size} height={size}>
				<circle cx={pos} cy={pos} r={radius} stroke={beforeColor} strokeWidth={width} fill="transparent" strokeDasharray={strokeDasharray}/>
	
				<circle ref={el} cx={pos} cy={pos} r={radius} stroke={afterColor} strokeWidth={width} fill="transparent" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} />
			</svg>
		</div>
	)
}