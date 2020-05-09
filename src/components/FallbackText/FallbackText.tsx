import React from 'react';
import './FallbackText.css';

interface IFallbackTextProps {

	text: string;

}

export const FallbackText: React.FC<IFallbackTextProps> = (props) => {
	return (
		<div className="fallback-text-wrapper">
			- {props.text} - 
		</div>
	)
}