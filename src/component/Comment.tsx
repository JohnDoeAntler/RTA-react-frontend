/** @format */

import { Box } from "@material-ui/core";
import React from "react";
import { GetWork_work_comments_user } from "../types/api";
import { Caption } from "../typography/Caption";
import { Description } from "../typography/Description";
import { UserInfoBar } from "./UserInfoBar";
import { Link } from "react-router-dom";

interface ICommentProps {

	content: string;

	createdAt: string;

	user: GetWork_work_comments_user;

}

export const Comment: React.FC<ICommentProps> = (props) => {

	return (
		<div className="comment">
			<Link to={`/user/${props.user.id}`}>
				<UserInfoBar
					userId={props.user.id}
					alt="test"
					src={props?.user.imageUrl || ""}
					size={32}
				>
					<div>{props.user.name}</div>
				</UserInfoBar>
			</Link>
			<Box height=".5rem" />
			<div
				style={{
					marginLeft: "12px",
					paddingLeft: "12px",
					borderLeft: "8px solid rgba(0, 0, 0, 0.0625)",
				}}
			>
				<Description>{props.content}</Description>
				<Caption>
					{
						`created at: ${props.createdAt.split("T")[0]}`
					}
				</Caption>
			</div>
		</div>
	);
};
