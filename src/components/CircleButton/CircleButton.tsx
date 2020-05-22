/** @format */

import React, { useEffect, useRef } from "react";
import "./CircleButton.css";
import Lottie from "lottie-web";
import { Popover, Typography } from "@material-ui/core";

interface ICircleButtonProps {
	type: "button" | "reset" | "submit";
	backgroundColor: string;
	alt: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
}

export const CircleButton: React.FC<ICircleButtonProps> = (props) => {
	//
	// ─── ANIMATION ──────────────────────────────────────────────────────────────────
	//

	const fx = useRef<HTMLDivElement>(null);
	const btn = useRef<HTMLButtonElement>(null);

	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const open = Boolean(anchorEl);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

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

		btn.current &&
			btn.current.addEventListener("click", () => {
				anim.goToAndPlay(0, true);
			});

		return () => {
			anim.destroy();
		};
	}, []);

	return (
		<div>
			<span
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<button
					ref={btn}
					type={props.type}
					className="circle-button"
					style={{ backgroundColor: props.backgroundColor }}
					onClick={props.onClick}
					disabled={props.disabled}>
					<span className="circle-button-icon">
						<div
							className="circle-button-icon-lottie"
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
						{props.children}
					</span>
				</button>
			</span>

			<Popover
				id="mouse-over-popover"
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
				style={{
					pointerEvents: "none",
					marginTop: "1rem",
				}}
			>
				<Typography>
					{
						props.alt
					}
				</Typography>
			</Popover>
		</div>
	);
};
