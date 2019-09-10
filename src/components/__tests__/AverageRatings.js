import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AverageRatings from '../AverageRatings';

afterEach(cleanup);

describe('<AverageRatings />', () => {
  it('has a Average Rating heading', () => {
    const { getByRole } = render(
      <AverageRatings location={{ averageRating: 2 }} />,
    );

    expect(getByRole('heading').textContent).toEqual('Average Rating');
  });

  it('Renders the correct props', () => {
    const { container } = render(
      <AverageRatings location={{ averageRating: 2 }} />,
    );
    const paragraph = container.querySelector('p');

    expect(paragraph.textContent).toEqual('2');
  });
});
