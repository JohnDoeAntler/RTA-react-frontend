import React, { Component } from "react";
import "./Caption.css";

export class Caption extends Component {
	public render() {
		return (
			<p className="caption">{this.props.children}</p>
		);
	}
}
