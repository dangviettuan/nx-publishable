import React from 'react';

import styled from 'styled-components';
import { Button } from '@publishable/button';
import { capitalize } from '@publishable/capitalize';

/* eslint-disable-next-line */
export interface ButtonShowcaseProps {}

const StyledButtonShowcase = styled.div`
  color: pink;
`;

export function ButtonShowcase(props: ButtonShowcaseProps) {
  return (
    <StyledButtonShowcase>
      {capitalize('lowercase')}
      <Button />
      <h1>Welcome to button-showcase!</h1>
    </StyledButtonShowcase>
  );
}

export default ButtonShowcase;
