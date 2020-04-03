/** @format */

import Popover from "@material-ui/core/Popover";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useRef } from "react";
import "./CircleButton.css";
import Lottie from "lottie-web";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		popover: {
			pointerEvents: "none",
		},
		paper: {
			padding: theme.spacing(1),
			marginTop: ".5rem",
			backgroundColor: "#303030",
			color: "white",
		},
	}),
);

interface ICircleButtonProps {
	backgroundColor: string;
	popoverText: string;
	onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
	disabled?: boolean;
}

export const CircleButton: React.FC<ICircleButtonProps> = (props) => {

	//
	// ─── POPOVER TEXT ───────────────────────────────────────────────────────────────
	//
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const handlePopoverOpen = (
		event: React.MouseEvent<HTMLElement, MouseEvent>,
	) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

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
		<span>
			<button
				ref={btn}
				className="circle-button"
				type="submit"
				style={{ backgroundColor: props.backgroundColor }}
				aria-owns={open ? "mouse-over-popover" : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
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
			<Popover
				id="mouse-over-popover"
				className={classes.popover}
				classes={{
					paper: classes.paper,
				}}
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
			>
				<Typography>{props.popoverText}</Typography>
			</Popover>
		</span>
	);
};
