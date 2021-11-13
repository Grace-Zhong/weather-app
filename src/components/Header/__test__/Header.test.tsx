import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {
  afterEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('should render header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
