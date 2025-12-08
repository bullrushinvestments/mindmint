import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({ default: jest.fn() }));

describe('Core Functionality Component', () => {
  const mockFetchData = jest.fn();
  beforeEach(() => {
    mockFetchData.mockReset();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' })
    }));
  });

  test('renders loading state when fetching data', async () => {
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await screen.findByText(/mocked data/i);
  });

  test('displays error message on failed fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Failed to fetch')));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('calls fetchData with correct arguments on button click', async () => {
    const { getByRole } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    fireEvent.click(getByRole('button'));
    await screen.findByText(/loading/i);
    expect(mockFetchData).toHaveBeenCalledWith({});
  });

  test('handles edge case where data is empty array', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: [] })
    }));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' })
    }));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', /fetch data/i);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({ default: jest.fn() }));

describe('Core Functionality Component', () => {
  const mockFetchData = jest.fn();
  beforeEach(() => {
    mockFetchData.mockReset();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' })
    }));
  });

  test('renders loading state when fetching data', async () => {
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await screen.findByText(/mocked data/i);
  });

  test('displays error message on failed fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Failed to fetch')));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('calls fetchData with correct arguments on button click', async () => {
    const { getByRole } = render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    fireEvent.click(getByRole('button'));
    await screen.findByText(/loading/i);
    expect(mockFetchData).toHaveBeenCalledWith({});
  });

  test('handles edge case where data is empty array', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: [] })
    }));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('ensures component is accessible', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' })
    }));
    render(<CoreFunctionalityComponent fetchData={mockFetchData} />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', /fetch data/i);
  });
});