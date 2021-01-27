import React from 'react';
import { render } from '@testing-library/react';

import ButtonShowcase from './button-showcase';

describe('ButtonShowcase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonShowcase />);
    expect(baseElement).toBeTruthy();
  });
});
