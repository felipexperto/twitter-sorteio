import React from 'react';

import * as S from './styled';

const Container = ({ children }) => (
	<S.wrapperStyled>
		{ children }
	</S.wrapperStyled>
	);

export default Container;