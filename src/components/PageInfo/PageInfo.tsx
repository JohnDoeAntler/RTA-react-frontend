import React from 'react';
import './PageInfo.css';

interface IPageInfoProps {
	text: string;
}

export const PageInfo: React.FC<IPageInfoProps> = (props) => {
	return (
		<div className="page-info-wrapper">
			<div className="page-info-svg-wrapper">
				<svg width="120" height="120">
					<line x1="0" y1="0" x2="120" y2="120" stroke="#111" strokeWidth="30" />

					<line x1="120" y1="0" x2="0" y2="120" stroke="#111" strokeWidth="30" />
				</svg>
			</div>

			<div className="page-info-line-wrapper">
				<div className="page-info-line"></div>

				<div className="page-info-text">
					{
						props.text
					}
				</div>
			</div>
		</div>
	)
}