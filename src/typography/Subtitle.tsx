import React, { Component } from "react";
import "./Subtitle.css";

export class Subtitle extends Component {
	public render() {
		return (
			<div className="sub-title">
				{
					this.props.children
				}
			</div>
		);
	}
}
