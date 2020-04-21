import React, { useEffect, useRef } from "react";
import "./CircleButton.css";
import Lottie from "lottie-web";

interface ICircleButtonProps {
	backgroundColor: string;
	onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
	disabled?: boolean;
}

export const CircleButton: React.FC<ICircleButtonProps> = (props) => {

	//
	// ─── ANIMATION ──────────────────────────────────────────────────────────────────
	//

	const fx = useRef<HTMLDivElement>(null);
	const btn = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const anim = Lottie.loadAnimation({
			container: fx.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/animations/button.json",
		});

		anim.addEventListener("data_ready", () => {
			anim.goToAndStop(100, true);
		});

		btn.current && btn.current.addEventListener("click", () => {
			anim.goToAndPlay(0, true);
		});

		return () => {
			anim.destroy();
		};
	}, []);

	return (
		<span>
			<button
				ref={btn}
				className="circle-button"
				style={{ backgroundColor: props.backgroundColor }}
				onClick={props.onClick}
				disabled={props.disabled}
			>
				<span className="circle-button-icon">
					<div ref={fx} style={{
						position: "absolute",
						width: 120,
						height: 120,
						left: "50%",
						top: "50%",
						pointerEvents: "none",
						zIndex: -1,
					}}/>
					{
						props.children
					}
				</span>
			</button>
		</span>
	);
};