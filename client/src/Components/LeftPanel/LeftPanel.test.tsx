import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftPanel from './LeftPanel';

describe('<LeftPanel />', () => {
  test('it should mount', () => {
    render(<LeftPanel />);
    
    const leftPanel = screen.getByTestId('LeftPanel');

    expect(leftPanel).toBeInTheDocument();
  });
});