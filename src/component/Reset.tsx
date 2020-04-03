import { Refresh } from "@material-ui/icons";
import React, { useRef, useEffect } from "react";
import "./Reset.css";
import Lottie from "lottie-web";

export const Reset = () => {

	const fx = useRef<HTMLDivElement>(null);
	const btn = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const anim = Lottie.loadAnimation({
			container: fx.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/animations/circle_button.json",
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
		<button ref={btn} className="reset-button" type="reset">
			<span className="reset-button-icon">
				<div
					ref={fx}
					style={{
						position: "absolute",
						width: 120,
						height: 120,
						left: "50%",
						top: "50%",
						pointerEvents: "none",
						zIndex: -1,
					}}
				/>
				<Refresh />
			</span>
		</button>
	);
};
