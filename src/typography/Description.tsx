import React, { Component } from "react";
import "./Caption.css";

export class Description extends Component {
	public render() {
		return (
			<span className="caption">{this.props.children}</span>
		);
	}
}
