import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeLine from './TimeLine';

describe('<TimeLine />', () => {
  test('it should mount', () => {
    render(<TimeLine />);
    
    const timeLine = screen.getByTestId('TimeLine');

    expect(timeLine).toBeInTheDocument();
  });
});