import React from "react"
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Parent from '../parent.component';

describe('[Component] Parent', () => {
  let wrapper: any;

  beforeEach(() => {
    jest.useFakeTimers();

    wrapper = render(
      <Parent />
    );
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    const element = wrapper.getByTestId('parent');

    expect(element).toMatchSnapshot();
  });
});
