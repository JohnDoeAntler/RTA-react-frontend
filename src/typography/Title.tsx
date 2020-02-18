import React, { Component } from "react";
import "./Title.css";

export class Title extends Component {
	public render() {
		return (
			<div className="title">{this.props.children}</div>
		);
	}
}
