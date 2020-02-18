/** @format */

import Popover from "@material-ui/core/Popover";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./CircleButton.css";

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
}

export const CircleButton: React.FC<ICircleButtonProps> = (props) => {
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
	return (
		<span>
			<button
				className="circle-button"
				type="submit"
				style={{ backgroundColor: props.backgroundColor }}
				aria-owns={open ? "mouse-over-popover" : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
				onClick={props.onClick}
			>
				<span className="circle-button-icon">
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
