import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeLineInstrument from './TimeLineInstrument';

describe('<TimeLineInstrument />', () => {
  test('it should mount', () => {
    render(<TimeLineInstrument />);
    
    const timeLineInstrument = screen.getByTestId('TimeLineInstrument');

    expect(timeLineInstrument).toBeInTheDocument();
  });
});