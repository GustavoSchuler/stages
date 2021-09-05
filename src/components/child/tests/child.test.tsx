import React from "react"
import { render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Child from '../child.component';

describe('[Component] Child', () => {
  let wrapper: any;

  const mockedProps = {
    color: 'blue',
    duration: 1000,
    onLoaded: jest.fn(),
  }

  beforeEach(() => {
    jest.useFakeTimers();
    const { color, duration, onLoaded } = mockedProps;

    wrapper = render(
      <Child color={color} duration={duration} onLoaded={() => onLoaded} />
    );
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    const element = wrapper.getByTestId('child__box');

    expect(element).toMatchSnapshot();
  });

  it('should render loader with correct color', () => {
    const element = wrapper.getByTestId('child__loader');

    expect(element).toHaveAttribute('color', '#2196F3');
  });

  it('should callback after duration end', () => {
    waitFor(() => expect(mockedProps.onLoaded).toHaveBeenCalledTimes(1));
  });
});
