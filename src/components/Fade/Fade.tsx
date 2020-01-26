import React, { FC, useEffect, useState } from 'react';
import { StyledContainer } from './styles';

const Fade: FC<any> = ({ show, children }) => {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) {
			setRender(true)
		}
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		shouldRender && (
			<StyledContainer
				show={show}
				onAnimationEnd={onAnimationEnd}
			>
				{children}
			</StyledContainer>
		)
	);
};

export default Fade;